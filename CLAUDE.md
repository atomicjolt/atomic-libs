# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build and Testing
```bash
# Install dependencies
npm install

# Build all packages
npm run build --workspaces

# Test all packages (requires build first)
npm run test --workspaces

# Test single package
npm run test --workspace @atomicjolt/atomic-elements

# Watch tests for a specific package
npm run test:watch --workspace @atomicjolt/atomic-elements

# Update test snapshots
npm run test:update --workspace @atomicjolt/atomic-elements
```

### Development Environment
```bash
# Run the interactive playground
npm run playground

# Start Storybook development server
npm run storybook:dev

# Start documentation development server
npm run docs:start
```

### Version Management (Changesets)
```bash
# Create a new changeset for package changes
npx changeset

# Check changeset status
npx changeset status

# Version packages based on changesets
npx changeset version

# Publish new package versions
npx changeset publish
```

### Component and Package Scaffolding
```bash
# Create new component in atomic-elements
npm run scaffold:component

# Create new package
npm run scaffold:package
```

## Repository Architecture

This is a monorepo containing multiple NPM packages maintained by Atomic Jolt, built with:
- **Workspaces**: npm workspaces for monorepo management
- **Build tools**: Rollup (packages), Vite (dev/playground), TypeScript
- **Testing**: Vitest with jsdom environment
- **Documentation**: Storybook + Docusaurus
- **Components**: React with styled-components, React Aria, React Stately

### Package Structure

**Main packages** (all in `packages/` directory):
- `atomic-elements` - Core React component library with design system
- `atomic-fuel` - Redux utilities and React components for LTI applications
- `hooks` - Reusable React hooks
- `forms` - Form components and utilities
- `lti-client` - LTI client-side utilities and components
- `lti-server` - LTI server-side utilities and validation
- `lti-components` - LTI-specific React components
- `lti-types` - TypeScript types for LTI
- `canvas-client` - Canvas API client utilities

### Key Directories

- `packages/atomic-elements/src/components/` - All UI components organized by category (Buttons, Fields, Layout, etc.)
- `packages/atomic-elements/src/styles/` - Design system tokens, themes, and styling utilities
- `packages/atomic-elements/src/hooks/` - Component-specific hooks
- `.storybook/` - Storybook configuration and utilities
- `playground/` - Interactive development environment
- `templates/` - Scaffolding templates for new components and packages
- `docs/` - Documentation source files (Docusaurus)

### Component Architecture

Components follow a consistent structure:
- `ComponentName.component.tsx` - Main component implementation
- `ComponentName.styles.ts` - Styled-components styling
- `ComponentName.context.ts` - React context (if needed)
- `ComponentName.stories.tsx` - Storybook stories
- `ComponentName.spec.tsx` - Vitest tests
- `ComponentName.types.ts` - TypeScript types (if complex)
- `index.tsx` - Public exports

### Build System

- Each package has its own `tsconfig.build.json` and build configuration
- `atomic-elements` uses Rollup to generate both ESM and CJS outputs
- Path aliases configured in `vite.config.ts` for easier imports (@components, @hooks, @styles, @utils)
- TypeScript with strict mode enabled
- Components built with React 18/19 compatibility

### Testing Strategy

- Vitest for all testing with jsdom environment
- React Testing Library for component testing
- Each package has individual test configuration
- Shared test setup in `vitest.setup.ts` files
- Build packages before running tests to ensure proper imports
