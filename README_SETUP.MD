# Commands

- [Makefile](https://makefiletutorial.com/#phony): `make install`, `make dev`, `make vet`, `make build`, `make clean`
- `bun run {script_name}`: `package.json` > `scripts`

# Git

- install: `bun add -d husky lint-staged @commitlint/cli`
- [gitignore](https://git-scm.com/docs/gitignore) `.gitignore`
- [husky](https://typicode.github.io/husky/get-started.html#husky-init-recommended): `npx husky init`
- [git hooks](https://git-scm.com/docs/githooks): `.husky/commit-msg`, `.husky/pre-commit`
- [npm scripts](https://docs.npmjs.com/cli/v10/using-npm/scripts#prepare-and-prepublish): `package.json` > `scripts` > `"prepare": "husky"`
- [@commitlint/cli](https://commitlint.js.org/guides/getting-started.html): `.commitlintrc.json`
- [lint-staged](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration): `.lintstagedrc.json`

# Node

- [NodeJS version](https://nodejs.org/en/about/previous-releases): `.nvmrc`, `package.json` > `engines.nodes`
- [package manager](https://bun.sh/): `package.json` > `"packageManager": "bun@x.y.z"`

# TypeScript

- [NextJS built-in support for TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript): `tsconfig.json`

# Linting

- install: `bun add -d eslint-config-next`
- [NextJS built-in support for TypeScript](https://nextjs.org/docs/app/api-reference/config/eslint): `eslint.config.mjs`

# Formatting

- install `bun add -d prettier`
- [workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings): `.vscode/settings.json`, `.vscode/extensions.json`
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin
- [prettier](https://prettier.io/docs/en/configuration.html): `.prettierrc.json`, `.prettierignore`
