# Commit Formatter Web App

A simple web application designed to help users format commit messages according to the 50/72 rule, with inputs for the commit title, description, and an optional conventional commit type (e.g., feat, fix, docs). The app automatically formats the description to 72 characters per line, making it easy to follow best practices for commit messages.

## Features

- **50/72 Formatting**: Ensures the title and description follow conventional character limits.
- **Optional Commit Type**: Automatically adjusts title length based on the selected commit type (e.g., "feat: ").
- **Form Validation**: Utilizes `react-hook-form` with `zod` for streamlined, type-safe validation.
- **Copy to Clipboard**: Copy formatted commit messages directly to the clipboard.

## Tech Stack

- **React** - Core library for building the user interface
- **React Hook Form** - For form handling and validation
- **Zod** - Schema validation for form data
- **MUI (Material UI)** - For styling and layout components
- **Vite** - Development environment for fast builds and optimized production

### Development Tools

- **ESLint & Prettier** - For code quality and formatting
- **Jest & React Testing Library** - Unit and integration testing
- **TypeScript** - For static typing