# Contributing to Tesseract

Thank you for your interest in contributing to **Tesseract** — a clean, type-safe, and mildly opinionated task manager built with **React**, **TypeScript**, **Prisma**, and **TanStack**.

We welcome contributions from the community, whether you're fixing a bug, improving documentation, adding new features, or helping with tests. This guide outlines our expectations, standards, and workflows to ensure a smooth and collaborative development experience.

> ✅ **All contributors are expected to adhere to our [Code of Conduct](https://github.com/forgebyd/todo-app-tanstack/blob/main/.github/CODE_OF_CONDUCT.md).**

---

## 📋 Table of Contents

- [Contributing to Tesseract](#contributing-to-tesseract)
  - [📋 Table of Contents](#-table-of-contents)
  - [🤝 Code of Conduct](#-code-of-conduct)
  - [🛠️ How Can I Contribute?](#️-how-can-i-contribute)
    - [🔍 Reporting Bugs](#-reporting-bugs)
    - [💡 Suggesting Enhancements](#-suggesting-enhancements)
    - [📥 Pull Requests (PRs)](#-pull-requests-prs)
  - [⚙️ Development Setup](#️-development-setup)
    - [Prerequisites](#prerequisites)
    - [Local Project Setup](#local-project-setup)
    - [Database Setup](#database-setup)
    - [Run the Project](#run-the-project)
  - [🧼 Coding Standards](#-coding-standards)
    - [TypeScript and React](#typescript-and-react)
    - [Styling](#styling)
    - [Testing](#testing)
    - [Commit Conventions](#commit-conventions)
  - [🌿 Branching \& PR Workflow](#-branching--pr-workflow)
  - [👀 Code Review Guidelines](#-code-review-guidelines)
  - [🙏 Attribution](#-attribution)

---

## 🤝 Code of Conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to fostering a welcoming, respectful, and inclusive environment.

---

## 🛠️ How Can I Contribute?

### 🔍 Reporting Bugs

- **Before filing**, search [existing issues](https://github.com/your-org/tesseract/issues) to avoid duplicates.
- Use the **[Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)**.
- Include:
  - Clear, descriptive title
  - Steps to reproduce
  - Expected vs. actual behavior
  - Environment (OS, browser, Node/npm versions, app version)
  - Screenshots or logs (if applicable)

### 💡 Suggesting Enhancements

- Use the **[Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)**.
- Clearly articulate:
  - The problem or opportunity
  - Proposed solution(s)
  - Trade-offs & alternatives considered
  - Impact on UX/performance/maintainability

> [!WARNING]
> Major features should be discussed via issue _before_ implementation to align with roadmap.

### 📥 Pull Requests (PRs)

- PRs should reference an issue (e.g., `Closes #123`).
- Keep PRs **small, focused, and self-contained**.
- Include tests and updated docs where applicable.
- Ensure all CI checks pass before requesting review.

---

## ⚙️ Development Setup

### Prerequisites

- Node.js `v24.x` (latest)
- Pnpm `v10`
- PostgreSQL `v15`/`v18` (latest)
- Git

### Local Project Setup

1. Clone this repository.

```bash
# clone via https
git clone https://github.com/forgebyd/todo-app-tanstack.git

# or if you prefer to clone via ssh
git clone git@github.com:forgebyd/todo-app-tanstack.git


```

2. Navigate to root directory of the project and install the required dependencies.

```bash
cd todo-app-tanstack
pnpm install --frozen-lockfile
```

3. Setup the environment variables.

```bash
cp .env.example .env
```

After copying, you can replace the database credentials according to your setup.

```ini
# place your desired database credentials
DB_NAME=todo
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=password
```

### Database Setup

1. Setup the database (with **Docker**)

If you have **Docker** installed on your local machine, first thing you need to do is to make the database up and running.

```bash
pnpm docker.up.db
```

2. Setup the database (setup **Prisma**)

   2.1 Migrate the database

   ```bash
   pnpm db.migrate
   ```

   2.2 Seed the database

   ```bash
   pnpm db.seed
   ```

   2.3 Generate the **Prisma**'s client

   ```bash
   pnpm db.generate
   ```

> [!TIP]
> We recommend you to have **Docker** to be installed on your local machine just so the database setup can be easy to do by just running one command.

### Run the Project

```bash
# running the dev server
pnpm vite.dev

# or if you prefer to running the preview server
pnpm vite.preview
```

---

## 🧼 Coding Standards

### TypeScript and React

- ✅ Strict **TypeScript**: `strict: true`, no `any`, exhaustive type checking.
- ✅ Functional Components & Hooks only — no class components.
- ✅ Use **TanStack Query** for server state.
- ✅ Use **TanStack Router** for server routing.
- ✅ Favor composition over inheritance; extract reusable logic into custom hooks/utils.
- ✅ Component files use `.tsx`; utilities use `.ts`.

### Styling

- CSS-in-JS via **TailwindCSS**
- Styled Component via **ShadcnUI**

### Testing

| **Type**      | **Tool**          | **Coverage Goal** | **Command**                        |
| ------------- | ----------------- | ----------------- | ---------------------------------- |
| Linting       | ESLint + Prettier | Zero errors       | pnpm file.lint && pnpm file.format |
| Type-checking | TypeScript        | Zero errors       | pnpm typecheck                     |

> New features **must include tests**.

### Commit Conventions

We encourage the use of [**Conventional Commits**](https://conventionalcommits.org).

```txt
<type>(<scope>): <short-summary> <emoji=from-gitmoji>

<detailed description>

Signed-off-by: <your-name> <your-email>
```

Examples:

- `feat(ui): add dark mode toggle :sparkles:`
- `fix(api): resolve race condition in todo sync :bug:`
- `chore(deps): update prisma to v5.10.0 :arrow_up:`
- `docs(readme): clarify local setup steps :memo:`

---

## 🌿 Branching & PR Workflow

- Main branch: `main` (protected — no direct pushes and pull requests)
- Development branch: `development` (all PRs pointing here first)
- Branch naming:
  - `feat/<short-desc>` (e.g., `feat/due-date-picker`)
  - `fix/<issue-id>-<short-desc>` (e.g., `fix/42-todo-dedupe`)
  - `chore/<short-desc>` (e.g., `chore/update-deps`)
- PRs must:
  - Be up-to-date with `development`.
  - Pass all CI checks (lint, typecheck, build).
  - Include meaningful description and screenshots (for UI changes).
  - Have at least one approved review from a maintainer.

> 🔄 We use squash-and-merge to keep history clean.

---

## 👀 Code Review Guidelines

Reviewers should evaluate for:

- ✅ Correctness & robustness
- ✅ Performance (e.g., unnecessary re-renders, over-fetching)
- ✅ Security (XSS, injection, authz leaks)
- ✅ Test coverage & quality
- ✅ Consistency with architecture & patterns
- ✅ Accessibility & i18n readiness
- ✅ Documentation impact

Authors should:

- Respond to feedback promptly
- Not take feedback personally — we critique code, not people 🙏

---

## 🙏 Attribution

Contributors will be recognized in GitHub [Contributors Graph](https://github.com/forgebyd/todo-app-tanstack/graphs/contributors).
Thank you for helping make **Tesseract** better for everyone!

— The **Tesseract** Maintainers
