---
title: 'Architecture Overview'
---

{{< toc >}}

Sprotty is a diagramming framework that provides a robust foundation for building interactive, web-based diagram editors. At its core, Sprotty follows a clear architectural pattern that ensures maintainability, testability, and extensibility.

## Introduction to Sprotty's Architecture

The foundation of Sprotty's architecture is built around three main components that work together in a unidirectional flow:

1. **Action Dispatcher**: The central hub that receives and processes all diagram operations
2. **Command Stack**: The state manager that maintains the diagram's history and current state
3. **Viewer**: The renderer that transforms the internal model into a visual representation

These components form a cyclic flow of information that prevents feedback loops and ensures predictable behavior.

{{< mermaid class="text-center">}}
flowchart TD;
    ActionDispatcher[Action Dispatcher]
    CommandStack[Command Stack]
    Viewer[Viewer]
    ActionDispatcher -->|Command| CommandStack
    CommandStack -->|SModel| Viewer
    Viewer -->|Action| ActionDispatcher
{{< /mermaid>}}

This architecture provides several key benefits:

- **Predictable State Management**: The unidirectional flow makes it easy to track and debug state changes
- **Testability**: Each component has a clear responsibility and can be tested in isolation
- **Extensibility**: New features can be added by extending any of the core components
- **Performance**: The architecture minimizes unnecessary updates and optimizes rendering

## What You'll Learn

This documentation series will guide you through Sprotty's architecture in logical steps:

1. **[Core Components]({{< relref "core-components" >}})**: Deep dive into the three main architectural components
2. **[Data Flow]({{< relref "data-flow" >}})**: Understanding how information moves through the system
3. **[Extension Points]({{< relref "extension-points" >}})**: How to customize and extend Sprotty's functionality
4. **[Best Practices]({{< relref "best-practices" >}})**: Guidelines for building robust Sprotty applications

Each section builds upon the previous ones, providing a comprehensive understanding of how to build effective diagramming applications with Sprotty.

## Next Steps

Start with the [Core Components]({{< relref "core-components" >}}) section to understand the fundamental building blocks of Sprotty's architecture, then progress through each section to build a complete understanding of the framework.
