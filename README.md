# Tesseract

[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)]()

> _A to-do application that almost understands the fourth dimension of your to-do list._

**Tesseract** — a clean, type-safe, and mildly opinionated task manager built with **React**, **TypeScript**, **Prisma**, and **TanStack**. It won’t fold spacetime—but it will help you fold laundry, reply to that email, and finally organize your “someday” projects.

No AI. No blockchain. Just tasks, done right—with a little ✨developer joy✨ sprinkled on top.

> [!NOTE]
> This project is currently undergoing active development. May or may not achieve sentience. Use at your own (very low) risk.

## ⬇️ Installation Guide

Follow these steps to get your local copy of the project up and running.

### Prerequisites

Before going any further, ensure you have the correct software installed on your machine:

- The project requires a modern version of node (LTS recommended) to be installed. Download it from the official [Node.js](https://nodejs.org/en) website or we encourage you to download it from [Volta](https://volta.sh) instead:

```bash
# or using volta
volta install node@latest
```

- We use pnpm for efficient dependency management. You can install it globally via npm once node is set up:

```bash
npm install -g pnpm

# or using volta
volta install pnpm@latest
```

### Setup Project

1. **Clone the repository** into your local machine:

```bash
# clone via https
git clone https://github.com/forgebyd/todo-app-tanstack.git

# or if you prefer to clone via ssh
git clone git@github.com:forgebyd/todo-app-tanstack.git
```

2. **Install the dependencies** using `pnpm`. Navigate to the root directory of the cloned project and run:

```bash
cd todo-app-tanstack
pnpm install --frozen-lockfile
```

This command will reads the `package.json` file and installs all required dependencies.

### Setup Environment Variables

The application requires specific environment variables, primarily for the database connection.

1. **Create an `.env` file** in your root directory of your project folder by copying the given `.env.example` file:

2. **Modify the `.env` file** and provide your database credentials:

```ini
# place your desired database credentials
DB_NAME=todo
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=password
```

> [!CAUTION]
> Please note that you can also changes the other environment variables value, but change it respectfully. You can leave the rest environment variables to be its default value and you're good to go.

### Setup Database

For this specific step, if you have **Docker** has been installed on your machine, you can run the command below to make the configured database up and running (or you can refer to the [Docker installation guide](https://docs.docker.com/engine/install/) to install **Docker**):

```bash
pnpm docker.up.db
```

> [!IMPORTANT]
> Please make sure you don't have any `postgresql` install running on the background to make sure it doesn't conflict.

After configuring your `.env` file, you're good to go to the prisma setup:

1. **Run migration** to apply the `prisma` schema to the database:

```bash
pnpm db.migrate
```

2. **Generate the `prisma` client** to ensure type-safety (this usually happens automatically during `pnpm install` or `pnpm db.migrate`, but it's good to be explicit):

```bash
pnpm db.generate
```

## 🚀 Running the Project

Once installation is complete, you can run the project using the scripts defined in the `package.json` file. Replace the command below with the appropriate script for your project (e.g., `build`, `dev`, `preview`):

```bash
# example of starting the development server
pnpm vite.dev

# example of starting the preview server
pnpm vite.preview
```

The application should now be accessible in your browser at: [`http://localhost:3000`](http://localhost:3000) (or whichever port you use).

## 🤝 Contributing

PRs welcome! 🙌
Found a bug? Have a feature idea? [Open an issue](https://github.com/forgebyd/todo-app-tanstack/issues) or [Send a pull request](https://github.com/forgebyd/todo-app-tanstack/pulls).
Please keep it kind, clear, and tested.
