# Graph Report - daily-boost-calendar  (2026-10-09)

## Corpus Check
- Corpus is ~10,764 words - fits in a single context window. You may not need a graph.

## Summary
- 372 nodes · 595 edges · 35 communities (19 shown, 16 thin omitted)
- Extraction: 93% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- React Components & Stories
- Package & Test Dependencies
- Calendar Page Logic
- Babel ESLint Prettier Toolchain
- Data Models & Persistence
- Project Conventions & Docs
- Calendar Component Stories
- Menu Component & Tooltip
- TypeScript Config
- Signup & Test User Flow
- NPM Scripts
- Logo Design Assets
- Runtime Dependencies
- Node TypeScript Config
- Education Icons
- README App Screenshots
- Brand Identity Assets
- HTML Entry Point
- OpenCode Config
- Streak Fire Icon
- Storybook Preview Config
- Date Utility
- README Screenshot 1
- Chart & Flag Icons
- Run Script
- Build Script
- E2E Script
- Storybook Script
- Test Script
- Shared Types
- UI Prototype
- App Logo

## God Nodes (most connected - your core abstractions)
1. `react` - 29 edges
2. `CalendarItem` - 23 edges
3. `ActiveDays` - 19 edges
4. `compilerOptions` - 16 edges
5. `@storybook/react` - 15 edges
6. `Signup()` - 15 edges
7. `Header()` - 14 edges
8. `UsersManager` - 14 edges
9. `Page()` - 13 edges
10. `User` - 12 edges

## Surprising Connections (you probably didn't know these)
- `getActiveDaysForCalendar1()` --calls--> `ActiveDays`  [EXTRACTED]
  tests/unit/User.test.ts → src/models/ActiveDays.ts
- `getActiveDaysForCalendar2()` --calls--> `ActiveDays`  [EXTRACTED]
  tests/unit/User.test.ts → src/models/ActiveDays.ts
- `getNewUser()` --calls--> `User`  [EXTRACTED]
  tests/unit/UsersManager.test.ts → src/models/User.ts
- `Test Story (Introduction.mdx)` --implements--> `Storybook Conventions`  [INFERRED]
  src/Introduction.mdx → AGENTS.md
- `Storybook window.global Polyfill` --conceptually_related_to--> `Storybook Conventions`  [INFERRED]
  .storybook/preview-head.html → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Daily Boost Calendar Technology Stack** — agents_md_daily_boost_calendar, agents_md_react_typescript, agents_md_vite_build, agents_md_moment_js, readme_md_pnpm_package_manager [EXTRACTED 1.00]
- **Development, Testing and Contribution Workflow** — agents_md_testing_conventions, agents_md_git_conventions, contributing_md_tdd_workflow, readme_md_shell_scripts, readme_md_e2e_playwright_setup [INFERRED 0.85]
- **Storybook Environment Setup** — agents_md_storybook_conventions, storybook_preview_head_global_polyfill, src_introduction_mdx_test_story, src_introduction_mdx_meta_addon_docs [INFERRED 0.85]
- **Logo brand identity composition** — _design_logo_logo_boostlogo, _design_logo_logo_gradient_palette, _design_logo_logo_wordmark_typography, _design_logo_logo_red_ellipse_motif [EXTRACTED 1.00]
- **** — readme, img_github_readme_screenshot2, daily_boost_calendar_app [EXTRACTED 1.00]
- **Calendar icon set category markers** — public_img_calendar_icons_3_icon, public_img_calendar_icons_4_icon [INFERRED 0.85]

## Communities (35 total, 16 thin omitted)

### Community 0 - "React Components & Stories"
Cohesion: 0.07
Nodes (34): react, react-icons, Template(), AlertInsecureData(), Large, Primary, Secondary, Small (+26 more)

### Community 1 - "Package & Test Dependencies"
Cohesion: 0.05
Nodes (33): @babel/core, @babel/plugin-transform-modules-commonjs, @babel/preset-env, @babel/preset-typescript, @chromatic-com/storybook, crypto-js, eslint, eslint-config-prettier (+25 more)

### Community 2 - "Calendar Page Logic"
Cohesion: 0.09
Nodes (18): moment, @storybook/test, getActiveDaysFromCalendar(), getDates(), getDayItems(), getTotalContributions(), Page(), PageProps (+10 more)

### Community 3 - "Babel ESLint Prettier Toolchain"
Cohesion: 0.06
Nodes (35): devDependencies, @babel/core, @babel/plugin-transform-modules-commonjs, @babel/preset-env, @babel/preset-typescript, @chromatic-com/storybook, eslint, eslint-config-prettier (+27 more)

### Community 4 - "Data Models & Persistence"
Cohesion: 0.17
Nodes (7): vitest, ActiveDays, CalendarItem, User, getActiveDaysForCalendar1(), getActiveDaysForCalendar2(), getNewUser()

### Community 5 - "Project Conventions & Docs"
Cohesion: 0.09
Nodes (15): Daily Boost Calendar, encrypt Password Utility, localStorage Data Persistence, React + TypeScript Tech Stack, Vite Build Tool, Contribution Guidelines, Daily Boost Calendar README, Playwright Browser Install Step (+7 more)

### Community 6 - "Calendar Component Stories"
Cohesion: 0.14
Nodes (12): @storybook/react, Incomplete, Calendar(), CalendarProps, Template(), CalendarNav(), CalendarNavProps, Completed (+4 more)

### Community 7 - "Menu Component & Tooltip"
Cohesion: 0.14
Nodes (11): react-tooltip, Menu(), MenuProps, User, LoggedIn, LoggedOut, Template(), MiniCalendar() (+3 more)

### Community 8 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib (+10 more)

### Community 9 - "Signup & Test User Flow"
Cohesion: 0.19
Nodes (7): App(), Signup(), LoggedIn, LoggedOut, Template(), TestUserCreator, UsersManager

### Community 10 - "NPM Scripts"
Cohesion: 0.18
Nodes (11): scripts, all:build, build, coverage, dev, e2e, preview, sb (+3 more)

### Community 11 - "Logo Design Assets"
Cohesion: 0.29
Nodes (7): Daily Boost Calendar Logo, Possible Mascot/Face Reading of Ellipses, Export Target src/assets/img/logo.svg, Warm Dark-Red to Orange Gradient Palette (#2b0000 to #d45500), Inkscape Vector Authoring, Paired Red Ellipse Motif, Berlin Sans FB Demi Wordmark Letterforms

### Community 12 - "Runtime Dependencies"
Cohesion: 0.29
Nodes (7): dependencies, crypto-js, moment, react, react-dom, react-icons, react-tooltip

### Community 13 - "Node TypeScript Config"
Cohesion: 0.29
Nodes (6): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, include

### Community 14 - "Education Icons"
Cohesion: 0.50
Nodes (4): Chemistry Lab Education Theme, Person Activity / Study Theme, Chemistry Lab Education Calendar Icon, Seated Person Illustration Calendar Icon

### Community 15 - "README App Screenshots"
Cohesion: 0.67
Nodes (4): Daily Boost Calendar Application UI, GitHub-style Contribution Calendar View, Screenshot 2 of Daily Boost Calendar, README.md Project Documentation

### Community 16 - "Brand Identity Assets"
Cohesion: 0.67
Nodes (3): Daily Boost Calendar Brand Identity, Daily Boost Calendar Project Logo, _design/logo Asset Directory

### Community 17 - "HTML Entry Point"
Cohesion: 1.00
Nodes (3): index.html Vite Entry Point, src/main.tsx Module Script, Root Mount div #root

### Community 19 - "Streak Fire Icon"
Cohesion: 0.67
Nodes (3): Fire Icon, Flame Symbol, Streak Indicator

## Ambiguous Edges - Review These
- `Paired Red Ellipse Motif` → `Possible Mascot/Face Reading of Ellipses`  [AMBIGUOUS]
  _design/logo/logo.svg · relation: conceptually_related_to
- `Seated Person Illustration Calendar Icon` → `Person Activity / Study Theme`  [AMBIGUOUS]
  public/img/calendar_icons/4.svg · relation: conceptually_related_to

## Knowledge Gaps
- **57 isolated node(s):** `@babel/core`, `@babel/plugin-transform-modules-commonjs`, `@babel/preset-env`, `@babel/preset-typescript`, `@chromatic-com/storybook` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 221 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `React Components & Stories` to `Package & Test Dependencies`, `Calendar Page Logic`, `Calendar Component Stories`, `Menu Component & Tooltip`, `Signup & Test User Flow`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **What connects `@babel/core`, `@babel/plugin-transform-modules-commonjs`, `@babel/preset-env` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `React Components & Stories` be split into smaller, more focused modules?**
  _Cohesion score 0.07268170426065163 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Babel ESLint Prettier Toolchain` to `Package & Test Dependencies`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Should `Package & Test Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Paired Red Ellipse Motif` and `Possible Mascot/Face Reading of Ellipses`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Seated Person Illustration Calendar Icon` and `Person Activity / Study Theme`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._