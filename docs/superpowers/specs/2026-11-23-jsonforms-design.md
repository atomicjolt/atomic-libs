# @atomicjolt/jsonforms — Design

Package: `@atomicjolt/jsonforms` (new) · Source material: skipper's
`app/frontend/admin/forms/` renderers and `hooks/useDynamicForm.ts` · Reference:
`@jsonforms/material-renderers` · Date: 2026-11-23

## Intent

A JSON Forms renderer set built on atomic-elements, so any Atomic Jolt app can render a
JSON Schema + UI Schema as an atomic-elements form. Today the renderers live inside
skipper and their validation is wired bottom-up through a context; this package replaces
both with a reusable renderer set and a top-down validation model.

## Goals

- Controls for every atomic-elements input that maps cleanly to a JSON Schema type.
- Cells (bare inputs, no label/description/error) alongside each control, built from the
  same atomic-elements `*Field` root.
- Default layouts (Vertical, Horizontal, Group, Label) built on `Flex` / `View`. Apps are
  expected to override them.
- A shared AJV factory (`createAtomicAjv`) carrying the workarounds skipper needs today.
- A `useJsonForm` hook that owns data, errors, submit, reset and validation mode.
- All validation top-down: schema errors, custom AJV formats/keywords, and a `validate`
  function. No control reports errors upward.
- Uischema option names match material's (`multi`, `toggle`, `format: "radio"`,
  `autocomplete`) so existing schemas carry over.

## Non-goals

- Code editor controls (JSON / JavaScript / CSS). They stay in skipper for v1. If they
  move later, they go behind a subpath export (`@atomicjolt/jsonforms/code-editor`) with
  the editor as an optional peer dependency. Not added to atomic-elements.
- Array, table, `oneOf`/`anyOf`/`allOf` and categorization renderers.
- Async validation (validate-as-you-type against a server).
- Hiding errors for fields hidden by uischema rules (see "Hidden fields" below).

## Anti-goals

- A required provider or context. Renderers work inside a plain `<JsonForms>`.
- Transforming form data between JSON Forms and the app. Data round-trips unchanged.

## Package layout

```
packages/jsonforms/src/
  index.ts                 atomicRenderers, atomicCells, devAtomicRenderers, Unwrapped
  controls/<type>/         Atomic<Type>Control.tsx, Atomic<Type>Cell.tsx, shared binding
  layouts/                 Vertical, Horizontal, Group, Label + shared layout helper
  dev/                     fallback renderer (devAtomicRenderers)
  validation/              createAtomicAjv, formats, i18n defaults, fieldError helper
  hooks/                   useJsonForm, useControlProps
  testing/                 renderForm helper for specs
```

Each renderer file exports the unwrapped component, its tester, and a default export
wrapped with `withJsonFormsControlProps` / `withJsonFormsCellProps` /
`withJsonFormsLayoutProps`, as material does. `Unwrapped` collects the bare components.

### Ranks

Package testers use low ranks (1–5), and `withIncreasedRank` for specialisations, so an
app overrides a renderer by registering its own at a higher rank.

## Controls

| Schema / UI schema | Component | Stored value |
|---|---|---|
| `string` | `TextField` | string |
| `string` + `options.multi` | `TextField` with `FieldTextArea` | string |
| `number` / `integer` | `NumberInput` (integers format with 0 decimals) | number |
| `boolean` | `CheckBox` | boolean |
| `boolean` + `options.toggle` | `ToggleSwitch` | boolean |
| `enum` / `oneOf` const | `CustomSelect` | the option value |
| …+ `options.format: "radio"` | `RadioGroup` | the option value |
| …+ `options.autocomplete` | `ComboBox` | the option value |
| array, `uniqueItems`, items `enum` / `oneOf` | `MultiSelect` | array of option values |
| `format: date` | `DatePicker` | `YYYY-MM-DD` |
| `format: time` | `TimeInput` | `HH:mm:ss` |
| `format: date-time` | `DatePicker`, minute granularity | ISO instant (UTC) |

The text control composes `TextField` with `FieldLabel`, `FieldInput`, `FieldMessage`
and `FieldErrorMessage`. The other controls use the high-level inputs, whose `label`,
`message` and `error` props are optional. Cells use the same inputs with an `aria-label`
(the schema title, or the path) and no help text. Cells exist for text, number, boolean,
select, date, time and date-time; radio, combobox and multi-select fall back to the
select cell or have none.

Enum options are keyed by index, so `null`, numbers, booleans and objects all work as
values without sentinel keys.

atomic-elements' `CheckBox` and `Radio` render their text in a `<span>` that doesn't
name the input. The checkbox and radio controls pass `aria-label` until that's fixed.

### Value rules

- Clearing a field stores `undefined`, never `""`. Number inputs store `undefined` for
  empty / NaN, and a multi-select with nothing selected stores `undefined`, not `[]`.
- `integer` schemas store integers; `number` schemas keep decimals.
- Select options whose value is `null` use a sentinel key internally and store `null`.
- A read-only form (`readonly` / `enabled: false`) renders inputs with `isReadOnly`, so
  text stays selectable and the field isn't greyed out. `ToggleSwitch` has no read-only
  state, so a read-only toggle is disabled.
- `uischema.options.props` is spread onto the field, as in skipper.

## Layouts

`VerticalLayout` → `Flex` column with gap; `HorizontalLayout` → `Flex` row; `Group` →
`View` + `Heading`; `Label` → `Text`. One shared helper dispatches child elements.

## Dev renderers

`devAtomicRenderers` holds a rank-0 fallback that renders the path, schema type and
uischema type when no other renderer matches. Apps opt in:

```ts
renderers={[...atomicRenderers, ...(import.meta.env.DEV ? devAtomicRenderers : [])]}
```

## Validation

All validation runs on the form data, top-down.

1. **Schema** — AJV via `createAtomicAjv()`.
2. **Custom formats / keywords** — registered on the AJV instance, e.g. a
   `"javascript"` format that parses the string. `createAtomicAjv({ formats, keywords })`
   accepts app additions.
3. **Cross-field rules** — `validate(data) => ErrorObject[]` on `useJsonForm`, memoised on
   `data` and passed as `additionalErrors`. `fieldError(path, message)` builds a correctly
   shaped error (`instancePath` like `/settings/url`).
4. **Server errors** — `serverErrors` on `useJsonForm`, merged into `additionalErrors`. A
   server error for a path is dropped once that path's value changes.

Values that can't be represented (e.g. JSON text that won't parse) are written to the
data as-is. The schema type no longer matches, AJV reports it, and submit is blocked. The
control may keep display-only local state (to avoid reformatting while typing) but never
reports errors anywhere.

### createAtomicAjv

Built on `createAjv` from `@jsonforms/core` (one AJV copy), with `useDefaults: true`, plus:

- `oneOf` with more than 50 options skips validation
  ([jsonforms#2271](https://github.com/eclipsesource/jsonforms/issues/2271), closed with
  this workaround, not fixed).
- `enum: []` is treated as "no constraint" instead of a compile error. AJV rejects it in
  its meta-schema check, before keywords run, so `validateSchema` is off: AJV does not
  report malformed schemas. (Skipper's version of this workaround keeps the check on, so
  it likely never took effect.)

### Error messages

A default `i18n.translateError` turns AJV messages into user-facing text ("Required",
"Must be a number", …). Apps can replace it.

### Hidden fields

JSON Forms validates hidden fields; this is deliberate upstream
([jsonforms#2118](https://github.com/eclipsesource/jsonforms/issues/2118)). v1 documents
the `if` / `then` schema pattern for conditional requirements and does nothing else.
Revisit if skipper hits it, or when upstream's pluggable validator
([jsonforms#2644](https://github.com/eclipsesource/jsonforms/pull/2644)) lands.

## useJsonForm

```ts
const form = useJsonForm({ schema, uischema, data, onSubmit, validate?, serverErrors?, ajv?, ...jsonFormsProps });
// { data, errors, isValid, isDirty, submit, reset, props }
<JsonForms {...form.props} />
```

- Starts in `ValidateAndHide`. `submit()` calls `onSubmit(data)` when valid; otherwise it
  switches to `ValidateAndShow` and does not submit.
- `reset()` restores the initial data and returns to `ValidateAndHide`.
- `props` includes `atomicRenderers`, `atomicCells` and the AJV instance unless overridden.
- No context. A `DynamicForm`-style compound wrapper is left to apps.

Caveats, documented:
- `schema`, `uischema` and `ajv` must be referentially stable (JSON Forms re-initialises,
  and AJV recompiles, when they change).
- JSON Forms debounces `onChange` by 10ms, so `data` / `errors` trail keystrokes
  slightly. The hook validates the initial data itself so the form isn't treated as
  valid before the first emit.
- `data` may hold a not-yet-valid value (e.g. a string in an object field). `onSubmit`
  never receives one.

## Constraints

- Peer dependencies: `@jsonforms/core` and `@jsonforms/react` `^3.8`,
  `@atomicjolt/atomic-elements`, `react` `^18 || ^19`.
- Build with `tsc` like the other non-elements packages.

## Testing

- React Testing Library, queried by role and label. No snapshots.
- One `renderForm(schema, uischema?, data?)` helper.
- Tester tests: for each schema / uischema pattern, assert which renderer wins.
- Value-rule tests for clearing, numbers, null select options and read-only.
- `useJsonForm` tests for submit gating, validation mode, reset, `validate`, and server
  errors.

## Storybook

`.storybook/main.ts` uses `titlePrefix` per package: `Elements` for atomic-elements and
`JSON Forms` for this package. One story per schema pattern rendering a real
`<JsonForms>`.

## Migrating skipper

1. Replace skipper's renderers with `atomicRenderers`, registering skipper-only controls
   (code editors, `StatusSelectControl`) at higher ranks. Keep `DynamicForm`. Memoise
   `UserForm`'s `schema()` / `uiSchema()`.
2. Move to `useJsonForm`; delete the `additionalErrors` plumbing and the JSON control's
   `setTimeout`.
