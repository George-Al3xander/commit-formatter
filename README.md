# Commit Formatter 

A web app to format commit messages according to the **50/72 rule** for improved readability and adherence to conventional commit standards. This tool helps users quickly create well-structured commit messages, with an optional conventional commit type, title, and description.

## Features

- **Commit Type Selection**: Choose a conventional commit type (e.g., feat, build, docs) or leave it blank if not applicable.
- **Title Input**: Enter a concise commit title, automatically validated to meet the character limit based on whether a type is selected.
- **Description Input**: Add a detailed description without worrying about length—formatted to 72 characters per line automatically.
- **Copy to Clipboard**: Easily copy the formatted commit message with one click.

## Instructions

1. **Select Commit Type (Optional)**  
   Choose a type such as `feat`, `build`, or `docs` if relevant. If "none" is selected, only the title will be used in formatting.

2. **Enter Title**
    - **With Commit Type**: Keep the title within 50 characters, including the type, a colon, and a space (e.g., `docs: Update README`).
    - **Without Commit Type**: Keep the title within 50 characters.

3. **Enter Description (Optional)**  
   Add a description of any length to explain your changes. The app will format it to 72 characters per line automatically.

4. **Copy Formatted Commit**  
   Once complete, click the button at the bottom to copy the formatted commit message to your clipboard.

## Tech Stack

- **React** - Core library for building the user interface
- **MUI** - Material UI components for styling and layout
- **Jotai** - For state management
- **Vite** - Development environment for fast builds and optimized production

### Development Tools
- **ESLint & Prettier** - Code quality and formatting tools
- **Jest** - For unit and integration testing
- **TypeScript** - For static typing

