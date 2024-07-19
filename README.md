# TypeScript CLI Starter

A boilerplate repository for creating Node.js based TypeScript CLI tools with essential dependencies and configurations pre-set.

## Features

- [TypeScript](https://www.typescriptlang.org/) for type-safe code
- [Commander](https://github.com/tj/commander.js/) for building CLI interfaces
- [Execa](https://github.com/sindresorhus/execa) for process execution
- [Enquirer](https://github.com/enquirer/enquirer) for interactive CLI prompts
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- Git commit hooks using [Husky](https://typicode.github.io/husky/)
- Testing setup using Jest and [ts-jest](https://kulshekhar.github.io/ts-jest/)

## Prerequisites

- Node.js (version X.X.X or higher)
- npm (version X.X.X or higher)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/typescript-cli-starter.git
   cd typescript-cli-starter
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the project:
   ```
   npm run build
   ```

4. Run the CLI:
   ```
   npm start
   ```

## Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm run start`: Run the compiled CLI tool
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier
- `npm test`: Run tests (please specify the command if different)

## Project Structure

```
typescript-cli-starter/
├── src/
│   ├── index.ts
│   └── ...
├── tests/
│   └── ...
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
