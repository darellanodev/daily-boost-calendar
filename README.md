# Daily Boost Calendar

An Easy calendar like the github calendar for learning pourposes. _(THIS APPLICATION IS IN AN EARLY STAGE OF DEVELOPMENT)_

## Github repository

- <https://github.com/darellanodev/daily-boost-calendar>

## Requeriments

Node, pnpm (recommended instead of npm).

## Installation

Run the command `pnpm install`

## Running the application in development mode

- Execute the script `./run.sh`

## Unit tests

- Run the script `./run_tests.sh`

## E2E tests

- Run the applicacion in development mode
- Then, after the application is running, execute `./run_e2e.sh`

## Running the StoryBook environment

- Execute the script `./run_sb.sh`

## Build

- Execute the script `./run_build.sh`
- Manual corrections:
  - After completing the build process, you must manually remove the first slash from each URL in the `index.html` file.
  - For the moment, Vite is not copying the file src/assets/img/logo.svg

## How to contribute

Check out the contribution guidelines [here](./CONTRIBUTING.md).
