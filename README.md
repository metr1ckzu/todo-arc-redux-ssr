## Information
This project was bootstrapped with [ARc starter kit](https://github.com/diegohaz/arc)

## Setup

### 1. Get the source code

```sh
$ git clone https://github.com/metr1ckzu/todo-arc-redux-ssr.git
$ cd todo-arc-redux-ssr
```

### 2. Install dependencies

```sh
$ npm install
$ npm install json-server
```

### 3. Run the app

```sh
$ json-server --watch src/db.json --port 3001
$ npm run dev
```

It will start the development server with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000](http://localhost:3000) — Development server<br>
> [http://localhost:3001](http://localhost:3001) — Webpack assets server (for `redux-ssr` only)<br>

Now you can open [http://localhost:3000](http://localhost:3000) in browser and start messing around.

## What is it?

It's a small todo app bootstrapped in ARc - progressive React starter kit based on the Atomic Design methodology. More info here: https://arc.js.org

Features:
1) Adding and deleting todo
2) saving and fetching data with API
3) handling side effects with saga
4) Server Side Rendering

