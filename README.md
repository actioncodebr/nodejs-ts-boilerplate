# Idea

- A STRONGLY opinionated nodejs + Typescript template boilerplate that KINDA
  uses MVC

## 🔨 Stack:

- **[Nodejs](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[Socket.io](https://github.com/socketio/socket.io)**
- **[Winston](https://github.com/winstonjs/winston)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Jest](https://jestjs.io/)**
- **[Dotenv](https://github.com/motdotla/dotenv)**
- **[Eslint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**

# Folder Structure

- Models
- Views (for data presentation)
- Controllers

## 🔎 Commands

- `dev`: runs app in `localhost:$API_SERVER_PORT`
- `build`: builds project to run in production
- `start`: starts the app in PRODUCTION mode
- `lint`: checks for linting errors/warnings
- `test`: runs tests
- `test:watch`: runs tests in watch mode

### 🎲 Running the App

```bash
$ npm i

$ npm start:dev

```

### Tests

```bash

$ npm run test

# or

$ npm run test:watch #to keep listening to test changes

```

### 📁 .ENV

- Copy the file `.env.example` and rename it to `.env`

```bash
# API URLS
API_SERVER_PORT=

```
