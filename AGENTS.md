# AGENTS.md

## Project Overview

Daily Boost Calendar — a GitHub-style contribution/activity calendar SPA built with React + TypeScript.

## Tech Stack

- **Runtime:** React 18, TypeScript (strict mode), ESNext
- **Build:** Vite, pnpm
- **Styling:** Plain CSS (no modules, no preprocessors)
- **Date handling:** moment.js
- **Icons:** react-icons (FontAwesome via `react-icons/fa`)
- **Tooltips:** react-tooltip
- **Data persistence:** localStorage with manual JSON serialization

## Development Commands

```bash
pnpm dev            # Start Vite dev server
pnpm build          # Production build
pnpm test           # Run unit tests (vitest, single run)
pnpm test:watch     # Run unit tests in watch mode
pnpm coverage       # Unit test coverage (v8 provider)
pnpm e2e            # Run Playwright e2e tests
pnpm sb             # Start Storybook on port 6006
pnpm sb:build       # Build Storybook
```

## Code Style

- **Prettier:** No semicolons, single quotes (`{"semi": false, "singleQuote": true}`)
- **TypeScript:** Strict mode, ESNext modules, JSX react-jsx
- **ESLint:** Config not yet created — follow existing patterns if adding one

## Component Conventions

Every component lives in `src/components/<PascalCaseName>/` with this structure:

```
src/components/MyComponent/
├── index.tsx                 # Component implementation
├── MyComponent.stories.tsx   # Storybook story
└── myComponent.css           # Plain CSS (camelCase filename)
```

Rules:

- Components are **functional only**, typed as `React.FC<ComponentNameProps>`
- Props interface defined inline: `interface ComponentNameProps { ... }`
- **Named exports** for all components (exception: `App` uses default export)
- Import own CSS at top: `import './myComponent.css'`
- State via local `useState`/`useEffect` — no Redux, no Context API

## Model Conventions

Models live in `src/models/` as ES6 classes with **private `#field` syntax**.

- Manual JSON serialization via `get json(): string` (string concatenation, not `JSON.stringify`)
- Individual getters for each field
- One test file per model in `tests/unit/<ModelName>.test.ts`

## Testing Conventions

### Unit Tests (Vitest)

- Location: `tests/unit/`
- Framework: Vitest with `jsdom` environment, `globals: true`
- Pattern: **Arrange → Act → Assert**
- Naming: descriptive sentences `'get json, when X is created, returns Y'`
- Helper factory functions defined at top of test file
- One test file per model class

### E2E Tests (Playwright)

- Location: `tests/e2e/`
- Framework: Playwright
- Currently minimal — Chromium only

## Storybook Conventions

- Storybook v8 with React-Vite framework
- CSF (Component Story Format) with `Meta` and `StoryFn` types
- Story titles: `Example/<ComponentName>`
- Auto-docs enabled via `tags: ["autodocs"]`

## Git Conventions

- Write all in English
- Use **present tense infinitive** for commit messages: `Add form validation`
- Reference issues in commits: `Add validation #10`
- Close issues with: `Complete validation, closes #10`
- Follow TDD when possible: write test → implement → refactor
- Run all tests before submitting a PR
- Follow the Conventional Commits

## File Naming

| Item            | Convention                                                |
| --------------- | --------------------------------------------------------- |
| Component dirs  | PascalCase (`MyComponent/`)                               |
| Component files | `index.tsx`, `MyComponent.stories.tsx`, `myComponent.css` |
| Model files     | PascalCase (`CalendarItem.ts`)                            |
| Utility files   | camelCase (`encrypt.ts`, `DatesProvider.ts`)              |
| Test files      | `<Name>.test.ts`                                          |
| CSS files       | camelCase starting lowercase (`myComponent.css`)          |

## Utils

- `src/utils/DatesProvider.ts` — date calculation class using moment.js
- `src/utils/encrypt.ts` — password encrypt/decrypt with crypto-js (named exports, arrow functions)

## Important Notes

- No CSS modules — plain global CSS with class names
- No routing library — conditional rendering with nested ternaries
- Data models use manual JSON string building (not `JSON.stringify`)
- `types.ts` is minimal and not exported — keep shared types here if adding more
