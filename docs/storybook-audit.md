# Storybook docs audit

An audit of the atomic-elements Storybook docs: props tables, controls, code snippets, story
coverage and naming. It's a working list for deciding what to fix, not a finished plan.

**Scope:** all 89 docs pages in the Storybook 10.6.8 build (November 2026), covering
`packages/atomic-elements`.

**How it was produced:** each docs page was rendered in headless Chrome, and its props table,
"Show code" snippets and console output were extracted. Every finding was then checked against
the story file and the component source. Line numbers refer to the tree at the time of the audit.

**How to read it:**
- Part 1 covers problems with one cause that affect many pages. Fixing them first removes a large
  share of the per-component noise. Where a component finding is just a symptom of a Part 1 issue,
  it's left out of Part 2.
- Part 2 lists findings per component.
- Part 3 lists component bugs found along the way.
- Part 4 lists the open decisions.

**Status:** Parts 1, 2 and 3 are worked through on the `docs/storybook-audit-fixes` branch. Each
part and each Part 1 item has a status note saying what was fixed and what is left. Everything
left needs a decision and is collected in Part 4.

### Results

Measured by rendering all 89 docs pages in the built Storybook, before and after the fixes:

| Measure | Before | After |
|---|---|---|
| Props-table rows with an object editor (excluding `style`) | 182 | 18 |
| Boolean / number props with a text box | 12 | 0 |
| Pages whose snippets show action handlers | 34 | 1 |
| Pages showing the classnames `className` type | 23 | 0 |
| Props-table rows with a documented default | 20 | 166 |
| Pages with the "only one ElementsProvider" warning | 86 | 0 |
| Pages with other console warnings | 12 | 1 |
| Snippets with wrong component names | 9 names | 0 |

The 18 remaining object editors are mostly genuine objects or arrays (Table `icons`,
`formatOptions`, `acceptedFileTypes`, LoadingStatus `data`). A few small ones are left: the Format
components' render-function `children`, `slot` on Checkbox and Input, Chip's `id`, and two flex
props on Modal's MDX page. The remaining console warning is the Table Skeleton one in Part 4
(item 11).

Finding categories: **Misnamed**, **Bad control**, **Missing control**, **Unnecessary control**,
**Deprecated**, **Description**, **Defaults**, **Typo**, **Console**, **Stories**, **Snippet**.

---

## Part 1: Cross-cutting issues

### G1. Docgen config drops Storybook's defaults, so simple props get object editors

> **Status:** ✅ Fixed. Added `shouldRemoveUndefinedFromOptional` to `.storybook/main.ts`. Correction to the cause above: Storybook does merge its default docgen options with ours. The option was still needed, but the `node_modules` `propFilter` was not missing before G8 replaced it (see G8).

- **Symptom:** 75 props-table rows across the docs render a JSON "Set object" editor for plain
  `string`, `boolean` or `number` props. Examples: `id`, `name`, `isDisabled`, `rows`, `aria-label`,
  and Modal's `centered`, `isCentered` and `ensureVisible`.
- **Cause:** `.storybook/main.ts` sets `typescript.reactDocgenTypescriptOptions`. That *replaces*
  Storybook's default options rather than extending them, which removes
  `shouldRemoveUndefinedFromOptional: true`. Docgen then reports types like `boolean | undefined`,
  which Storybook can't map to a control.
- **Fix:** add `shouldRemoveUndefinedFromOptional: true` to those options in `.storybook/main.ts`.
- **Verified:** a test build with only this change took six sample pages from 25 object controls
  to 6:

  | Page | Before | After |
  |---|---|---|
  | Modal | 3 | 0 |
  | ToggleSwitch | 5 | 1 |
  | Divider | 6 | 1 |
  | TextAreaInput | 4 | 1 |
  | FileTrigger | 3 | 1 |
  | Table | 4 | 2 |

  The remaining ones are real objects (`icons`, `searchDescriptor`, `acceptedFileTypes`) or
  `className` (see G2).
- **Related decision:** the same defaults include a `propFilter` that hides props inherited from
  `node_modules` types, and our copy of it is commented out in `main.ts`. Restoring it would remove
  inherited react-aria noise (`aria-*`, `id`, `name` on many pages), but it would also hide inherited
  props we may want documented. **Decision needed:** restore the filter and re-add the important
  inherited props through shared argTypes, or keep it off and hide the noisy ones individually.

### G2. `className` shows the classnames library's type

> **Status:** ✅ Fixed with a global argTypes enhancer (`.storybook/utils/argTypes.ts`) rather than per story. It also hides ref props and removes object editors from React-node and function props.

- **Symptom:** on 23 pages, `className` is typed `Argument | Argument[]` and gets an object control.
- **Cause:** `Argument` comes from the classnames package:
  - `packages/atomic-elements/src/types/render.ts:5`
  - `packages/atomic-elements/src/types/common.ts:23` and `:62`
- **Fix:** in `RenderPropsArgTypes` (`packages/atomic-elements/storybook/helpers.tsx`), give
  `className` a text control and a readable type summary such as
  `string | string[] | Record<string, boolean>`. The real type can stay as it is.

### G3. Action handlers clutter every code snippet

> **Status:** ✅ Fixed (`jsx.filterProps` in `.storybook/preview.tsx`).

- **Symptom:** 33 pages' "Show code" snippets include lines like `onPress={function YEe(){}}`. They
  come from `action: "…"` argTypes in the shared helpers (e.g. `PressableArgTypes`), which inject
  spy functions as story args. The minified name only appears in the production build; in dev the
  same line reads `onPress={() => {}}`.
- **Fix:** the SB10 React snippet generator merges `parameters.jsx` into its options, including a
  `filterProps` function (`@storybook/react` jsxDecorator). Add this to the global parameters in
  `.storybook/preview.tsx`:

  ```ts
  jsx: {
    filterProps: (value: unknown, key: string) =>
      value !== undefined && !(typeof value === "function" && /^on[A-Z]/.test(key)),
  },
  ```

  This drops `on*` handlers from snippets while keeping render-prop functions. The Actions panel is
  unaffected.

### G4. Almost no defaults are documented

> **Status:** ✅ Fixed for every component's own props. Defaults use `@default` JSDoc where the prop is declared in the component's folder, and the story's `table.defaultValue` where it's inherited. The argTypes enhancer also stops JSDoc string defaults showing double-quoted. Not covered: defaults on subcomponents' inherited props (Card.Panel, Navbar.Title, Disclosure.Trigger and similar). Those need their own props interfaces first.

- **Symptom:** 20 of 1,398 props-table rows show a default, on 9 of 89 pages.
- **Cause:** components mostly set defaults by destructuring inside the `forwardRef` body, e.g.
  `const { variant = "primary" } = props`. react-docgen-typescript can't see defaults there.
- **Fix:** add `@default` JSDoc tags to the props in the component's types. react-docgen-typescript
  reads those, and editors show them on hover too.
- Part 2 lists each component's actual default values with source lines under **Defaults**.

### G5. Style props: keep them, but collapse them

> **Status:** ✅ Fixed (`.storybook/utils/StylePropsControls.tsx`). Components can keep their key style props in the main table with `parameters.primaryStyleProps`; Flex, Grid, Group, Text and Heading do. MDX docs pages (Modal, ToolTip, LoadingStatus) use their own blocks and still list style props inline.

- **Symptom:** 16 pages list `$`-prefixed style props (389 rows in total). On Modal they outnumber
  the real props roughly 4 to 1.
- **Constraint:** the props table always renders category sections expanded. Storybook's
  `SectionRow` defaults `initialExpanded` to true, and nothing configures it.
- **Fix:** use the supported route. In the custom docs page in `.storybook/preview.tsx`, render
  `<Controls exclude={/^\$/} />` for the main table, then a collapsed
  `<details><summary>Style props</summary><Controls include={/^\$/} /></details>` below it. The
  style props stay documented but out of the way.

### G6. "Only one ElementsProvider" warning on 86 pages

> **Status:** ✅ Fixed (`.storybook/utils/ElementsDocsContainer.tsx`). Storybook mounts each docs story in its own React root, so the color scheme is bridged through two small stores rather than context. Docs pages now also follow the toolbar's dark scheme, which they didn't before.

- **Symptom:** almost every docs page logs `ElementsProvider: only one ElementsProvider should be
  mounted per page`.
- **Cause:** the global decorator in `.storybook/preview.tsx` wraps every story in a root
  `ElementsProvider`, and a docs page renders many stories at once. Nested providers are supported
  and don't warn; only a second *root* provider does
  (`src/components/ColorScheme/ColorSchemeProvider.tsx:97-104`).
- **Fix:**
  - On docs pages, mount a single root `ElementsProvider` in a docs container
    (`parameters.docs.container`), and have it own the color scheme.
  - In the decorator, when `context.viewMode === "docs"`, render a nested provider with the theme
    only and no color-scheme props. Otherwise the nested provider warns that color-scheme props are
    ignored.
  - Story view stays as it is.
- **Still to confirm when implementing:** how the docs container reads the toolbar's `colorScheme`
  global.

### G7. Prop grouping is inconsistent

> **Status:** ✅ Done. The category set is defined and documented in `helpers.tsx`, the retired names (Field State, Presentation, Common) are gone, and the Part 2 work used the standard categories throughout.

- **Symptom:** the docs use 16 different category names: Render Props, Events, Field State, Helper
  Text, Common, Margin, Dimensions, Padding, Position, Overflow, Flex Item, Grid, Presentation,
  Accessibility, Selection, Card. 23 pages use none at all.
- **Recommendation:** use one fixed set, in this order:
  1. **No category:** the component's own key props (`variant`, `size`, `children`, `value`,
     `label` and so on). These are what people come for, so they go first and ungrouped. This
     replaces "Presentation" and "Common".
  2. **State:** `isDisabled`, `isReadOnly`, `isRequired`, `isInvalid`, `isLoading`. This replaces
     "Field State".
  3. **Selection:** selection-mode props on collection components only.
  4. **Helper text:** `label`, `description`, `errorMessage` placement props on fields only.
  5. **Events:** `on*` callbacks.
  6. **Accessibility:** `aria-*`, `id`.
  7. **Render props:** `className`, `style`, render-function children.
  8. **Style props:** in the collapsed block from G5, with their current sub-groups (Padding,
     Margin, …).
- **Implementation:** define these as shared argType sets in
  `packages/atomic-elements/storybook/helpers.tsx`, so category names come from one place and can't
  drift.

### G8. Deprecated props

> **Status:** ✅ Fixed with a docgen `propFilter` that drops `@deprecated` props. That filter replaces Storybook's default one, so it also restates the default `node_modules` rule. Without that, inherited HTML and aria props flooded the tables (fixed in a follow-up commit).

- **Policy:** mark deprecated props `@deprecated` in the type, with the replacement named, and hide
  them from the docs table (`table: { disable: true }` on the argType).
- **Possible automation:** check whether react-docgen-typescript passes JSDoc tags through to
  `propFilter`. If it does, deprecated props can be filtered out globally in `.storybook/main.ts`
  instead of per story. Not verified yet.
- Part 2 lists each deprecated prop under **Deprecated**.

### G9. Docgen gives parent components a subcomponent's name, or no docs at all

> **Status:** ✅ Fixed. Cause: react-docgen-typescript applies the first `X.displayName = "literal"` in a file to every component in it. The new `setDisplayName()` helper (`src/utils/displayName.ts`) is used in all multi-component files, and internal components (SelectFieldInner, MultiSelectFieldInner) are no longer exported. Button and IconButton had a different cause: `.storybook/main.ts` passed `compilerOptions`, so the docgen plugin ignored the package tsconfig and couldn't resolve the `@components` / `@hooks` / `@styles` aliases. It now uses `packages/atomic-elements/tsconfig.json`. Still open: see Part 4 (items 6 and 8).

- **Symptom:** snippets and headings show the wrong component name:
  - Card snippets render `<Card.Header>`
  - DisclosureGroup renders `<Disclosure.Panel>`
  - NumberField renders as `<NumberField.IncrementButton>` on the ComboInput page (its own stories
    hide this with a runtime override)
  - Disclosure renders `<React.ForwardRef>`
- **Cause:** when a file assigns `displayName`s to compound subcomponents
  (`Card.Header.displayName = "Card.Header"`), the docgen plugin's injected code sets the *parent's*
  `displayName` to one of those subcomponent names. It runs after the parent's own assignment, so it
  wins. Confirmed in the built bundle, e.g.
  `L.displayName="NumberField";try{L.displayName="NumberField.IncrementButton",L.__docgenInfo=…`.
  Components that are `forwardRef`s cast through `as unknown as Forwarded…` with no `displayName` get
  no docgen at all, and render as `React.ForwardRef` with an empty props table.
- **Affected:**
  - wrong name: Card, DisclosureGroup, NumberField
  - no name / no docgen: Disclosure, Banner, ListBox
  - wrong props: SelectField, where docgen documents the internal `SelectFieldInner`
- **Also affected, cause not confirmed:** Button and IconButton have no `__docgenInfo` in the bundle
  at all, which is why their tables lack `size`, `loadingLabel` and similar. One suspect: their
  props type is imported through the `@components/...` path alias.
- **Fix direction:**
  1. Give every exported component an explicit `displayName`.
  2. Find which pattern makes the plugin pick the wrong name. Candidates: declaring subcomponents in
     a separate file, or attaching them with `Object.assign` (DateField does this and isn't
     affected).
  3. Re-check each affected page.
  This needs a small spike before rolling it out.

### G10. Format components get no docgen

> **Status:** ✅ Fixed.

- **Cause:** FormatDate, FormatDuration, FormatList and FormatNumber are defined in `index.ts`, and
  the docgen plugin only processes `**/*.tsx` (its default `include`). So their snippets show
  minified names (`<a>`, `<z>`, `<b>`, `<P>`) and their props tables have no types or descriptions.
- **Fix:** move each into `X.component.tsx`, as FormatOptional and FormatTable already are.

### G11. Bugs in the shared argTypes (`packages/atomic-elements/storybook/helpers.tsx`)

> **Status:** ✅ Fixed. Also: `PlacementArgType` offered four invalid placements, `onSelectionChange` was never logged, and the aria argTypes used the ignored `defaultValue` key. Not fixed: components that accept `isLoading` through `FieldInputProps` but ignore it still list it, because the row comes from their types. Removing it changes the public types, so it needs a decision.

These show up on many pages:
- ✅ **Fixed:** **`$flexAlgin`** (line 605) should be `$flexAlign`. The control currently sets a prop nothing reads,
  on every page using `LayoutArgTypes` / `FlexItemArgTypes`.
- **`FieldStateControls` includes `isLoading` and `loadingLabel`** (lines 34-45), but Field,
  DateField, DateInput, DatePicker, TimeInput, MultiSelectField and SelectField don't support
  loading. → Move both into a separate `LoadingArgTypes`, used only by components that support it.
- **`InputControls.placeholder`** (lines 68-73) is added to DateInput, DatePicker, TimeInput,
  ChipGroup, MultiSelectField and Select, which have no `placeholder` prop. `placeholder` and
  `autoFocus` also have no descriptions there.
- **`FocusEventsArgTypes.onFocusChange`** (line 242) reuses `onFocus`'s description.
- **`PlacementArgType`** (lines 99-116) is missing valid placements, e.g. `"bottom left"`,
  `"top right"`, `"start"`, `"end"`. The MenuTrigger story itself uses one that can't be selected.
- ✅ **Fixed:** **`MultiSelectionArgTypes.selectionBehavior`** (line 132) had a garbled description.
- **`$justify`** (lines 755-762) is missing `"left"` and `"right"`. **`$transform`** (line 721)
  offers `"math-auto"`, which the type doesn't allow. **`$wrap`** (lines 702-706) offers
  `pretty` / `balanced`, which are written to `white-space`, where they're invalid (see Text).
- **`FlexItemArgTypes` / `GridItemArgTypes`** are missing `$flexOrder` and `$gridArea`.

### G12. Default values hard-coded in story args, so they show up in snippets

> **Status:** ✅ Fixed for every case listed in Part 2. A few stories still set a value equal to the default where it's the point of the story (e.g. `variant: "info"` in an "Info" story).

- **Symptom:** many stories put a prop's default value in `args`, e.g. `size: "medium"`,
  `isDisabled: false`, `variant: "default"`, `placement: "center"`. Every snippet then shows those
  props, which makes the copied code noisier than real usage. Per-component instances are listed
  under **Snippet**.
- **Fix:** remove them from args, and let G4's `@default` tags show the defaults in the table instead.

### G13. `aria-*` props documented but not forwarded

- **Symptom:** several components list `aria-label`, `aria-labelledby` and the like, but pass
  `filterDOMProps(props)` without `{ labelable: true }`. Those props never reach the DOM:
  - BouncingDots, Loader and ThreeDotLoader
  - Pagination doesn't forward them at all
  - FileInput puts them on its wrapper div rather than on the button
- **Fix:** these are component bugs, not docs issues. Fix them in the components; see Part 3.

### G14. Fields and Format components share undocumented base types

> **Status:** Partly done: `variant` and `dropdownPlacement` are described, and `maxHeight`'s wrong `@default` is removed.

- **Symptom:** many descriptions are missing because shared base types have no JSDoc. Each one
  fixed in one place fixes many pages:
  - `FormatterProps` (`value`, `fallback`, `children`; `src/components/Format/Format.types.ts:8-10`)
  - `Field`'s `size` (`src/components/Fields/Field/Field.component.tsx:32`)
  - `variant` (`src/types/common.ts:44`)
  - `dropdownPlacement` (`src/types/common.ts:99`)
- **Also wrong:** `maxHeight`'s `@default height of the viewport` (`src/types/common.ts:95-96`). The
  components actually default it to `300`.

---

## Part 2: Findings by component

> **Status:** ✅ Worked through on the `docs/storybook-audit-fixes` branch. Every bullet below is
> fixed except those listed in Part 4 (they need a decision) and a few that turned out to be
> already fixed by a Part 1 change. The bullets are kept as written, as a record of what was
> wrong.

Paths are relative to `packages/atomic-elements/` unless they start with `.storybook/`. Unless a
line says otherwise, a bare file name refers to the component's own folder.

### Layout, Typography and Content

#### Flex
Story: `src/components/Layout/Flex/Flex.stories.tsx` · Component: `src/components/Layout/Flex/Flex.component.tsx`
- **[Bad control] ✅ Fixed** `$flexAlgin` typo in the shared argTypes (see G11).
- **[Description]** No `FlexStyleProps` member has JSDoc, so `$direction`, `$gap`, `$display`, `$wrap`, `$justify`, `$align`, `$gapX` and `$gapY` have empty descriptions. → Fix: add JSDoc, e.g. `$direction` "Main axis direction (flex-direction)", `$gap` "Gap between children; a spacing step or CSS length", `$align` "Cross-axis alignment (align-items)". (`src/styles/flex.ts:5-21`)
- **[Defaults]** `$display = "flex"` (`src/styles/flex.ts:26`).

#### Grid
Story: `src/components/Layout/Grid/Grid.stories.tsx` · Component: `Grid.component.tsx`
- **[Console]** "Select with no options" is logged for `$flow`, `$align` and `$justify`, and those rows have no control, because `options` is nested inside `control: { type, options }`. → Fix: top-level `control: "select", options: [...]`. (`Grid.stories.tsx:29-56`)
- **[Missing control]** `$display` (`"grid" | "inline-grid" | "none"`) isn't in the table. (`src/styles/grid.ts:6`)
- **[Bad control]** The `$flow` options `"row-dense"` and `"column-dense"` are passed straight to `grid-auto-flow` (`src/styles/grid.ts:43`), but CSS needs `"row dense"`, so they have no effect. → Fix: map them in `grid()` or change the type. (`src/styles/grid.ts:10`)
- **[Description]** The component has no JSDoc (`Grid.component.tsx:17`), and the prop descriptions exist only in the story; `GridStyleProps` has none. → Fix: move them to `src/styles/grid.ts:5-21`.
- **[Typo] ✅ Fixed** "scale step ( 1 - 9)" → "(1 - 9)" (`Grid.stories.tsx:17`); trailing space in "The alignment of the grid. " (`:41`).
- **[Defaults]** `$display = "grid"` (`src/styles/grid.ts:26`).

#### Group
Story: `src/components/Layout/Group/Group.stories.tsx` · Component: `Group.component.tsx`
- **[Bad control]** `isMerged` (boolean) renders as a textarea and has no description. → Fix: `isMerged: { control: "boolean" }`, plus JSDoc "Visually joins children: removes the gap and inner borders/radii" (`Group.component.tsx:6`). Affects ButtonGroup too.
- **[Snippet]** In "Inputs And Button", the Username input has `aria-label="Password"` (`Group.stories.tsx:44`), and the Button reuses `key="2"` (`:46`).
- **[Stories]** Merged-border styles exist for column and reverse directions (`Group.styles.ts:18-108`), but no story shows a vertical group.
- **[Defaults]** `$direction = "row"` (`Group.component.tsx:17`).

#### Navbar
Story: `src/components/Layout/Navbar/Navbar.stories.tsx` · Component: `Navbar.component.tsx`
- **[Missing control]** `NavbarProps` extends `FlexStyleProps` (`:18`), but the meta doesn't spread `FlexArgTypes`, so `$gap`, `$justify` and the other flex props are missing. (`Navbar.stories.tsx:11-14`)
- **[Missing control]** Subcomponent props (`Section.side`, `BackButton.icon`, Title, Subtitle) are undocumented. → Fix: add `subcomponents`.
- **[Description]** No component JSDoc (`Navbar.component.tsx:20`). `side` has no JSDoc (`:81`); suggest "Aligns section content: left → start, right → end, center → center".
- **[Defaults]** Navbar `$gap="1"` (`:36`); BackButton `icon="arrow_back"`, `aria-label=t("back")` (`:59-60`); Section `side="left"` (`:86`); Title `as="h1"`, `$weight="regular"` (`:114`); Subtitle `as="h2"`, `$weight="light"`, `$color="text-clr-secondary"`, `$size="2"` (`:137-140`).

#### ScrollArea
Story: `src/components/Layout/ScrollArea/ScrollArea.stories.tsx` · Component: `components/ScrollAreaRoot.tsx`
- **[Misnamed]** Snippets render `<F height width>`; `F` is the minified story-local `PrettyGradient` (`ScrollArea.stories.tsx:79-96`). → Fix: replace it with `<View $width $height style={{ backgroundImage }} />` so the snippet can be copied.
- **[Missing control]** `ScrollArea.Bar`'s `orientation`, `size`, `show` and `reserveSpace` have no JSDoc (`components/Scrollbar.tsx:21-24`), and the meta has no `subcomponents`. → Fix: add JSDoc (`size`: "`viewport` matches the viewport, `auto` sizes to content, or a CSS length"; `show`: "`auto` hides the bar when not scrollable"; `reserveSpace`: "Keep the hidden bar's space") and `subcomponents` for Viewport and Bar.
- **[Snippet]** `size="viewport"` is passed explicitly, but it's the default (`ScrollArea.stories.tsx:34,54`).
- **[Stories]** No story shows `show="always"` or `reserveSpace`.
- **[Defaults]** `size="viewport"`, `show="auto"`, `reserveSpace=false` (`components/Scrollbar.tsx:31-33`).

#### View
Story: `src/components/Layout/View/View.stories.tsx` · Component: `View.component.tsx`
- **[Missing control]** `$display` (from `DisplayProps`, `src/styles/layout.ts:7`) isn't in the table. → Fix: a select with `block`, `inline`, `inline-block`, `none`.
- **[Typo] ✅ Fixed** "View is the fundemental layout building block.  " → "fundamental", without the double and trailing space (`View.component.tsx:19`).
- **[Description]** No `View.displayName` (Flex, Grid and Text set one). Not breaking today; add it for consistency (G9). (`View.component.tsx:35`)

#### Em
Story: `src/components/Typography/Em/Em.stories.tsx` · Component: `Em.component.tsx`
- **[Description]** No component JSDoc (`Em.component.tsx:16`).
- Component bug (Part 3): `componentClassName: "aje-strong"` is copied from Strong; it should be `"aje-em"` (`Em.component.tsx:22`).

#### Heading
Story: `src/components/Typography/Heading/Heading.stories.tsx` · Component: `Heading.component.tsx`
- **[Description]** No component JSDoc (`:23`). `HeadingProps` is declared twice; remove the empty duplicate at `:11`.
- **[Description]** The `$align` argType has no description (`storybook/helpers.tsx:676-679`); suggest "Horizontal text alignment".
- **[Stories]** Only Primary. Add a story showing the `$size` scale and the `as` levels.
- **[Defaults]** Element `h1` (`Heading.styles.ts:6`); `$size="6"`, `$m="0"`, `$color="text-clr"` (`:9-11`).

#### Link
Story: `src/components/Typography/Link/Link.stories.tsx` · Component: `Link.component.tsx`
- **[Typo] ✅ Fixed** `parameters.cssProps` should be `cssprops`, the key the CSS Variables table reads. As a result the Link page has no CSS Variables table. (`Link.stories.tsx:16`)
- **[Missing control]** `isDisabled` (from `AriaLinkOptions`) is missing.
- **[Description]** `href` and `target` show only "string"; `as` has no description. Suggest for `as`: "Use `span` for client-side navigation via `onPress`". (`Link.stories.tsx:23-30`)
- **[Defaults]** Element `a` (`Link.styles.ts:8`); `$decoration="var(--link-text-decoration)"`, `$color="var(--link-text-clr)"` (`:9,11`).

#### Strong
Story: `src/components/Typography/Strong/Strong.stories.tsx` · Component: `Strong.component.tsx`
- **[Description]** No component JSDoc (`Strong.component.tsx:16`).

#### Text
Story: `src/components/Typography/Text/Text.stories.tsx` · Component: `Text.component.tsx`
- **[Bad control]** The `$wrap` options `pretty` and `balanced` are written to `white-space` (`src/styles/typography.ts:32`), where they're invalid; `balanced` isn't valid CSS anywhere (`text-wrap` uses `balance`). → Fix: map them to `textWrap` and rename the option (see G11). (`src/styles/typography.ts:10`)
- **[Description]** Only `$clamp` has JSDoc in `TypographyProps` (`src/styles/typography.ts:4-22`); the rest are described only in the story helpers. No component JSDoc either (`Text.component.tsx:21`).
- **[Snippet]** "With Link" uses a ~300-character DuckDuckGo proxy URL as `href`. → Fix: a simple URL. (`Text.stories.tsx:47`)
- **[Defaults]** Element `span` (`Text.styles.ts:6`); `$color="text-clr"` (`:11`).

#### Card
Story: `src/components/Content/Card/Card.stories.tsx` · Component: `Card.component.tsx`
- **[Misnamed]** Every snippet's root renders as `<Card.Header>`; the bundle sets `Card.displayName="Card.Header"` (G9). → Fix: G9, plus `Card.displayName = "Card"` (`Card.component.tsx:33`).
- **[Missing control]** No props table renders, only CSS Variables, likely because of the same docgen problem. → Re-check after G9; if it's still missing, add Render, Layout and Background argTypes.
- **[Description]** Subcomponent JSDoc sits on the `Card.X =` assignment lines (`:76-92`), which docgen doesn't read. → Fix: move each comment above its function (`:35-74`).
- **[Snippet]** "With Actions" has IconButtons without `aria-label`, and children without keys (`Card.stories.tsx:119-128`).
- **[Defaults]** Card `$bg="var(--card-bg-clr)"`, `$p="var(--card-padding)"` (`:27-28`); Panel `$bg="var(--card-panel-bg-clr)"`, `$p="var(--card-panel-padding)"`, `$flexGrow="1"` (`:47-49`); Stack `$gap="var(--card-padding)"`, `$direction="column"` (`:57`); Columns `$gap` (`:61`); Title `$size="3"`, `$weight="bold"` (`:65`); Header `$gap="2"`, `$mb="var(--card-padding)"`, `$align="center"` (`:69`); Grid `$gap` (`:73`).

#### Disclosure
Story: `src/components/Content/Disclosure/Disclosure.stories.tsx` · Component: `Disclosure.component.tsx`
- **[Misnamed]** The root renders as `<React.ForwardRef>`: it's cast `as unknown as ForwardedDisclosure`, has no displayName, and gets no docgen (G9). → Fix: `Disclosure.displayName = "Disclosure"` (after `:124`).
- **[Missing control]** `isDisabled` and `id` are missing (`:38-39`), a result of the missing docgen. There are also no `subcomponents` for Trigger (`icons` prop) and Panel.
- **[Description]** `isExpanded` and `defaultExpanded` show only "boolean". → Fix: "Whether the panel is expanded (controlled)" / "(uncontrolled)"; also JSDoc `isDisabled` (`:35-40`).
- **[Description]** `DisclosurePanelProps extends ButtonProps` (`:126`), so the Panel docs would list Button props. → Fix: base it on `RenderBaseProps` plus div attributes.
- **[Typo] ✅ Fixed** "collapisble" → "collapsible" (`Disclosure.component.tsx:49`).
- **[Stories]** No disabled story and no `defaultExpanded` story.
- **[Defaults]** `isDisabled` → false (`:77`); Trigger `icons={{ expanded: "expand_less", collapsed: "expand_more" }}` (`:155-158`), `slot="trigger"`, `variant="disclosure-trigger"` (`:172-173`).

#### DisclosureGroup
Story: `src/components/Content/Disclosure/DisclosureGroup.stories.tsx` · Component: `Disclosure.component.tsx`
- **[Misnamed]** The root renders as `<Disclosure.Panel>`; the bundle sets `DisclosureGroup.displayName="Disclosure.Panel"` (G9). → Fix: G9, plus `DisclosureGroup.displayName = "DisclosureGroup"` (after `:204`).
- **[Unnecessary control]** `className` and `style` are documented but ignored: the component renders only a Provider (`:196-203`). (`DisclosureGroup.stories.tsx:11`)
- **[Missing control]** `defaultExpandedKeys` and `expandedKeys` show "Setup controls". → Fix: `control: "multi-select", options: ["d1", "d2"]`. (`DisclosureGroup.stories.tsx:16-22`)
- **[Snippet]** The default `allowsMultipleExpanded: false` is hard-coded (`:39`).
- **[Stories]** No story shows `allowsMultipleExpanded` or `defaultExpandedKeys`.

#### Divider
Story: `src/components/Content/Divider/Divider.stories.tsx` · Component: `Divider.component.tsx`
- **[Unnecessary control]** `size` (from `PresentationProps`) is never read by Divider (`:21`). → Fix: Omit it from the type, or hide it.
- **[Snippet]** The render wrapper leaks into the snippet as `<div style={{display:'block'}}>`. → Fix: use a decorator. (`Divider.stories.tsx:25-27`)
- **[Stories]** No vertical-orientation story.
- **[Defaults]** `orientation="horizontal"` (`:21`); element `div`; margin `var(--divider-margin-main)` when `spacing` is unset (`Divider.styles.ts:8,11`).

#### List
Story: `src/components/Content/List/List.stories.tsx` · Component: `List.component.tsx`
- **[Description]** `List.Item`'s `showDivider` has no JSDoc. → Fix: "Draw a divider below this item", `@default true` (`:50`, default at `:57`).
- **[Snippet]** IconButtons have no `aria-label` (`List.stories.tsx:74-75, 89-90, 104-105`).
- **[Defaults]** Element `ul`; `showDivider=true` (`:57`).

#### Table
Story: `src/components/Content/Table/Table.stories.tsx` · Component: `Table.component.tsx`
- **[Console]** "An aria-label or aria-labelledby prop is required"; only Searchable Columns sets one (`:294`). → Fix: add `aria-label` to `Primary.args` (`:75`), which nine stories spread, and to Nested Columns (`:113`), Sortable Headers (`:183`), Customize Icons (`:299`) and Render Empty Table (`:374`).
- **[Missing control]** `selectionMode`, `selectedKeys`, `defaultSelectedKeys`, `disabledKeys` and `disallowEmptySelection` are missing (from `MultipleSelection`, `Table.types.ts:65`), although two stories use `selectionMode`.
- **[Missing control]** No `subcomponents`, so Column props (`isRowHeader`, `allowsSorting`, `allowsSearching`, `showDivider`, `width`, `title`) and Body props (`isLoading`, `loadingRows`, `renderEmpty`) are undocumented (meta `:12-17`).
- **[Description]** The `isSticky` description, "Whether the bottom content should be sticky" (`Table.stories.tsx:21`), is wrong: on Table it makes the row-header column sticky (`Table.styles.ts:26-36`). → Fix: JSDoc at `Table.types.ts:80`. `selectionMode` has an empty `/**  */` (`Table.types.ts:143`).
- **[Unnecessary control]** `size` (`Table.types.ts:82`) is never read anywhere in the Table directory.
- **[Stories]** Sortable Headers fixes `sortDescriptor` in args with no state or `onSortChange`, so clicking does nothing and the rows are unsorted. → Fix: use a `useState` render like Searchable Columns (`:227`). (`:182-187`)
- **[Stories]** No `allowsExpandableRows` / row-nesting story, although the component lists it as a feature (`Table.component.tsx:31`).
- **[Snippet]** `Primary.args.children` (and Sticky Row Header's) have no keys (`:81, 86`).
- **[Defaults]** `icons` = `{ sortAscending: "arrow_drop_down", sortDescending: "arrow_drop_up", sortNeutral: "swap_vert", searchOpen: "search", searchClose: "close" }` (`Table.component.tsx:16-22`); `sortVisibility="selected"` (`:66`); `hasBottom=false` (`components/TableShared.tsx:20`).

#### Tabs
Story: `src/components/Content/Tabs/Tabs.stories.tsx` · Component: `Tabs.component.tsx`
- **[Missing control]** `variant` (`"default" | "card" | "toggle"`, `Tabs.types.ts:5,11`) isn't in the table, although two stories exist to show it. → Fix: a select argType.
- **[Bad control]** The `disabledKeys` options omit `"All Tabs"`, which `mapping` defines (`Tabs.stories.tsx:30-35`); the `selectedKey` and `defaultSelectedKey` options omit `"tab3"` (`:17, 22`).
- **[Missing control]** No `subcomponents` for List, Tab and Panel.
- **[Description]** `children` shows only "array". → Fix: "Tabs.List followed by one Tabs.Panel per tab (matched by id)". `disabledKeys` has one description in `Tabs.types.ts:13` and a different one in the story; keep one.
- **[Stories]** Panel content uses `<h1>`, which adds stray headings to the docs outline. → Fix: use `<Text>` (`:73, 76, 79`). No disabled-tab story. The commented-out NestedTabs (`:99-174`) references a nonexistent `info` prop; delete it.
- **[Defaults]** `variant="default"` (`Tabs.component.tsx:80`).

### Inputs and Buttons

#### Checkbox
Story: `src/components/Inputs/Checkbox/Checkbox.stories.tsx` · Component: `src/components/Inputs/Checkbox/Checkbox.component.tsx`
- **[Misnamed]** The only export is `CheckBox` (`src/components/index.ts:36`), so `<CheckBox>` in the snippets is correct. But the page heading and story title say "Checkbox", the files are named `Checkbox.*`, and the spec is `CheckBox.spec.tsx`. → Decision: pick one name. Either retitle to `Inputs/Choose State/CheckBox` (`Checkbox.stories.tsx:11`), or export `Checkbox` and keep `CheckBox` as a deprecated alias (`Checkbox.component.tsx:46`, `index.tsx:1`).
- **[Missing control]** `children` is the visible label, but `RenderPropsArgTypes` sets `control: false` on it, so it can't be edited. → Fix: `children: { control: "text", description: "Label rendered next to the checkbox" }`. (`Checkbox.stories.tsx:19`)
- **[Description]** `name` has no JSDoc. → Fix: "Name of the input, submitted with form data". (`Checkbox.component.tsx:42`)
- **[Defaults]** `error = "error"`, `isRequired = false`, `isInvalid = false`, `isIndeterminate = false`, `isReadOnly = false`, `isDisabled = false` (`Checkbox.component.tsx:51-57`). Note: because of the `error` default, `isInvalid` without an `error` message renders the literal word "error". See Part 3.
- **[Stories]** No Indeterminate story and no With Error story.

#### Calendar
Story: `src/components/Inputs/DateAndTimes/Calendar/Calendar.stories.tsx` · Component: `Calendar.component.tsx`
- **[Typo] ✅ Fixed** "calendary" → "calendar" (`Calendar.stories.tsx:41`); "Accepts a object" → "an object" (`:26,31,36,41,51,56`); "accespts" → "accepts" (`Calendar.component.tsx:41`).
- **[Snippet]** `WithMaxAndMinValues` spreads `...Primary`, so it inherits Primary's hard-coded `docs.source.code`; its snippet is identical to Primary's and doesn't show `minValue` / `maxValue` (`:127-135`). Primary's own hard-coded snippet leaves out the `defaultValue` the story actually passes (`:110-121`). The WithErrorMessage snippet has a stray `,` after `</ErrorMessage>` and unnecessary `key` props (`:160,168`).
- **[Bad control]** The `size` select offers `"auto"`, but the styles only define small / medium / large / full, so `auto` does nothing (`Calendar.component.tsx:32`, `Calendar.styles.ts:10-36`).
- **[Missing control]** `value`, `defaultValue`, `minValue`, `maxValue` and `focusedValue` all have `control: false`. → Fix: a select with `mapping` to preset `@internationalized/date` values (e.g. "today", "+1 week"). The same approach works for DateInput, DatePicker and TimeInput. (`Calendar.stories.tsx:23-57`)
- **[Description]** `size` has no JSDoc (`Calendar.component.tsx:32`).
- **[Defaults]** `size = "medium"` (`Calendar.component.tsx:62`).
- **[Stories]** No Disabled story and no `isDateUnavailable` example.

#### DateInput
Story: `src/components/Inputs/DateAndTimes/DateInput/DateInput.stories.tsx` · Component: `DateInput.component.tsx`
- **[Typo] ✅ Fixed** "minmum" → "minimum" (`DateInput.stories.tsx:40`).
- **[Bad control]** `hourCycle` uses the deprecated argType `defaultValue: "12"`: a string where the options are numbers, so the default column renders blank. 12 isn't the real default either; react-aria takes the hour cycle from the locale. → Fix: `table.defaultValue.summary: "locale-dependent"`. (`:45`)
- **[Unnecessary control]** `isLoading` / `loadingLabel` are ignored (G11). `placeholder` isn't a prop; react-aria's equivalent is `placeholderValue` (G11).
- **[Missing control]** `value`, `defaultValue`, `minValue` and `maxValue` have no controls (see Calendar). `onChange` isn't in the table at all. → Fix: `onChange: { action: "onChange", description: "Called when the value changes" }`.
- **[Snippet]** `defaultValue={2026-11-23T17:19:03.226-07:00[America/Denver]}` isn't valid JSX. → Fix: `docs.source` code (or a transform) printing `now(getLocalTimeZone())`. (`:62`)
- **[Snippet]** Primary hard-codes defaults: `size: "medium"`, `isInvalid: false`, `shouldForceLeadingZeros: false` (`:64-67`).
- **[Description]** The component JSDoc is just "DateInput Component" (`DateInput.component.tsx:17`).
- **[Defaults]** `size = "medium"` (`DateInput.component.tsx:19`). From react-aria: `granularity` is "day" for dates and "minute" for date-times; `hourCycle` follows the locale.
- **[Stories]** No story uses `minValue` / `maxValue`.

#### DatePicker
Story: `src/components/Inputs/DateAndTimes/DatePicker/DatePicker.stories.ts` · Component: `DatePicker.component.tsx`
- The story file is a copy of DateInput's, so every DateInput finding applies here too: the "minmum" typo (`:46`), `hourCycle` `defaultValue: "12"` (`:51`), the ignored loading props and `placeholder`, `onChange` missing, the invalid-JSX `defaultValue` snippet (`:68`), and hard-coded defaults (`:70-73`).
- **[Missing control]** `value`, `defaultValue`, `minValue` and `maxValue` all have `control: false` (`:20-47`). → Fix: as Calendar.
- **[Bad control]** `calendarSize` uses the deprecated argType `defaultValue: "small"`, so its default cell is empty (`:17`).
- **[Description]** `calendarSize` has no JSDoc. → Fix: "Size of the popup calendar", `@default "small"` (`DatePicker.component.tsx:28`).
- **[Defaults]** `size = "medium"`, `calendarSize = "small"` (`DatePicker.component.tsx:45-46`).
- **[Stories]** No story for `minValue` / `maxValue` or `isDateUnavailable`.

#### TimeInput
Story: `src/components/Inputs/DateAndTimes/TimeInput/TimeInput.stories.tsx` · Component: `TimeInput.component.tsx`
- **[Description]** Three descriptions say "date input" where they mean "time input" (`TimeInput.stories.tsx:27,32,37`).
- **[Typo] ✅ Fixed** "minmum" → "minimum" (`:37`).
- **[Bad control]** `hourCycle` uses `defaultValue: "12"` (`:42`); see DateInput.
- **[Unnecessary control]** `isLoading` / `loadingLabel` and `placeholder` (G11).
- **[Missing control]** `value`, `defaultValue`, `minValue` and `maxValue` have no controls; `onChange` is missing.
- **[Snippet]** The `defaultValue` snippet is invalid JSX; Primary hard-codes defaults (`:54-59`).
- **[Description]** No component JSDoc (`TimeInput.component.tsx:21`).
- **[Defaults]** `size = "medium"` (`TimeInput.component.tsx:22`).
- **[Stories]** Only Primary and Second Granularity. Add 24-hour cycle and With Error stories.

#### FileInput
Story: `src/components/Inputs/FileInput/FileInput.stories.tsx` · Component: `FileInput.component.tsx`
- **[Unnecessary control]** `isReadOnly` comes from `InputControls`, but the props type omits it (`FileInput.stories.tsx:12`, `FileInput.component.tsx:23`).
- **[Unnecessary control]** `id` is destructured as `id = inputId` and never used, and the forwarded `ref` is never attached (`FileInput.component.tsx:40-64`). See Part 3.
- **[Description]** The `aria-*` props land on the wrapper div through `{...rest}` (`:90`), not on the button (G13).
- **[Description]** `file`, `onChange` and `placeholder` have no JSDoc (`:25-27`). Suggested: `file` "The currently selected file (controlled)"; `onChange` "Called with the selected or dropped file, or null"; `placeholder` "Text shown when no file is selected".
- **[Typo] ✅ Fixed** "Checkout [FileTrigger](…) For a more general…" → "Check out … for a more general…" (`:38`).
- **[Snippet]** WithFile renders `file={[object File]}` (`FileInput.stories.tsx:32`).
- **[Defaults]** `placeholder = "No file selected"`, `size = "medium"`, `isDisabled = false`, `isRequired = false`, `isInvalid = false` (`:52-57`).
- **[Stories]** No With Error story and no Disabled story.

#### NumberInput
Story: `src/components/Inputs/NumberInput/NumberInput.stories.tsx` · Component: `NumberInput.component.tsx`
- **[Typo/Description]** Spelling ✅ fixed ("Fowards" → "Forwards"). Still open: the claim is false: the `ref` parameter is never used (`NumberInput.component.tsx:17-19`). See Part 3.
- **[Missing control]** `step` isn't in the table. → Fix: `control: "number"`.
- **[Description]** `onChange` shows only "function" (`NumberInput.stories.tsx:14-39`).
- **[Snippet]** Primary hard-codes the default `size: "medium"` (`:49`).
- **[Defaults]** `size = "medium"`, `variant = "default"` (`NumberInput.component.tsx:22,26`).
- **[Stories]** No Floating story, although the variant is supported. No With Error story.

#### RadioGroup
Story: `src/components/Inputs/RadioGroup/RadioGroup.stories.tsx` · Component: `RadioGroup.component.tsx`
- **[Description]** The component JSDoc links to `/docs/dropdowns-customselect--overview`, which doesn't exist. The real ids are `dropdowns-selection-customselect--overview` and `dropdowns-selection-select--overview`. (`RadioGroup.component.tsx:38-39`)
- **[Typo]** The exported type is `RadioGroupsProps`; it should be `RadioGroupProps` (`RadioGroup.component.tsx:22`, `index.tsx:3`). It's a public type, so rename with a deprecated alias.
- **[Description]** `name` and `children` have no description.
- **[Missing control]** `onChange` and `orientation` aren't in the table. The `Radio` subcomponent isn't documented. → Fix: `subcomponents: { Radio }`.
- **[Stories]** No With Error story and no controlled / default-value story.

#### SearchInput
Story: `src/components/Inputs/SearchInput/SearchInput.stories.tsx` · Component: `SearchInput.component.tsx`
- **[Unnecessary control]** Spreading `RenderPropsArgTypes` adds `children` (always overridden by the component's own JSX) and `style` (not in `SearchInputProps`) (`SearchInput.stories.tsx:15`).
- **[Description]** `onChange` and `onSubmit` show only "function" (`:17-18`). The component JSDoc is just "SearchInput component." (`SearchInput.component.tsx:19`).
- **[Defaults]** `size = "medium"` (`:24`).

#### TextAreaInput
Story: `src/components/Inputs/TextAreaInput/TextAreaInput.stories.tsx` · Component: `TextAreaInput.component.tsx`
- **[Description]** `rows` and `cols` have no JSDoc (`TextAreaInput.component.tsx:19-20`); `onChange` has no description (`TextAreaInput.stories.tsx:14`).
- **[Snippet]** Primary hard-codes the default `resize: "both"` (`:25`).
- **[Defaults]** `size = "medium"`, `resize = "both"` (`TextAreaInput.component.tsx:29-30`).

#### TextInput
Story: `src/components/Inputs/TextInput/TextInput.stories.tsx` · Component: `TextInput.component.tsx`
- **[Bad control]** `variant` renders as a textarea. → Fix: a select with `["default", "floating"]` (`TextInput.stories.tsx:15`). `variant` has no description (G14).
- **[Bad control]** The `type` options include "number", which `AriaTextFieldProps` doesn't allow (that's what NumberInput is for), and leave out "url" (`:18`).
- **[Description]** `type`, `minLength` and `maxLength` have no description (`:16-21`). The component JSDoc is just "TextInput component." (`TextInput.component.tsx:16`).
- **[Snippet]** Primary hard-codes the defaults `type: "text"` and `variant: "default"` (`:31-32`).
- **[Defaults]** `type = "text"`, `size = "medium"`, `variant = "default"` (`TextInput.component.tsx:22-24`).

#### ToggleSwitch
Story: `src/components/Inputs/ToggleSwitch/ToggleSwitch.stories.tsx` · Component: `ToggleSwitch.component.tsx`
- **[Description]** `isDisabled` and `isInvalid` are redeclared without JSDoc. → Fix: `Pick<FieldStatusProps, …>` (`ToggleSwitch.component.tsx:30-31`). `children` and `onChange` have no description.
- **[Unnecessary control]** `size` does nothing visible: the styles use a fixed `--toggle-size` token and no sizing mixin (`:26`, `ToggleSwitch.styles.ts`).
- **[Defaults]** `childrenPosition = "left"` (`:50`).
- **[Stories]** No Selected, Disabled or `childrenPosition="right"` stories.

#### Button
Story: `src/components/Buttons/Button/Button.stories.tsx` · Component: `Button.component.tsx`
- **[Missing control]** No docgen for Button (G9), so the table shows only story argTypes: `size`, `loadingLabel`, `loadingComplete`, `as`, `href`, `slot` and `aria-label` are missing, and `isLoading` has no description. BaseButton itself does get docgen.
- **[Typo] ✅ Fixed** "will be not be clickable" → "will not be clickable" (`Button.stories.tsx:40`); IconButton inherits this text.
- **[Snippet]** Primary hard-codes defaults that every story then shows: `type: "button"`, `isDisabled: false`, `isLoading: false` (`:63-65`).
- **[Defaults]** `variant = "primary"`, `size = "auto"`, `as = href ? "a" : "button"`, `loadingComplete = false`, `isLoading = false` (`src/components/Internal/BaseButton.tsx:61-67`).
- **[Stories]** No stories for the content, border and ghost variants; no Disabled or Sizes story. "Loading Button" and "Loading Complete Button" repeat the word "Button"; rename to Loading / Loading Complete (`:108,118`).

#### ButtonGroup
Story: `src/components/Buttons/ButtonGroup/ButtonGroup.stories.tsx` · Component: `ButtonGroup.component.tsx`
- **[Bad control]** `partitionProps` sends every key without a `$` prefix to the buttons through ButtonContext. So `as` and `style`, which the docs describe as Group props, are applied to each Button instead (`ButtonGroup.component.tsx:34-58`). See Part 3.
- **[Bad control]** The `variant` options leave out "link" (`ButtonGroup.stories.tsx:33-42`). `isMerged` renders as a textarea (see Group).
- **[Description]** `icon` / `iconVariant` say "Material Icon to render", but on a group they're passed down to each child button (`:23`).
- **[Missing control]** `size` and `isLoading` (from ButtonProps) are missing: the same docgen gap as Button.
- **[Typo] ✅ Fixed** "buttoons" → "buttons" (`ButtonGroup.component.tsx:25`).
- **[Snippet]** Primary hard-codes `$direction: "row"` (the default), `isMerged: false` and `isDisabled: false` (`ButtonGroup.stories.tsx:60-62`).
- **[Defaults]** `$direction = "row"` (`Layout/Group/Group.component.tsx:17`).

#### FileTrigger
Story: `src/components/Buttons/FileTrigger/FileTrigger.stories.tsx` · Component: `FileTrigger.component.tsx`
- **[Bad control]** `accept="directories"` does nothing: the type is `"files" | "directories"` (`:13`), but the code compares `accept === "directory"` (`:80`). Verified. See Part 3.
- **[Description]** `children` has no description. Suggest: "Pressable element (e.g. `<Button>`) that opens the file picker" (`:7`).
- **[Snippet]** The WithDragAndDrop snippet has no `onSelect`, and the DropZone `onDrop` only calls `console.log` and isn't connected to FileTrigger (`FileTrigger.stories.tsx:41-47,106`).
- **[Defaults]** `acceptedFileTypes = []` (`:48`).
- **[Stories]** No story for `acceptedFileTypes` or `accept="directories"`.

#### IconButton
Story: `src/components/Buttons/IconButton/IconButton.stories.tsx` · Component: `IconButton.component.tsx`
- **[Missing control]** No docgen (G9), so `icon` and `iconVariant` render as textareas instead of selects, and `size`, `loadingLabel`, `loadingComplete` and the descriptions are missing.
- **[Unnecessary control]** `children` comes in through Button's argTypes, which the story spreads, but `IconButtonProps` omits `children` (`IconButton.stories.tsx:14`).
- **[Stories]** The export is named `isLoading`, so the heading reads "Is Loading". → Rename to `Loading` (`:33`).
- **[Snippet]** Primary hard-codes defaults: `isDisabled: false`, `isLoading: false`, `iconVariant: "default"`, `variant: "border"` (`:24-29`).
- **[Typo] ✅ Fixed** "accessiblity" → "accessibility" (`IconButton.component.tsx:15`).
- **[Defaults]** `size = "medium"`, `variant = "border"` (`IconButton.component.tsx:26-27`); `loadingComplete = false` inherited from BaseButton.

### Overlays and Dropdowns

#### ConfirmationModal
Story: `src/components/Overlays/ConfirmationModal/ConfirmationModal.stories.tsx` · Component: `src/components/Overlays/ConfirmationModal/ConfirmationModal.component.tsx`
- **[Deprecated]** The story uses the deprecated `centered: true`, so the snippet shows `centered` and the table lists both `centered` and `isCentered`. `centered` is already `@deprecated` (`Modal/Modal.types.ts:14-17`). → Fix: use `isCentered: true` and hide `centered` (see G8). (`ConfirmationModal.stories.tsx:28`)
- **[Description]** The `onReject` description says it fires when the user clicks the background. It doesn't: `onReject` is only wired to the reject button (`ConfirmationModal.component.tsx:57-60`), clicking outside doesn't dismiss the modal (`isDismissable` is never set), and Escape closes it without calling `onReject`. → Fix: "Called when the user presses the reject (Cancel) button." (`ConfirmationModal.component.tsx:20-24`)
- **[Missing control]** `defaultOpen` and `onOpenChange` aren't in the table. With a controlled `isOpen`, `onOpenChange` is the only way to learn that the buttons closed the modal. → Fix: spread `OverlayTriggerArgTypes`. (`ConfirmationModal.stories.tsx:4-15`)
- **[Bad control]** `className` and `style` render as object editors. → Fix: spread `RenderStylePropsArgTypes`, as the Modal story does. (`ConfirmationModal.stories.tsx:4-15`)
- **[Defaults]** `rejectText = "Cancel"` (`ConfirmationModal.component.tsx:38`). `$width` is forced to `"400px"`, overridable through `...rest` (`:45`).

#### ErrorModal
Story: `src/components/Overlays/ErrorModal/ErrorModal.stories.tsx` · Component: `src/components/Overlays/ErrorModal/ErrorModal.component.tsx`
- **[Deprecated]** The story uses the deprecated `centered: true`, which shows in the snippet. → Fix: use `isCentered: true` and hide `centered`. (`ErrorModal.stories.tsx:27`)
- **[Description]** `onClose` has no description. → Fix: "Called when the user presses the close button. Not called when the modal is dismissed with Escape." (`ErrorModal.component.tsx:13`)
- **[Missing control]** `defaultOpen` and `onOpenChange` are missing. → Fix: spread `OverlayTriggerArgTypes`. (`ErrorModal.stories.tsx:4-15`)
- **[Bad control]** `className` and `style` render as object editors. → Fix: spread `RenderStylePropsArgTypes`. (`ErrorModal.stories.tsx:4-15`)
- **[Defaults]** `buttonText = "Close"` (`ErrorModal.component.tsx:23`). `$width` is forced to `"400px"` (`:26`).

#### Modal
Story: `src/components/Overlays/Modal/Modal.stories.tsx` · MDX: `src/components/Overlays/Modal/Modal.mdx` · Component: `src/components/Overlays/Modal/Modal.component.tsx`
- **[Deprecated]** The table lists both `centered` and `isCentered` with the same description. `centered` is already `@deprecated` in favour of `isCentered` (`Modal.types.ts:14-17`), but the docs don't show that. → Fix: hide `centered` in the Modal, ConfirmationModal and ErrorModal argTypes. (`Modal.stories.tsx:28-35`)
- **[Typo] ✅ Fixed** "a set of utility component" → "components" (`Modal.mdx:30`); "manage it's state" → "its state" (`Modal.mdx:47`); "Make note thatn when" → "that when" (`Modal.mdx:50`).
- **[Description]** The MDX still says "NOTE: The controls in this page are not working currently…". Not verified whether that's still true. → Fix: check, then fix the controls or delete the note. (`Modal.mdx:22`)
- **[Stories]** The `PopupModal` story (`Modal.stories.tsx:126-151`) doesn't appear on the docs page: the MDX renders only Primary, WithCustomContent and WithOverlayTrigger, and has no `<Stories/>`. Primary is also rendered twice (`<Primary/>` at `Modal.mdx:25` and `<Canvas of={Primary}>` at `:33`). → Fix: add a Canvas for PopupModal and drop one of the Primary renders.
- **[Snippet]** The "With Custom Content" canvas shows the raw CSF object (`{ args: { ...Primary.args, children: … } }`) instead of JSX. → Fix: add `parameters.docs.source.code`, as `WithOverlayTrigger` does. (`Modal.stories.tsx:153-163`)
- **[Stories]** No story shows `isCentered`. → Fix: add one.
- **[Defaults]** `centered = false`, `isCentered = centered` (`Modal.component.tsx:30`). Styled defaults: `$width: "100%"`, `$maxWidth: "800px"`, `$p: "5"` (`Modal.styles.ts:13`).

#### OverlayTrigger
Story: `src/components/Overlays/OverlayTrigger/OverlayTrigger.stories.tsx` · Component: `src/components/Overlays/OverlayTrigger/OverlayTrigger.component.tsx`
- **[Bad control]** The `type` select offers `"composite"`, which the type doesn't accept (it's `"dialog" | "menu" | "listbox" | "tree" | "grid"`, `OverlayTrigger.component.tsx:18`). → Fix: remove it. (`OverlayTrigger.stories.tsx:22`)
- **[Typo] ✅ Fixed** The story CSS has an unclosed `var()`: `"var(--background-clr-inverted"`, so the background never applies. It also shows in the snippet. → Fix: add the `)`. (`OverlayTrigger.stories.tsx:36`, `:58`)
- **[Description]** `children` has no description. → Fix: "The trigger element followed by the overlay element (e.g. `Popover` or `Modal`)." (`OverlayTrigger.stories.tsx:16-18`)
- **[Defaults]** `type = "dialog"` (`OverlayTrigger.component.tsx:29`).

#### Popover
Story: `src/components/Overlays/Popover/Popover.stories.tsx` · Component: `src/components/Overlays/Popover/Popover.component.tsx`
- **[Defaults]** The argTypes declare `offset` `defaultValue: 4`, but the real default is `offset = 8` (`Popover.component.tsx:85`). `defaultValue` in argTypes is also ignored, which is why the column is empty. → Fix: `@default 8` on the type (see G4), and remove the `defaultValue` keys at `Popover.stories.tsx:20,26,32`. The other default is `placement = "bottom"` (`:86`).
- **[Bad control]** The `isOpen` and `defaultOpen` controls do nothing in the only story. It renders the Popover inside `MenuTrigger`, whose context state takes priority over Popover's own (`Popover.component.tsx:49-51`; `Dropdowns/Menu/MenuTrigger.tsx:36`). → Fix: add a standalone story (`triggerRef` + `isOpen`), or hide these controls.
- **[Bad control]** The `placement` select from the shared `PlacementArgType` is missing valid values, e.g. `"bottom left"`, `"bottom right"`, `"top left"`, `"top right"`, `"left top"`, `"right bottom"`, `"start"`, `"end"`. The MenuTrigger story itself uses `"bottom left"`, which can't be selected. → Fix: extend the options. (`storybook/helpers.tsx:99-116`)
- **[Bad control]** `variant` (`SuggestStrings<"listbox" | "menu" | "datepicker">`) renders as an object editor. → Fix: a select with those three options. (`Popover.stories.tsx:15-35`)
- **[Unnecessary control]** `triggerRef` (a `RefObject`) is exposed as an object control. → Fix: `control: false`.
- **[Description]** `placement` and `id` have no descriptions (`Popover.component.tsx:39`). → Fix: `id`: "Id applied to the popover element"; `placement`: "Placement of the popover relative to the trigger".

#### ToolTip
Story: `src/components/Overlays/ToolTip/ToolTip.stories.tsx` · MDX: `src/components/Overlays/ToolTip/ToolTip.mdx` · Component: `src/components/Overlays/ToolTip/ToolTip.component.tsx`
- **[Typo] ✅ Fixed** "The \`Tooltip\` component" → "\`ToolTip\`" (`ToolTip.mdx:29`); "foucsed" → "focused" (`:31`); "Note than when" → "Note that when" (`:37`).
- **[Description]** The `placement` and `transitionDuration` comments start with `/*`, not `/**`, so docgen drops them and the table shows no description. → Fix: change both to `/**`. (`ToolTip.component.tsx:30`, `:33`)
- **[Misnamed]** The table titled ToolTip mixes in ToolTipTrigger props (`delay`, `closeDelay`, `trigger`, `isDisabled`). It also lists `isOpen`, `defaultOpen` and `onOpenChange`, which ToolTip inherits from `OverlayTriggerProps` (`:21`) but ignores: it reads state only from `TooltipStateContext` (`:43`). → Fix: add `subcomponents: { ToolTipTrigger, ToolTipTarget }`, or note which props belong to `ToolTipTrigger`.
- **[Description]** `ToolTipTrigger` (`ToolTipTrigger.component.tsx:20`) and `ToolTipTarget` (`ToolTipTarget.component.tsx:8`) have no component JSDoc. → Fix: add a one-line description to each.
- **[Stories]** Primary renders three times on the page: `<Primary/>` (`ToolTip.mdx:24`), `<Canvas of={Primary}>` (`:35`), and under `<Stories/>` (`:65`). → Fix: drop the Canvas, or use `<Stories includePrimary={false}/>`.
- **[Snippet]** Every snippet shows `delay={0}`, which is the default (`ToolTipTrigger.component.tsx:23`). → Fix: remove `delay: 0` from the story args. (`ToolTip.stories.tsx:119`)
- **[Unnecessary control]** The meta argTypes disable a `size` prop that doesn't exist, behind `@ts-ignore`. → Fix: remove it. (`ToolTip.stories.tsx:24-29`)
- **[Defaults]** ToolTip: `transitionDuration = 300` (`ToolTip.component.tsx:41`), `placement` `"top"` (`:51`), `offset` `2` (`:52`). ToolTipTrigger: `delay = 0`, `closeDelay = 0` (`ToolTipTrigger.component.tsx:23`), which override react-aria's 1500 / 500.

#### ComboBox
Story: `src/components/Dropdowns/Combobox/Combobox.stories.tsx` · Component: `src/components/Dropdowns/Combobox/ComboBox.component.tsx`
- **[Misnamed]** The heading reads "Combobox" (from the title `"Dropdowns/Selection/Combobox"`), but the export is `ComboBox`. → Fix: change the title to `.../ComboBox`. This changes the docs URL. (`Combobox.stories.tsx:9`)
- **[Typo] ✅ Fixed** "Combox combinds a text input field…" → "ComboBox combines…" (`ComboBox.component.tsx:31`).
- **[Typo] ✅ Fixed** Story "Scolling Dropdown": rename `ScollingDropdown` → `ScrollingDropdown` (`Combobox.stories.tsx:105`).
- **[Typo] ✅ Fixed** "uncontrolled comobox" → "combobox" (`Combobox.stories.tsx:29`); "Pick a engineering major" → "Pick an engineering major" (`:182`).
- **[Unnecessary control]** `ref` is exposed as an object control. → Fix: `ref: { table: { disable: true } }`. (`Combobox.stories.tsx:15-56`)
- **[Unnecessary control]** A `defaultValue` row comes from `TextInputControls`, but ComboBox has no `defaultValue` prop; react-aria uses `defaultInputValue` / `defaultSelectedKey`. → Fix: use `InputControls` plus `autoFocus`, or disable `defaultValue`. (`Combobox.stories.tsx:16`)
- **[Bad control]** `variant` (`SuggestStrings<"default" | "floating">`) renders as an object editor; the argType only sets a category. → Fix: a select with `["default", "floating"]`. (`Combobox.stories.tsx:17-19`)
- **[Bad control]** The `selectedKey` and `defaultSelectedKey` options are `["1", "2"]`, so item `"3"` can't be selected. → Fix: add `"3"`. (`Combobox.stories.tsx:37`, `:42`)
- **[Defaults]** The shared `maxHeight` type documents `@default height of the viewport`, but ComboBox, CustomSelect and MultiSelect all default it to `300`. → Fix: correct the `@default` (`src/types/common.ts:95-96`). ComboBox defaults: `icon = "search"`, `variant = "default"`, `maxHeight = 300`, `dropdownPlacement = "bottom start"`, `size = "medium"` (`ComboBox.component.tsx:37-46`).
- **[Description]** `dropdownPlacement` has no description. → Fix: "Placement of the dropdown relative to the field" (`src/types/common.ts:99`). This is shared by ComboBox, CustomSelect and MultiSelect. `placeholder` and `autoFocus` also have no descriptions in the shared helpers (`storybook/helpers.tsx:68-73`, `:84-89`).
- **[Snippet]** The "Dynamic Collection" snippet shows the raw story object, and its `render` ignores `args`, so no control affects it. → Fix: `render: (args) => <ComboBox {...args} items={options}>…`, or supply `docs.source.code`. (`Combobox.stories.tsx:173-190`)
- **[Stories]** No story shows `allowsCustomValue`, or the invalid/error state. → Fix: add one story for each.

#### CustomSelect
Story: `src/components/Dropdowns/CustomSelect/CustomSelect.stories.tsx` · Component: `src/components/Dropdowns/CustomSelect/CustomSelect.component.tsx`
- **[Bad control]** The `variant` options leave out `"ghost"`, which `CustomSelectVariants` includes (`CustomSelect.component.tsx:20`, `:30`). → Fix: add it (`CustomSelect.stories.tsx:20`); consider a Ghost story.
- **[Snippet]** The Floating story sets `defaultSelectedKey: "undefined"` (a string), and the snippet shows it. → Fix: remove it. (`CustomSelect.stories.tsx:98`)
- **[Snippet]** `Primary.args` hard-codes the defaults `size: "medium"` and `variant: "default"`, so they show in every snippet. → Fix: remove both. (`CustomSelect.stories.tsx:69-70`)
- **[Typo] ✅ Fixed** "inital" → "initial" (`CustomSelect.stories.tsx:42`).
- **[Description]** `variant` has no description. → Fix: "Visual style of the select" (`CustomSelect.component.tsx:25`).
- **[Console]** "A PressResponder was rendered without a pressable child", from the Loading story. The `isLoading` branch renders `SelectField` (which has a `PressResponder` at `Fields/SelectField/SelectField.component.tsx:126-133`) with only a skeleton and no `Button` (`CustomSelect.component.tsx:64-86`). → Fix: in the component; the story can't fix it.
- **[Defaults]** `variant = "default"`, `maxHeight = 300`, `dropdownPlacement = "bottom start"`, `size = "medium"` (`:43-46`). `placeholder` defaults to `t("select.placeholder")` (`:51`).

#### IconMenu
Story: `src/components/Dropdowns/IconMenu/IconMenu.stories.tsx` · Component: `src/components/Dropdowns/IconMenu/IconMenu.component.tsx`
- **[Bad control]** `buttonVariant` is documented and has a select control, but does nothing: IconMenu never maps it to IconButton's `variant` and forwards it as an unknown prop through `...buttonProps` (`IconMenu.component.tsx:49`, `:59`). → Fix: pass `variant={buttonVariant}` in the component, or remove the prop. The options (`IconMenu.stories.tsx:16-23`) also leave out `"border"` (IconButton's default), `"ghost"` and `"link"`, and the table shows its type as `any`.
- **[Description]** IconMenu has no component JSDoc. → Fix: add one above `IconMenu.component.tsx:24`.
- **[Description]** `isDisabled`, `buttonVariant` and `menuPlacement` have no descriptions (`IconMenu.component.tsx:18-20`).
- **[Missing control]** `aria-label` isn't in the table, although the trigger is icon-only and the label goes to both the button and the menu (`:59`, `:73`). Menu-level `onAction` is also missing. → Fix: spread `AriaLabelArgTypes` and add `"aria-label": "More options"` to `Primary.args` (`IconMenu.stories.tsx:64-79`).
- **[Snippet]** `icon: "more_vert"` in `Primary.args` is the default. → Fix: remove it (`IconMenu.stories.tsx:66`).
- **[Defaults]** `menuPlacement = "bottom right"`, `icon = "more_vert"` (`IconMenu.component.tsx:47-48`). The trigger defaults to `variant="border"`, `size="medium"` (`Buttons/IconButton/IconButton.component.tsx:26-27`).

#### ListBox
Story: `src/components/Dropdowns/ListBox/ListBox.stories.tsx` · Component: `src/components/Dropdowns/ListBox/ListBox.component.tsx`
- **[Console]** "If you do not provide a visible label, you must specify an aria-label…": the stories pass neither. → Fix: add `"aria-label": "Categories"` to `Primary.args` (`ListBox.stories.tsx:27-33`).
- **[Missing control]** None of ListBox's own props are in the table: `size`, `className`, `style` (`ListBox.types.ts:4-9`) and `label` (used at `ListBox.component.tsx:93`). Every row comes from story argTypes. Probable cause, not confirmed: the `as ForwardedListBox` cast (`:33-59`) hides the props from docgen. → Fix: fix the docgen extraction, or add argTypes for `size`, `label` and `aria-label`.
- **[Typo] ✅ Fixed** In the `selectionBehavior` description, "changes in \`selectionMode\` is \`multiple\`" → "when \`selectionMode\` is \`multiple\`" (`storybook/helpers.tsx:132`).
- **[Defaults]** `size = "medium"` (`ListBox.component.tsx:81`).

#### Menu
Story: `src/components/Dropdowns/Menu/Menu.stories.tsx` · Component: `src/components/Dropdowns/Menu/Menu.component.tsx`
- **[Console]** "An aria-label or aria-labelledby prop is required…". → Fix: add `"aria-label"` to `Primary.args` (`Menu.stories.tsx:46-60`). WithSections replaces `args` without spreading Primary's, so add it there too (`:64`).
- **[Bad control]** `children` renders as a raw object editor. → Fix: `children: { control: false }` (`Menu.stories.tsx:24-41`).
- **[Missing control]** Menu-level `onAction`, `selectionMode`, `selectedKeys` and `aria-label` aren't documented. → Fix: add argTypes for at least `onAction` and `aria-label`.

#### MenuTrigger
Story: `src/components/Dropdowns/Menu/MenuTrigger.stories.tsx` · Component: `src/components/Dropdowns/Menu/MenuTrigger.tsx`
- **[Bad control]** `children` renders as a raw object editor. → Fix: `control: false`, with the description "The trigger element followed by a Popover containing a Menu" (`MenuTrigger.stories.tsx:17-24`).
- **[Snippet]** In the IconButtonTrigger story, the icon-only `IconButton` has no `aria-label` and no `key`. → Fix: add both (`MenuTrigger.stories.tsx:50`).
- **[Defaults]** `trigger` defaults to `"press"` (inherited from react-aria `useMenuTrigger`; not set in source).

#### MultiSelect
Story: `src/components/Dropdowns/MultiSelect/MultiSelect.stories.tsx` · Component: `src/components/Dropdowns/MultiSelect/MultiSelect.component.tsx`
- **[Description]** `selectionPlaceholder` and `variant` have no descriptions (`MultiSelect.component.tsx:22-23`). → Fix: `selectionPlaceholder`: "Text shown in the trigger once one or more items are selected"; `variant`: "Visual style of the field".
- **[Typo] ✅ Fixed** "inital" → "initial" (`MultiSelect.stories.tsx:37`).
- **[Console]** The same PressResponder warning as CustomSelect, from the Loading story: the `isLoading` branch renders `StyledMultiSelectField` (`PressResponder` at `Fields/MultiSelectField/MultiSelectField.component.tsx:110-117`) with only a skeleton child (`MultiSelect.component.tsx:58-80`). → Fix: in the component.
- **[Defaults]** `placeholder = "Select an option"`, `selectionPlaceholder = "Items selected"`, `variant = "default"`, `maxHeight = 300`, `dropdownPlacement = "bottom start"`, `size = "medium"` (`MultiSelect.component.tsx:39-44`).

#### Select
Story: `src/components/Dropdowns/Select/Select.stories.tsx` · Component: `src/components/Dropdowns/Select/Select.component.tsx`
- **[Unnecessary control]** `isLoading` and `loadingLabel` are documented (inherited via `FieldInputProps`), but Select never uses them; they're spread onto the native `<select>` through `selectProps` (`Select.component.tsx:44`, `:70`). → Fix: omit them from `SelectProps` (`:16`), or implement them.
- **[Unnecessary control]** `placeholder` and `isReadOnly` are omitted from `SelectProps` (`:16`), but `InputControls` still adds controls for both. → Fix: disable both in the argTypes (`Select.stories.tsx:11-17`).
- **[Description]** `isDisabled` and `isRequired` only set `data-*` attributes on the wrapper `div` (`Select.component.tsx:39-40`, `:50-54`); they never reach the native `<select>` as `disabled` / `required`. So "Field cannot be interacted with" describes behaviour the component doesn't have. → Fix: the component, or the descriptions.
- **[Bad control]** `children` renders as a raw object editor. → Fix: `children: { control: false }`.
- **[Description]** `value` and `onChange` have no descriptions. → Fix: JSDoc at `Select.component.tsx:18`, plus a description on the `value` argType.
- **[Snippet]** `size: "medium"` in `Primary.args` is the default. → Fix: remove it (`Select.stories.tsx:27`).
- **[Stories]** Primary is the only story. → Fix: add an invalid/error story (`isInvalid` + `error`).
- **[Defaults]** `size = "medium"`; `isDisabled`, `isRequired` and `isInvalid` `= false`; `id` auto-generated (`Select.component.tsx:35-43`).

### Fields

#### ErrorMessage
Story: `src/components/Fields/Atoms/ErrorMessage/ErrorMessage.stories.tsx` · Component: `src/components/Fields/Atoms/ErrorMessage/ErrorMessage.component.tsx`
- **[Bad control]** `isInvalid` (a boolean) renders as a text area. The G1 fix may also fix this; if it doesn't → Fix: `argTypes: { isInvalid: { control: "boolean" } }`. (`ErrorMessage.stories.tsx:4-10`)
- **[Bad control]** `as` (`React.ElementType`) shows "Set object" and has no description. → Fix: `as: { control: false }`, plus JSDoc "Element or component to render as. @default "p"". (`ErrorMessage.component.tsx:20`)
- **[Description]** `isInvalid` has no description. → Fix: "Whether the error is shown. Nothing renders unless this is true. Set automatically when used inside a Field." (`ErrorMessage.component.tsx:21`)
- **[Defaults]** `size = "medium"`, `as = "p"`. (`ErrorMessage.component.tsx:32-33`)

#### Input
Story: `src/components/Fields/Atoms/Input/Input.stories.tsx` · Component: `src/components/Fields/Atoms/Input/Input.component.tsx`
- **[Typo] ✅ Fixed** "aria accessiblity label…" → "accessibility". It's in the shared `LoadingProps` type, so it also shows on TextArea, ComboInput, ComboBoxField, NumberField, SearchField and TextField. (`src/types/common.ts:53`)

#### Label
Story: `src/components/Fields/Atoms/Label/Label.stories.tsx` · Component: `src/components/Fields/Atoms/Label/Label.component.tsx`
- **[Unnecessary control]** `$paddingBottom` is documented but never applied: `Label` spreads `filterDOMProps(rest)` (line 46), which removes it, so the styled default of `5px` always wins. → Fix: pass `$paddingBottom={props.$paddingBottom}` to `StyledLabel`, or remove the prop. (`Label.component.tsx:24,46`)
- **[Bad control]** `as` (`React.ElementType`) shows "Set object" and has no description. → Fix: `control: false`, plus JSDoc "Element or component to render as. @default "label"". (`Label.component.tsx:23`)
- **[Defaults]** `as = "label"` (`Label.component.tsx:34`); `$paddingBottom` defaults to `"5px"` in the styled component (`Label.component.tsx:17`).

#### Message
Story: `src/components/Fields/Atoms/Message/Message.stories.tsx` · Component: `src/components/Fields/Atoms/Message/Message.component.tsx`
- **[Bad control]** `as` (`React.ElementType`) shows "Set object" and has no description. → Fix: `control: false`, plus JSDoc (it renders a `<p>` when unset). (`Message.component.tsx:20`)
- **[Defaults]** `size = "auto"`. (`Message.component.tsx:29`)

#### ChipGroupField
Story: `src/components/Fields/ChipGroupField/ChipGroupField.stories.tsx` · Component: `src/components/Fields/ChipGroupField/ChipGroupField.component.tsx`
- **[Misnamed]** Snippets render `<ChipFieldGroup>` because `displayName = "ChipFieldGroup"`; the export is `ChipGroupField`. → Fix: `ChipGroupField.displayName = "ChipGroupField"`. (`ChipGroupField.component.tsx:86`)
- **[Bad control]** `children` (ReactNode) renders as a JSON array editor ("children : 0 : 1"). → Fix: `children: { control: false }`, or spread `RenderPropsArgTypes`. (`ChipGroupField.stories.tsx:6-12`)
- **[Bad control]** `className` and `style` show "Set object". → Fix: spread the shared render-prop argTypes (see G2). (`ChipGroupField.stories.tsx:6-12`)
- **[Missing control]** The table leaves out the `MultipleSelection` props (`selectionMode`, `selectedKeys`, `defaultSelectedKeys`, `disabledKeys`, `onSelectionChange`), but shows `selectionBehavior`, which does nothing without `selectionMode`. → Fix: spread `MultiSelectionArgTypes` (`storybook/helpers.tsx:119`) with options matching the chip ids. (`ChipGroupField.stories.tsx:6-12`)
- **[Stories]** No story shows removable chips (`onRemove`) or selection (`selectionMode="multiple"`), and none uses the Message or ErrorMessage slots (lines 121-123). → Fix: add "Removable" and "Selectable" stories.

#### ComboBoxField
Story: `src/components/Fields/ComboBoxField/ComboBoxField.stories.tsx` · Component: `src/components/Fields/ComboBoxField/ComboBoxField.component.tsx`
- **[Typo] ✅ Fixed** "Hangler called when the selection changes" → "Handler". (`ComboBoxField.types.ts:13`)
- **[Description]** `allowsCustomValue`, `inputValue`, `defaultInputValue`, `onInputChange`, `onOpenChange` and `menuTrigger` have no JSDoc. → Fix, suggested text: "Allow a value that doesn't match an option", "Input text (controlled)", "Initial input text (uncontrolled)", "Called when the input text changes", "Called when the menu opens or closes", "What opens the menu: `input` (typing), `focus`, or `manual`". (`ComboBoxField.types.ts:16-22`)
- **[Missing control]** `selectedKey` and `defaultSelectedKey` (the main value props, from `SingleSelection`) aren't in the table. → Fix: add argTypes for both, e.g. a select with the item keys. (`ComboBoxField.stories.tsx:19-22`)
- **[Bad control]** The `isLoading` and `loadingLabel` controls do nothing here. Loading state only reaches `ComboInput` (line 126), not the input context (line 123), and the story uses a bare `<Input>`. → Fix: use `<ComboInput>` in the story, or add loading state to the `FieldInputContext` value as TextField does. (`ComboBoxField.stories.tsx:36`, `ComboBoxField.component.tsx:123`)
- **[Defaults]** `size = "medium"` (`ComboBoxField.component.tsx:66`). `menuTrigger` defaults to `"input"` (from react-stately).
- **[Stories]** No story shows a dropdown trigger button, although the component wires one up through `ButtonContext` (lines 151-159). → Fix: add a story with `<ComboInput><Input/><IconButton icon="arrow_drop_down"/></ComboInput>`.

#### ComboInput
Story: `src/components/Fields/ComboInput/ComboInput.stories.tsx` · Component: `src/components/Fields/ComboInput/ComboInput.component.tsx`
- **[Misnamed]** The "Number Field With Buttons" snippet wraps everything in `<NumberField.IncrementButton>`; it should be `<NumberField>`. Cause: docgen overwrites NumberField's display name (see NumberField below). → Fix: in NumberField.
- **[Unnecessary control]** `inputRef` (a ref that Field components fill in automatically, according to its own JSDoc) is exposed with a "Set object" control. → Fix: `inputRef: { table: { disable: true } }`. (`ComboInput.stories.tsx:18-36`)
- **[Description]** The `padding` description ends with a bare "undefined". There's no source default, so unset means no side padding. → Fix: say so in the description. (`ComboInput.types.ts:15-20`)

#### DateField
Story: `src/components/Fields/DateField/DateField.stories.tsx` · Component: `src/components/Fields/DateField/DateField.component.tsx`
- **[Misnamed]** Every snippet shows `<DateFieldSegments />`, but the public API is `<DateField.Segments>{(_, i) => <DateField.Segment index={i} />}</DateField.Segments>` (`index.tsx:5-8`). The render-function children and `DateField.Segment` are also missing from the snippet. → Fix: set `DateFieldSegments.displayName = "DateField.Segments"` and `DateFieldSegment.displayName = "DateField.Segment"`, then check the generated docgen for the same overwrite bug NumberField has. Use `parameters.docs.source.code` so the render function shows. (`DateFieldSegments.tsx:14`, `DateFieldSegment.tsx:12`)
- **[Snippet]** `defaultValue={2026-11-23T17:22:22.502-07:00[America/Denver]}` is not valid JSX. → Fix: use a source transform or source code that prints `defaultValue={now(getLocalTimeZone())}`. (`DateField.stories.tsx:74,78`)
- **[Unnecessary control]** `isLoading` and `loadingLabel` come from `FieldStateControls`, but `DateFieldProps` has no loading props and the component ignores them. → Fix: omit them (see the shared fix under Field). (`DateField.stories.tsx:17`, `DateField.component.tsx:39-41`)
- **[Bad control]** `children` (ReactNode) renders as a JSON array editor. → Fix: `children: { control: false }`. (`DateField.stories.tsx:16-69`)
- **[Typo] ✅ Fixed** "Provides the accessbility implementation" → "accessibility". (`DateField.component.tsx:43`)
- **[Stories]** "Day Granularity" repeats Primary, which already sets `granularity: "day"` (line 79). → Fix: drop it, or change Primary's granularity. Also missing: a story showing `minValue`/`maxValue` validation and `isReadOnly`. (`DateField.stories.tsx:94-107`)

#### Field
Story: `src/components/Fields/Field/Field.stories.tsx` · Component: `src/components/Fields/Field/Field.component.tsx`
- **[Unnecessary control]** `isLoading` and `loadingLabel` come from `FieldStateControls`, but `FieldProps` has no loading props and `Field` ignores them. → Fix: move both out of `FieldStateControls` into a separate `LoadingArgTypes`, used only by fields that support loading. This also fixes DateField, MultiSelectField and SelectField. (`Field.stories.tsx:13`, `storybook/helpers.tsx:34-45`)
- **[Bad control]** `children` (ReactNode) renders as a JSON array editor. → Fix: `children: { control: false }`. (`Field.stories.tsx:12-14`)
- **[Description]** `size` has no JSDoc. The same declaration is inherited by ComboBoxField, DateField, MultiSelectField, NumberField, SearchField, SelectField and TextField. → Fix: "Size of the field and its input". (`Field.component.tsx:32`)
- **[Typo] ✅ Fixed** "Provides the accessbility implementation" → "accessibility" (line 35); "if they suite your needs" → "suit" (line 39). (`Field.component.tsx:35,39`)

#### MultiSelectField
Story: `src/components/Fields/MultiSelectField/MultiSelectField.stories.tsx` · Component: `src/components/Fields/MultiSelectField/MultiSelectField.component.tsx`
- **[Unnecessary control]** `label`, `error` and `message` (from `InputControls`) aren't props: `AriaProps` omits `label` and the help-text props (`src/types/aria.ts:3-13`). `placeholder` is accepted but never used, and loading isn't supported. All six show "-" as the description. → Fix: use `FieldStateControls` (without loading) instead of `InputControls`. (`MultiSelectField.stories.tsx:22`)
- **[Bad control]** The `selectedKeys` options are `["val1","val2","val3"]`, but the item ids are `"1"`, `"2"` and `"3"`, so the control can't select anything. → Fix: `options: ["1","2","3"]`. (`MultiSelectField.stories.tsx:27` vs `:77-79`)
- **[Typo] ✅ Fixed** "Control the inital state of the menu" → "initial". (`MultiSelectField.stories.tsx:43`)
- **[Defaults]** `size = "medium"`, passed only to the trigger `ButtonContext`. (`MultiSelectField.component.tsx:76`)

#### NumberField
Story: `src/components/Fields/NumberField/NumberField.stories.tsx` · Component: `src/components/Fields/NumberField/NumberField.component.tsx`
- **[Misnamed]** The docgen-injected code sets `NumberField.displayName = "NumberField.IncrementButton"` (confirmed in the build output). It's triggered by `NumberFieldIncrementButton.displayName = "NumberField.IncrementButton"`. The stories file hides it with a runtime override, so it only shows on other pages (e.g. ComboInput). → Fix: declare the statics differently (e.g. `Object.assign` as DateField does, or move the sub-buttons to their own file), then remove the `@ts-ignore` override. (`NumberField.component.tsx:102-116`, `NumberField.stories.tsx:12-15`)
- **[Bad control]** The `isLoading` and `loadingLabel` controls do nothing in any story. Loading state only reaches `ComboInputContext` (line 82), not `FieldInputContext` (lines 85-92), and the stories use `<Group>` rather than `ComboInput`. → Fix: add loading state to the input context value (as TextField does at `TextField.component.tsx:95-96`), or use `ComboInput` in the stories. (`NumberField.component.tsx:85-92`)
- **[Bad control]** `children` (ReactNode) renders as a JSON array editor. → Fix: `children: { control: false }`. (`NumberField.stories.tsx:23-56`)
- **[Missing control]** `step`, a core number-field prop (from `AriaNumberFieldProps`), is missing from the table. → Fix: `step: { control: "number", description: "Amount to increment or decrement by" }`. (`NumberField.stories.tsx:23-56`)
- **[Description]** `onChange` has no description. → Fix: "Handler called when the numeric value changes". (`NumberField.stories.tsx:25`)
- **[Unnecessary control]** The `data-float` and `data-resize` argTypes refer to props NumberField doesn't have. → Fix: remove them. (`NumberField.stories.tsx:46-55`)
- **[Typo] ✅ Fixed** "Provides the accessbility implementation" → "accessibility". (`NumberField.component.tsx:25`)
- **[Stories]** The exported `NumberField.IncrementButton` and `NumberField.DecrementButton` (lines 110-113) aren't used in any story; the stories use `<IconButton slot="increment">` instead. → Fix: use them in at least one story so they get documented.

#### SearchField
Story: `src/components/Fields/SearchField/SearchField.stories.tsx` · Component: `src/components/Fields/SearchField/SearchField.component.tsx`
- **[Description]** `defaultValue` and `value` have argTypes but no description. → Fix: "Initial search text (uncontrolled)" / "Search text (controlled)". (`SearchField.stories.tsx:21-26`)
- **[Bad control]** The `isLoading` control does nothing on Primary. The input context (lines 66-72) doesn't get loading state; only `ComboInputContext` does (line 84), and Primary uses a bare `<Input>`. → Fix: add `isLoading` and `loadingLabel` to `inputCtx`, as TextField does. (`SearchField.component.tsx:66-72`)
- **[Snippet]** In "With Additional Action", the "clear search" `IconButton` has no slot or `onPress`, so it does nothing; `ButtonContext` only defines the default and `submit` slots (lines 89-95). → Fix: add a `clear` slot that calls `state.setValue("")` / `onClear`, and use `slot="clear"` in the story. (`SearchField.stories.tsx:90-95`, `SearchField.component.tsx:89-95`)
- **[Missing control]** `onClear` (from `AriaSearchFieldProps`, fires on Escape) isn't listed. → Fix: `onClear: { action: "onClear", table: { category: "Events" } }`. (`SearchField.stories.tsx:18-42`)

#### SelectField
Story: `src/components/Fields/SelectField/SelectField.stories.tsx` · Component: `src/components/Fields/SelectField/SelectField.component.tsx`
- **[Description]** Every prop row comes only from story argTypes. `size`, `id` and `name` are missing, and `isDisabled`, `isRequired`, `isInvalid` and `isReadOnly` show "-". In the build, `SelectField.__docgenInfo` has an empty description and lists the internal `collection` and `selectRef` props: docgen read the exported `SelectFieldInner` (`SelectFieldInnerProps`) instead of `SelectFieldProps`. → Fix: stop exporting `SelectFieldInner` (line 63), or type the forwardRef callback so docgen resolves `SelectFieldProps`; then re-check the table. (`SelectField.component.tsx:45-63`)
- **[Typo] ✅ Fixed** Both sections in "With Sections" are titled "Section 1"; the second should be "Section 2". (`SelectField.stories.tsx:114`)
- **[Typo] ✅ Fixed** "Control the inital state of the menu" → "initial". (`SelectField.stories.tsx:50`)
- **[Description]** `onFocusChange` uses the same text as `onFocus` ("Callback for when the input is focused"). → Fix: "Callback when the focus state changes; receives `isFocused`". (`storybook/helpers.tsx:243-244`)
- **[Unnecessary control]** `isLoading` and `loadingLabel` come from `FieldStateControls`, but `SelectFieldProps` has no loading props. → Fix: drop them (see the shared fix under Field). (`SelectField.stories.tsx:27`)
- **[Defaults]** `size = "medium"`, passed only to the trigger `ButtonContext`. (`SelectField.component.tsx:75`)

#### TextField
Story: `src/components/Fields/TextField/TextField.stories.tsx` · Component: `src/components/Fields/TextField/TextField.component.tsx`
- **[Missing control]** `type` (from `AriaTextFieldProps`) isn't in the table, although the component uses it to build the class name (line 78) and passes it to `useTextField`. → Fix: `type: { control: "select", options: ["text","email","password","search","tel","url"] }`. (`TextField.stories.tsx:19-44`)
- **[Description]** `defaultValue` and `value` have argTypes but no description. → Fix: "Initial value (uncontrolled)" / "Value (controlled)". (`TextField.stories.tsx:21-26`)
- **[Bad control]** `children` (ReactNode) renders as a JSON array editor. → Fix: `children: { control: false }`. (`TextField.stories.tsx:19-44`)
- **[Unnecessary control]** The `data-float` and `data-resize` argTypes refer to props TextField doesn't have. → Fix: remove them. (`TextField.stories.tsx:34-43`)
- **[Typo] ✅ Fixed** "Provides the accessbility implementation" → "accessibility". (`TextField.component.tsx:23`)
- **[Typo] ✅ Fixed** The placeholder `"Jon@then"` in "With Button" looks like a garbled email. → Fix: something like `"Enter a username"`. (`TextField.stories.tsx:87`)
- **[Defaults]** `type = "text"`. (`TextField.component.tsx:28`)

**No issues of its own:** TextArea (only the shared "accessiblity" typo, listed under Input).

### Animations, Banners, Chips, Feedback, Format, Icons and Pagination

#### BouncingDots
Story: `src/components/Animations/BouncingDots/BouncingDots.stories.tsx` · Component: `BouncingDots.component.tsx`
- **[Unnecessary control]** The `aria-*` props are documented but never applied (G13) (`BouncingDots.component.tsx:36`).
- **[Unnecessary control]** A `children` row comes from `RenderPropsArgTypes`, but the component takes no children. → Fix: use `RenderStylePropsArgTypes` (`BouncingDots.stories.tsx:14`).
- **[Description]** `size` and `count` have no description. → Fix: "Size of the dots" / "Number of dots to render" (`:14,21`).
- **[Defaults]** `size = "medium"`, `count = 3`, `duration = 500` (`duration` already has `@default`) (`:25`).

#### Checkmark
Story: `src/components/Animations/Checkmark/Checkmark.stories.tsx` · Component: `Checkmark.component.tsx`
- **[Unnecessary control]** A `children` row appears, but the props type omits `children`. → Fix: `RenderStylePropsArgTypes` (`Checkmark.stories.tsx:14`).
- **[Description]** `size` has no description (`Checkmark.component.tsx:7`).
- **[Snippet]** The default `size: "medium"` is hard-coded (`Checkmark.stories.tsx:22`).
- **[Defaults]** `size = "medium"` (`Checkmark.component.tsx:11`).

#### Spinner
Story: `src/components/Animations/Spinner/Spinner.stories.tsx` · Component: `Spinner.component.tsx`
- **[Unnecessary control]** The story reuses `ProgressCircleMeta.argTypes`. That exposes `isIndeterminate`, which SpinnerProps omits and the component always forces on, plus `value`, `minValue`, `maxValue`, `showValueLabel`, `valueLabel` and `formatOptions`, which do nothing on a spinner. → Fix: give Spinner its own argTypes (`Spinner.stories.tsx:11`).
- **[Missing control]** No types or descriptions, and no `$size`, `$trackWidth`, `$linecap` or `aria-label` rows.
- **[Console]** "If you do not provide a visible label, you must specify an aria-label…". → Fix: `args: { "aria-label": "Loading" }`, or default the label to `t("loading")` in the component (`Spinner.stories.tsx:18`, `Spinner.component.tsx:12`).
- **[Defaults]** `$size="40px"`, `$trackWidth="6"`, `$linecap="round"`, `$trackColor="transparent"`, `$indicatorColor="var(--animation-clr)"` (`Spinner.component.tsx:13-17`).

#### ActionBanner
Story: `src/components/Banners/ActionBanner/ActionBanner.stories.tsx` · Component: `ActionBanner.component.tsx`
- **[Bad control]** The `buttonVariant` select is missing `link`, `border` and `ghost` (`Internal/BaseButton.tsx:18-28`); the table shows its type as `any` (`ActionBanner.stories.tsx:26-33`).
- **[Description]** `variant`, `icon`, `iconVariant`, `buttonVariant`, `buttonText` and `onPress` have no JSDoc (`ActionBanner.component.tsx:15-20`). Suggested: "Colour variant", "Material icon shown before the content", "Icon set for `icon`", "Variant of the action button", "Text of the action button", "Called when the action button is pressed".
- **[Snippet]** `className: ""` in the args shows up as `className=""` (`ActionBanner.stories.tsx:47,58`).
- **[Stories]** `onPress` is required, but neither story sets it, so the button does nothing. → Fix: add `onPress: fn()`.
- **[Defaults]** `variant = "info"`, `iconVariant = "default"`, `buttonVariant = "inverted"` (`ActionBanner.component.tsx:28-31`).

#### Banner
Story: `src/components/Banners/Banner/Banner.stories.tsx` · Component: `Banner.component.tsx`
- **[Missing control]** No docgen (forwardRef cast; G9), so the table has only the 4 argTypes rows, with no types or descriptions. `Banner.Content`, `.Icon`, `.IconButton` and `.Button` aren't documented. → Fix: G9, plus `subcomponents` (`Banner.component.tsx:21-25,78`).
- **[Description]** `variant` has no JSDoc. → Fix: "Colour variant: info | error | success | warning" (`:24`).
- **[Stories]** The WithButton children have no `key`s (`Banner.stories.tsx:55-57`).
- **[Defaults]** `variant = "info"`; `Banner.IconButton` `variant = "banner"`; `Banner.Button` `variant = "inverted"` (`Banner.component.tsx:28,53,60`).

#### DismissableBanner
Story: `src/components/Banners/DismissableBanner/DismissableBanner.stories.tsx` · Component: `DismissableBanner.component.tsx`
- **[Bad control]** The `iconVariant` options include `"rounded"`, but the type value is `"round"` (`src/types/icons.ts:21-26`) (`DismissableBanner.stories.tsx:22`).
- **[Description]** `variant` has no JSDoc (`DismissableBanner.component.tsx:21`).
- **[Defaults]** `variant = "info"`, `iconVariant = "default"`. ErrorBanner sets `variant="error" icon="error"`; WarningBanner sets `variant="warning" icon="warning"` (`:37-38,74,83-84`).

#### Chip
Story: `src/components/Chips/Chip/Chip.stories.tsx` · Component: `Chip.component.tsx`
- **[Typo] ✅ Fixed** The story name `Pressasble` should be `Pressable` (`Chip.stories.tsx:49`).
- **[Description]** `isDisabled` inherits PressProps' text ("Whether the press events should be disabled"), but in Chip it also sets `aria-disabled` and disables the remove button. → Fix: "Disables the chip and its remove button" (`Chip.types.ts:15`). `variant` has no description (`Chip.types.ts:11`).
- **[Stories]** No stories for the `warning` / `success` / `danger` variants or for a disabled chip.

#### ChipGroup
Story: `src/components/Chips/ChipGroup/ChipGroup.stories.tsx` · Component: `ChipGroup.component.tsx`
- **[Unnecessary control]** `isReadOnly` (omitted from the props type) and `placeholder` come from `InputControls` (G11) (`ChipGroup.stories.tsx:16`).
- **[Unnecessary control]** `isLoading`, `loadingLabel` and `name` are accepted through `FieldInputProps`, but ChipGroupField never reads them (`ChipGroup.component.tsx:8`; `Fields/ChipGroupField/ChipGroupField.component.tsx:94-115`).
- **[Description]** `children` has no description. → Fix: "`Chip` elements to render".
- **[Defaults]** `labelPlacement = "above"` (`ChipGroup.component.tsx:22`).
- **[Stories]** No story for `labelPlacement="inline"` or for the `error` / `message` help text. The children have no `key`s (`ChipGroup.stories.tsx:35-40`).

#### ErrorBoundary
Story: `src/components/Feedback/ErrorBoundary/ErrorBoundary.stories.tsx` · Component: `ErrorBoundary.component.tsx`
- **[Snippet]** Every snippet shows the raw story object (`{ render: () => { const [shouldThrow…`) instead of JSX. → Fix: `parameters.docs.source.code`, or extract named demo components (`ErrorBoundary.stories.tsx:63-238`).
- **[Bad control]** The `fallback`, `onError` and `onReset` controls do nothing, because every story's `render()` ignores args; the stories also `console.log` instead of using actions (`:14-31,122-128,171-173`).
- **[Missing control]** `children` is required but missing from the table (`ErrorBoundary.component.tsx:4`).
- **[Stories]** The `<h3>Outer Component</h3>` in NestedErrorBoundaries shows up as a docs heading. → Fix: use `<Text>` (`:213`).

#### Loader
Story: `src/components/Feedback/Loader/Loader.stories.tsx` · Component: `Loader.component.tsx`
- **[Unnecessary control]** The `aria-*` props are documented but never applied (G13) (`Loader.component.tsx:59`).
- **[Bad control]** `isLoading` (boolean) renders as a textarea. → Fix: `control: "boolean"` (`Loader.stories.tsx:9`).
- **[Typo] ✅ Fixed** "conatiner" → "container"; "of it's nearest" → "of its nearest" (`Loader.component.tsx:23-24`).
- **[Description]** `size` has no description. `children` is described as "Children to render", but it's the loading animation; a function child is called with `{ isLoading }` and replaces the Checkmark once loading finishes (`:18,74-77`).
- **[Console]** The a11y label warning comes from the `<Spinner $size="2em" />` in SpinnerLoaderExample, which has no `aria-label` (`Loader.stories.tsx:83`).
- **[Stories]** The story SVG uses `stroke-width` / `stroke-linejoin`; use `strokeWidth` / `strokeLinejoin` (`:32-33`). No story for `isLoading: false` (the checkmark completion state).
- **[Snippet]** The default `placement: "center"` is hard-coded (`:21`).
- **[Defaults]** `isLoading = true`, `orientation = "vertical"`, `size = "medium"`, `placement = "center"` (`placement` already has `@default`) (`Loader.component.tsx:39-42`).

#### Loading
Story: `src/components/Feedback/Loading/Loading.stories.tsx` · Component: `Loading.component.tsx`
- **[Description]** The `isLoading` description comes from the shared `LoadingProps` ("content will be replaced with a spinner") and is wrong here: Loading provides an ambient loading state that descendants read through `useLoading` (`src/types/common.ts:50-52`, `Loading.component.tsx:8`).
- **[Description]** `loadingLabel` is only used in the visually hidden status region; descendants get `t("loading")` through the context instead (`Loading.component.tsx:22`). Fix the code or document it.
- **[Unnecessary control]** `id` and `size` (from `BaseProps`) are ignored: `id` never reaches the `<div>`, and there are no size styles (`:8,34`).
- **[Snippet]** Fragment children render as `<React.Fragment key=".0">` in WrappingMultipleComponents and ExampleForm (`Loading.stories.tsx:48-53,67-92`).
- **[Typo] ✅ Fixed** The ExampleForm doc comment says "Toggle the switch", but there's no switch; it means the `isLoading` control (`:60`).

#### LoadingStatus
Story: `src/components/Feedback/LoadingStatus/LoadingStatus.stories.tsx` · MDX: `LoadingStatus.mdx` · Component: `LoadingStatus.component.tsx`
- **[Snippet]** The NoDataFallback hand-written source shows `<Banner variant="warning">` / `<Banner variant="info">`, but the story renders `<Text>` (`LoadingStatus.stories.tsx:90-104`).
- **[Snippet]** Placeholder args `error: ""` and `loadingMessage: ""` show up in snippets (`:32,40,50,59`). CustomizeLoadingState passes `loadingMessage`, which is ignored when `renderLoading` is an element (`:49-52`; `LoadingStatus.component.tsx:79-88`).
- **[Console]** The a11y label warning comes from `renderLoading: <SpinnerLoader />`, which has no `aria-label` (`LoadingStatus.stories.tsx:52`).
- **[Bad control]** `isLoading` and `children` render as textareas; `renderLoading` / `renderError` render as "Set object". → Fix: `isLoading` boolean; `control: false` for the other three (`:14-21`).
- **[Description]** `children` has no JSDoc. → Fix: "Content rendered when not loading and there's no error. Must be a function `(data) => node` when `data` is provided." `isLoading` should mention that it falls back to the ambient `<Loading>` state (`LoadingStatus.component.tsx:9,21-22`).
- **[Stories]** In the MDX, WithData and NoDataFallback render in `<Canvas>` and again in `<Stories />` (`LoadingStatus.mdx:30,34,36`).
- **[Defaults]** `renderLoading = ThreeDotLoader`, `loadingMessage = null`, `loadingPlacement = "center"`, `error = null`, `renderError = ErrorBanner`, `children = null`, `isLoading = false` (`LoadingStatus.component.tsx:57-63,68`).

#### ProgressCircle
Story: `src/components/Feedback/ProgressCircle/ProgressCircle.stories.tsx` · Component: `ProgressCircle.component.tsx`
- **[Console]** The a11y label warning: no story sets `aria-label` / `label`, and neither is in the table. → Fix: add argTypes for both and set `"aria-label"` in `Primary.args` (`ProgressCircle.stories.tsx:13-65`).
- **[Console]** `...rest` is spread onto the `<svg>` and includes `valueLabel`, `formatOptions` and `label`, which will trigger React unknown-prop warnings in dev. → Fix: destructure them out (`ProgressCircle.component.tsx:37-52,87`).
- **[Snippet]** The defaults `isIndeterminate: false` and `showValueLabel: false` are hard-coded (`ProgressCircle.stories.tsx:61,63,70,79`).
- **[Defaults]** `value = 0`, `minValue = 0`, `maxValue = 100`, `$size = "60"`, `$trackWidth = "10"`, plus CSS-variable colour defaults (`ProgressCircle.component.tsx:38-49`).

#### SkeletonLoader
Story: `src/components/Feedback/SkeletonLoader/SkeletonLoader.stories.tsx` · Component: `SkeletonLoader.component.tsx`
- **[Typo] ✅ Fixed** "with repsect to the viewbox witdth" → "with respect to the viewBox width" (`SkeletonLoader.component.tsx:18`).
- **[Bad control]** `children` (SVG elements) gets a JSON array editor → `control: false`. `duration` (number) renders as a textarea (`SkeletonLoader.stories.tsx:6-12`).
- **[Stories]** The children have no `key`s in all three stories.
- **[Defaults]** `isAnimated = true`, `gradientRatio = 2`, `duration = 1.2`, `title = ""` (`SkeletonLoader.component.tsx:34-37`).

#### SpinnerLoader
Story: `src/components/Feedback/SpinnerLoader/SpinnerLoader.stories.tsx` · Component: `SpinnerLoader.component.tsx`
- **[Console]** The a11y label warning: Primary has no `aria-label`. → Fix: add one, or default it to `t("loading")` in the component (`SpinnerLoader.stories.tsx:26-30`, `SpinnerLoader.component.tsx:14`).
- **[Description]** The `aria-*` rows have no description because `AriaLabelArgTypes` isn't spread (`SpinnerLoader.stories.tsx:13`).
- **[Bad control]** `isLoading` renders as a textarea.

#### ThreeDotLoader
Story: `src/components/Feedback/ThreeDotLoader/ThreeDotLoader.stories.tsx` · Component: `ThreeDotLoader.component.tsx`
- **[Unnecessary control]** The `aria-*` props are dropped: Loader filters them out, and they aren't passed to BouncingDots (G13) (`ThreeDotLoader.component.tsx:19-20`).
- **[Description]** `className` / `style` have no description: `RenderStylePropsArgTypes` isn't spread.
- **[Bad control]** `isLoading` renders as a textarea.
- **[Snippet]** The default `placement: "center"` is hard-coded (`ThreeDotLoader.stories.tsx:27`).

#### FormatDate
Story: `src/components/Format/FormatDate/FormatDate.stories.tsx` · Component: `FormatDate/index.ts`
- **[Misnamed]** The snippet renders `<a …>`, and the table has no types or descriptions (G10).
- **[Bad control]** `value` (a `Date`) renders as a textarea. → Fix: `control: "date"` with a timestamp → `Date` mapping (`FormatDate.stories.tsx:17`).
- **[Description]** `value`, `children` and `fallback` come from the shared `FormatterProps`, which has no JSDoc (G14).

#### FormatDuration
Story: `src/components/Format/FormatDuration/FormatDuration.stories.tsx` · Component: `FormatDuration/index.ts`
- **[Misnamed]** The snippet renders `<z …>`, and the `minUnit` / `maxUnit` / `style` JSDoc doesn't show (G10).
- **[Snippet]** The CustomizeRender source uses `value={3600} fallback="No duration"`, but the story uses 3892 with no fallback (`FormatDuration.stories.tsx:55-66`).
- **[Stories]** CustomizeRender renders an `<h1>`, which becomes a docs-page heading (`:57,64`).
- **[Description]** `value` should say it's in seconds.
- **[Defaults]** `minUnit = "second"`, `maxUnit = "year"` (both already documented); `style = "long"` has no `@default` (`hooks/useDurationFormatter.ts:74-79,86`).

#### FormatList
Story: `src/components/Format/FormatList/FormatList.stories.tsx` · Component: `FormatList/index.ts`
- **[Misnamed]** The snippet renders `<b …>`, and there are no descriptions (G10).

#### FormatNumber
Story: `src/components/Format/FormatNumber/FormatNumber.stories.tsx` · Component: `FormatNumber/index.ts`
- **[Misnamed]** Snippets render `<P …>`, and there are no descriptions (G10).

#### FormatOptional
Story: `src/components/Format/FormatOptional/FormatOptional.stories.tsx` · Component: `FormatOptional.component.tsx`
- **[Snippet]** The hand-written source has a double arrow, `{(value) => (v) => <strong>{v}</strong>}`. → Fix: `{(value) => <strong>{value}</strong>}` (`FormatOptional.stories.tsx:44`).
- **[Bad control]** `fallback` (ReactNode) renders as "Set object". → Fix: `control: "text"`, as FormatDuration and FormatList do.

#### FormatTable
Story: `src/components/Format/FormatTable/FormTable.stories.tsx` · Component: `FormatTable.component.tsx`
- **[Typo] ✅ Fixed** The story file is named `FormTable.stories.tsx`. → Rename it to `FormatTable.stories.tsx`.
- **[Console]** "An aria-label or aria-labelledby prop is required": `<Table>` is rendered with no label, and there's no prop to pass one. → Fix: accept and forward `aria-label` / `aria-labelledby` (`FormatTable.component.tsx:7-15`).
- **[Unnecessary control]** `fallback` and `children` are inherited from `FormatterProps` but ignored: a null `value` renders an empty table. → Fix: implement `fallback`, or omit both (`:7,12,21`).
- **[Description]** `columns` and `value` have no JSDoc. Suggested: "Column definitions (`key` matches a row field, `title` is the header)" / "Rows; each needs a unique `key`" (`:7-8`).

#### MaterialIcon
Story: `src/components/Icons/MaterialIcon/MaterialIcon.stories.tsx` · Component: `MaterialIcon.component.tsx`
- **[Deprecated]** `disabled` is already `@deprecated` (replacement `isDisabled`) but still shows in the table (G8) (`MaterialIcon.component.tsx:19-20`).
- **[Misnamed]** The forwardRef render function is named `MaterialProps`; rename it to `MaterialIcon` (`:26`).
- **[Description]** `icon`, `size`, `isDisabled` and `isFocusable` have no description. Suggested: `icon` "Name of the Material icon"; `isFocusable` "Makes the icon focusable"; `isDisabled` "Applies disabled styling" (`:13`, `src/types/icons.ts:16-18`).
- **[Defaults]** `variant = "default"`, `size = "medium"`, `disabled = false`, `isDisabled = disabled`, `isFocusable = false` (`:30-34`).

#### MaterialSymbol
Story: `src/components/Icons/MaterialSymbol/MaterialSymbol.stories.tsx` · Component: `MaterialSymbol.component.tsx`
- **[Typo] ✅ Fixed** "completly filled" → "completely filled" (`src/types/icons.ts:2239`).
- **[Missing control]** `fill` (0–1), `weight` (100–700), `grade` and `opticalSize` are bounded numbers. → Fix: `range` controls so the axes can be explored.
- **[Description]** `symbol`, `size`, `isDisabled` and `isFocusable` have no description.
- **[Snippet]** The default `variant: "outlined"` is hard-coded (`MaterialSymbol.stories.tsx:20`).
- **[Defaults]** `variant = "outlined"`, `size = "medium"`, `isDisabled = false`, `isFocusable = false` (`MaterialSymbol.component.tsx:32-35`).

#### Pagination
Story: `src/components/Pagination/Pagination/Pagination.stories.tsx` · Component: `Pagination.component.tsx`
- **[Unnecessary control]** The `aria-*` props are documented but never applied: the `<div>` only gets `renderProps` (G13). → Fix: `filterDOMProps(props, { labelable: true })` plus `role="navigation"` (`Pagination.component.tsx:24-27,70`). `AriaLabelArgTypes` is imported but never spread (`Pagination.stories.tsx:4,14`).
- **[Description]** `onPageSizeChange` has no JSDoc; `pageSize` should say "(controlled)" (`Pagination.types.ts:10-13`).
- **[Bad control]** `defaultPage` and `totalPages` render as textareas.
- **[Snippet]** The WithPageNumbers snippet shows `<Pagination.PageList />` and drops the render-function child. → Fix: `docs.source.code` (`:71-80`). WithPageSize hard-codes the default `defaultPageSize: 10` (`:92`).
- **[Missing control]** The subcomponents (FirstPage, PrevPage, NextPage, LastPage, Page, PageList, CurrentPage, PageSize) are undocumented. → Fix: JSDoc plus `subcomponents` (`Pagination.component.tsx:88-255`).
- **[Defaults]** `variant = "ghost"` has no `@default` (`defaultPage = 1` and `defaultPageSize = 10` already do) (`:48`).

---

## Part 3: Component bugs found along the way

These are behaviour bugs, not documentation problems, but each one makes a control look broken.
They're listed here so they don't get lost among the docs fixes. Details are in Part 2 under each
component.

> **Status:** ✅ All fixed, each in its own commit with tests. Two fixes went slightly further than listed: ButtonGroup also routes `aria-label` / `aria-labelledby` to the group (they were naming every button), and FileTrigger gains an optional `id` prop so FileInput can put its `id` on the file input. Still open: FormatTable inherits a `children` prop it ignores. Removing it changes the public type.

| Component | Bug | Where |
|---|---|---|
| FileTrigger | `accept="directories"` never works: the code compares against `"directory"` | `Buttons/FileTrigger/FileTrigger.component.tsx:80` |
| IconMenu | `buttonVariant` is never applied to the trigger button | `Dropdowns/IconMenu/IconMenu.component.tsx:49,59` |
| Select | `isDisabled` / `isRequired` only set `data-*` attributes and never reach the native `<select>` | `Dropdowns/Select/Select.component.tsx:39-54` |
| ButtonGroup | `as` and `style` are forwarded to every child Button instead of the group | `Buttons/ButtonGroup/ButtonGroup.component.tsx:34-58` |
| Label | `$paddingBottom` is stripped by `filterDOMProps` and never applied | `Fields/Atoms/Label/Label.component.tsx:24,46` |
| Em | `componentClassName` is `"aje-strong"` (copied from Strong) | `Typography/Em/Em.component.tsx:22` |
| Grid | `$flow` values `row-dense` / `column-dense` aren't valid CSS | `src/styles/grid.ts:10,43` |
| Text | `$wrap` values `pretty` / `balanced` are written to `white-space`, where they're invalid | `src/styles/typography.ts:10,32` |
| Checkbox | `error` defaults to the string `"error"`, so an invalid checkbox shows the literal word "error" | `Inputs/Checkbox/Checkbox.component.tsx:51` |
| NumberInput, FileInput | Forwarded `ref` is never attached; FileInput's `id` is also unused | `NumberInput.component.tsx:17-19`, `FileInput.component.tsx:40-64` |
| NumberField, SearchField, ComboBoxField | `isLoading` / `loadingLabel` don't reach the input (TextField does this correctly) | see each component in Part 2 |
| CustomSelect, MultiSelect | Loading branch renders a `PressResponder` with no pressable child (console warning) | `CustomSelect.component.tsx:64-86`, `MultiSelect.component.tsx:58-80` |
| BouncingDots, Loader, ThreeDotLoader, Pagination | `aria-*` props are dropped (G13) | see each component in Part 2 |
| ProgressCircle | `valueLabel`, `formatOptions` and `label` are spread onto the `<svg>` | `Feedback/ProgressCircle/ProgressCircle.component.tsx:87` |
| FormatTable | No way to pass `aria-label`; `fallback` is ignored | `Format/FormatTable/FormatTable.component.tsx:7-21` |
| SearchField | The "clear" button in the story has no slot to hook into | `Fields/SearchField/SearchField.component.tsx:89-95` |

Paths are relative to `packages/atomic-elements/src/components/` unless they start with `src/`.

---

## Part 4: Open decisions

Everything here was left alone on purpose: each item changes public API or behaviour, or needs a
structural change, so it needs a decision before anyone acts on it. Where a prop is ignored, it is
already hidden from the props table, so the docs are accurate in the meantime.

### Naming
1. **Checkbox or CheckBox.** The export is `CheckBox`, but the docs title, files and folder say
   `Checkbox`. Pick one; the other could stay as a deprecated alias.
   > **Status:** ✅ Done: folder, files, story title and internals renamed to CheckBox to match the export.
2. **`RadioGroupsProps`** should be `RadioGroupProps`. Add the new name and keep the old one as a
   deprecated alias.
   > **Status:** ✅ Done: `RadioGroupProps`, with `RadioGroupsProps` kept as a deprecated alias (`@atomicjolt/forms` still uses the alias, since it supports older atomic-elements releases).

### Props in public types that the component ignores
Removing these from the types is the clean fix, but it's a breaking change for anyone passing them
today (even though they have no effect). They are hidden from the docs for now.

3. **`isLoading` / `loadingLabel`**, inherited through `FieldInputProps`, are ignored by Select,
   DateInput, DatePicker, TimeInput and ChipGroup.
   > **Correction:** an earlier version of this item also listed Field, DateField, SelectField and
   > MultiSelectField. Their types don't accept `isLoading`; they only showed loading controls in
   > Storybook, which is fixed (G11).
   >
   > **Status:** ✅ Done: all five show a loading placeholder, from their own props or an ambient `<Loading>` provider.
4. **`size`** is ignored by Divider, Table and ToggleSwitch. Calendar's `size` type also allows
   `"auto"`, which has no styles.
   > **Status:** ✅ Done: `size` removed from Divider, Table and ToggleSwitch; Calendar's `size` no longer allows `"auto"`. Breaking for TypeScript callers.
5. **Other ignored props:** FormatTable's `children` and `aria-details`; DisclosureGroup's
   `className` / `style`; Loading's `id` and `size`.
   > **Status:** ✅ Done: Loading supports `id` and drops `size`; FormatTable passes `aria-details` to its table and drops `children`. DisclosureGroup's `className` / `style` were never in its type, only its docs (already fixed).

### Docs gaps that need structural changes
6. **Subcomponents of cast components get no docs.** react-docgen-typescript only documents static
   subcomponents when the parent is a plain function. Navbar, Disclosure, Tabs and List
   (`List.Item`) are cast (`as typeof X & {…}`), and Banner's and Pagination's subcomponents
   aren't exported, so their subcomponent tabs would be empty. Options: one file per subcomponent
   (as ScrollArea does), or exporting them.
   > **Status:** Deferred.
7. **Defaults on subcomponents' inherited props** (Card.Panel, Navbar.Title, Disclosure.Trigger
   and similar) need the subcomponents to have their own props interfaces.
   > **Status:** Deferred.
8. **ListBox has no docgen.** `InternalListBox` is public API (exported as `UnmanagedListBox`),
   and docgen documents it instead of `ListBox`. Story argTypes stand in for now.
   > **Status:** Deferred.

### Possible component bugs (not changed)
9. **FileInput** puts `aria-*` props on its wrapper div rather than on the button.
   > **Status:** ✅ Fixed: aria props go on the button, which is also described by the message and error. Also found and fixed: FileInput and Select never rendered their error message.
10. **`DisclosurePanelProps` extends `ButtonProps`**, so the panel's type lists button props.
   > **Status:** Deferred (docs gap).
11. **Table** hard-codes `allowsExpandableRows: false`, so the documented row-nesting feature may
    not work; and `Table.Skeleton` can't take an `aria-label`, which logs a warning.
   > **Status:** ✅ Fixed: row nesting removed from the docs (setting it throws); Table.Skeleton accepts aria labels and defaults to "Loading".
12. **ProgressCircle** never renders `label`, so passing it makes `aria-labelledby` point at an
    element that doesn't exist.
   > **Status:** ✅ Done: `label` removed; name the circle with `aria-label` or `aria-labelledby`.
13. **Modal's MDX page** still says "the controls in this page are not working". This couldn't be
    checked without running Storybook interactively.
   > **Status:** Left alone for now.
