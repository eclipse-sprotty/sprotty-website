---
title: 'Getting Started'
---

Welcome to your first Sprotty diagram!

In this guided tutorial, we will build a simple **client-only Sprotty application** from scratch. By the end, you will have an interactive diagram running in your browser!

You can follow this tutorial in one of two ways:

* [**Fast-forward with a scaffolded project**](#fast-forwarding-with-yeoman) - Jump straight in with a pre-configured setup.
* [**Build it step by step**](#step-by-step-installation) - Start from an empty folder and write the code yourself.
<!-- TODO: change the link above -->

Both paths lead to the same result, so pick the one that suits your style!

## Fast-forwarding With Yeoman

Sprotty provides a quick way to scaffold a new project using the [Yeoman](https://yeoman.io/) generator.

1. install Yeoman and the Sprotty generator:

    ```bash
    npm install -g yo generator-sprotty
    
    ```

2. Run the generator:

    ```bash
    yo sprotty
    ```

3. Answer a few prompts and let the magic happen. For this tutorial, we will assume that you selected the default options.

That's it! Your Sprotty project is now ready to go. You can directly go to the [next section]({{< ref "/docs/getting-started" >}})
<!-- TODO: Change link above -->

## Step-by-Step Installation

If you prefer to build your Sprotty project from scratch, follow these steps to set up your project manually.

1. [Create a new package](#create-a-new-package)
2. [Install dependencies](#install-dependencies)
3. [Create a static html page](#create-a-static-html-page)
4. [Create a build script](#create-a-build-script)

### Create a New Package

First, navigate to your desired project folder (we'll use `hello-world` as an example) and initialize a new npm package:

```bash
npm init -y
```

This will generate a package.json file at the root of your project, which initially looks like this:

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

You can simplify it by replacing its content with:

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Since we are using TypeScript, we can initialize the configuration with:

```bash
npx tsc --init
```

To keep things tidy, let’s create two directories at the root of the package:

* src → This is where your TypeScript code will go.
* static → This will hold your HTML, CSS, and transpiled JavaScript files.

After this step, your project structure should look like this:

```bash
.
├── package.json
├── src
└── static
└── tsconfig.json
```

### Install Dependencies

Now, let's install the following dependencies and devDependencies:

```bash
npm install sprotty inversify reflect-metadata &&\
npm install typescript esbuild --save-dev
```

### Create a Static HTML Page

This will be the entry point of your Sprotty application. Place it in the `static` directory as `index.html`:

```html
<!DOCTYPE html>
<head>
  <script src="index.js" type="text/javascript"></script>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div id="sprotty-diagram"></div>
</body>
```

At this point, your project should look like this:

```bash
├── package.json
├── src
├── static
│   └── index.html
└── tsconfig.json
```

### Create a Build Script

To bundle your application and make it available to `index.html`, update your `package.json` file with the following build script:

```json
 "scripts": {
      "build": "esbuild ./src/index.ts --bundle --sourcemap --outfile=./static/index.js"
    }
```

That's it! You're now ready to start working on your Sprotty project.

Next, let's start defining the [data model]({{< ref "/docs/getting-started" >}}) for your diagram.
<!-- TODO: change link above -->
