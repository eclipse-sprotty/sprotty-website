---
title: 'Putting It Together'
---

**The moment of truth has arrived!** In this final section, we'll connect all the pieces we've built and bring our interactive diagram to life.

## Creating the Application Entry Point

First, we need to create an entry point that initializes our diagram when the page loads. This file will:

1. Set up the dependency injection container
2. Load our model data
3. Render the diagram in the browser

Create a new file called `index.ts` in your `src` directory:

```typescript
import 'reflect-metadata';

import { LocalModelSource, TYPES } from 'sprotty';
import createContainer from './di.config';
import { graph } from './model-source';

document.addEventListener('DOMContentLoaded', () => {
    const container = createContainer('sprotty-diagram');
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    modelSource.setModel(graph);
});
```

## Understanding the Entry Point

Let's break down what's happening in this file:

### Importing Dependencies

```typescript
import 'reflect-metadata';
import { LocalModelSource, TYPES } from 'sprotty';
import createContainer from './di.config';
import { graph } from './model-source';
```

- `reflect-metadata` is required by InversifyJS for dependency injection
- `LocalModelSource` and `TYPES` are imported from Sprotty
- `createContainer` is our dependency injection configuration
- `graph` is our diagram model data

### Initializing the Diagram

```typescript
document.addEventListener('DOMContentLoaded', () => {
    const container = createContainer('sprotty-diagram');
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    modelSource.setModel(graph);
});
```

This code:

1. Waits for the DOM to be fully loaded
2. Creates a dependency injection container with our configuration
3. Gets the `LocalModelSource` from the container
4. Sets our graph model as the source data

> 💡 **Pro Tip**: The `'sprotty-diagram'` parameter passed to `createContainer` must match the ID of the HTML element where you want your diagram to appear.

## Building and Running Your Application

Now that all the pieces are in place, let's build and run our application!

### 1. Verify Your Project Structure

Your project should now have the following structure:

```bash
hello-world/
├── node_modules/
├── package.json
├── package-lock.json
├── src/
│   ├── di.config.ts
│   ├── index.ts
│   ├── model.ts
│   ├── model-source.ts
│   └── views.tsx
├── static/
│   ├── index.html
│   └── styles.css
└── tsconfig.json
```

### 2. Build Your Application

Run the build script to compile and bundle your TypeScript code:

```bash
npm run build
```

This will create an `index.js` file in your `static` directory.

### 3. Open Your Application

Open the `static/index.html` file in your browser. You should see your interactive diagram with three task nodes and a connection between the first and second tasks!

![Final Diagram](/assets/docs/getting-started-diagram.png)

## Exploring Your Interactive Diagram

Take a moment to interact with your diagram:

- **Click on a task node** to select it (notice the border gets thicker)
- **Hover over nodes and edges** to see hover effects
- **Observe the different colors** representing task states:
  - Green for finished tasks
  - Red for running tasks
  - Blue for waiting tasks

## What You've Accomplished

Congratulations! You've successfully built a complete Sprotty diagram application from scratch. Let's review what you've learned:

1. **Project Setup** - Creating a TypeScript project with the necessary dependencies
2. **Data Model** - Defining custom node types and a diagram structure
3. **Custom Views** - Creating SVG-based renderers for your diagram elements
4. **Dependency Injection** - Wiring everything together with InversifyJS
5. **Application Initialization** - Creating an entry point that loads and renders your diagram
