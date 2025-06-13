---
title: 'Getting Started'
---

**Welcome to the first step of your Sprotty journey!** In this section, we'll set up everything you need to start building interactive diagrams.

## Choose Your Adventure

There are two ways to begin your Sprotty project:

{{< tabs "setup-method" >}}
{{< tab "Fast Track (Recommended)" >}}

## 🚀 Fast Track with Yeoman

If you want to jump straight into learning Sprotty concepts without manual setup, our Yeoman generator has you covered!

### 1. Install the Generator

First, install Yeoman and the Sprotty generator:

```bash
npm install -g yo generator-sprotty
```

### 2. Generate Your Project

Run the generator and follow the prompts:

```bash
yo sprotty
```

The generator will ask you a few questions about your project. For this tutorial, you can accept the default options by pressing Enter.

### 3. Explore Your New Project

That's it! Your Sprotty project is now ready to go. The generator has created all the necessary files and installed all dependencies.

**What's next?** Continue to the [Data Model]({{< ref "/docs/learn/data-model" >}}) section to understand the components of your generated project.

{{< /tab >}}
{{< tab "Step-by-Step" >}}

## 🛠️ Step-by-Step Setup

If you prefer to understand every piece of your project from the ground up, follow these steps to set up your project manually.

### 1. Create a New Package

First, create a new directory for your project and initialize a new npm package:

```bash
mkdir hello-world
cd hello-world
npm init -y
```

This will generate a `package.json` file at the root of your project. You can simplify it by replacing its content with:

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "A simple Sprotty diagram",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### 2. Set Up TypeScript

Since we're using TypeScript, initialize the configuration:

```bash
npx tsc --init
```

### 3. Create Project Structure

Create the following directory structure:

```bash
hello-world/
├── src/         # TypeScript source files
└── static/      # HTML, CSS, and compiled JS
```

```bash
mkdir src static
```

### 4. Install Dependencies

> 💡 **Key Insight**: Sprotty is currently not using the latest version of inversify so it is important to add the version that is also used by Sprotty.

Install the required dependencies:

```bash
# Core dependencies
npm install sprotty inversify@^6.1.3 reflect-metadata

# Development dependencies
npm install typescript esbuild --save-dev
```

### 5. Create a Static HTML Page

Create an HTML file in the `static` directory to host your diagram:

```bash
touch static/index.html
```

Add the following content to `static/index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Sprotty Diagram</title>
  <script src="index.js" type="text/javascript"></script>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div id="sprotty-diagram"></div>
</body>
</html>
```

### 6. Set Up the Build Script

Add a build script to your `package.json` file:

```json
"scripts": {
  "build": "esbuild ./src/index.ts --bundle --sourcemap --outfile=./static/index.js"
}
```

Your complete `package.json` should now look like this:

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "A simple Sprotty diagram",
  "scripts": {
    "build": "esbuild ./src/index.ts --bundle --sourcemap --outfile=./static/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "inversify": "^6.1.3",
    "reflect-metadata": "^0.2.2",
    "sprotty": "^1.4.0"
  },
  "devDependencies": {
    "esbuild": "^0.25.3",
    "typescript": "^5.8.3"
  }
}
```

### 7. Verify Your Setup

Your project structure should now look like this:

```bash
hello-world/
├── node_modules/
├── package.json
├── package-lock.json
├── src/
├── static/
│   └── index.html
└── tsconfig.json
```

**Congratulations!** Your project is now set up and ready for development.

{{< /tab >}}
{{< /tabs >}}

## What's Next?

Now that your project is set up, it's time to define the data model for your diagram. In the next section, you'll learn how to create a model that represents tasks and their dependencies.

**Continue to [Defining Your Data Model]({{< ref "/docs/learn/data-model" >}})**
