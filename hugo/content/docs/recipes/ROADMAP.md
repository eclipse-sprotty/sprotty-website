# Sprotty Recipes Roadmap

This roadmap outlines the planned development of Sprotty recipes, including improvements to existing recipes and new advanced recipes for the documentation.

## Overview

The recipes section targets both beginners wanting to progress and advanced users needing reference implementations. Each recipe will have a dedicated, minimal but complete example that demonstrates the concepts in isolation.

## Current State Analysis

### Existing Recipes Status

#### ✅ **Styling** - COMPLETE

- **File:** `styling.md`
- **Status:** Well-structured, comprehensive coverage
- **Scope:** CSS classes, subtypes, conditional styling, custom views
- **Example:** `styling-showcase/` - Network topology demonstrating all styling approaches
- **Action:** ✅ DONE - Example created and integrated

#### ✅ **Micro-layout** - COMPLETE

- **File:** `micro-layout.md`
- **Status:** Excellent detail, complete coverage
- **Scope:** Layout types (vbox, hbox, stack), options, compartments, layoutable children
- **Example:** `micro-layout-showcase/` - Interactive demonstration with real-time controls
- **Action:** ✅ DONE - Interactive example created with live layout modification

#### ✅ **SVG Rendering** - SPLIT AND REMOVED

- **File:** `svg-rendering.md` - ❌ REMOVED
- **Status:** Successfully split into focused recipes
- **Result:** Split into "Custom Views" and "Layout Strategies" recipes
- **Action:** ✅ COMPLETE - Original file removed, content redistributed

#### ⚠️ **Custom Interactions** - NEEDS EXPANSION

- **File:** `custom-interactions.md`
- **Status:** Basic coverage, lacks depth
- **Scope:** Buttons, mouse/keyboard listeners, projection bars
- **Action:** Expand into "Advanced Interactions" with comprehensive example

#### ⚠️ **Actions and Protocols** - NEEDS REWORK

- **File:** `actions-and-protocols.md`
- **Status:** Too abstract, lacks practical examples
- **Issues:** Hard to follow, no hands-on demonstrations
- **Action:** Rework as "Communication Patterns" with practical examples

## Implementation Plan

### Phase 1: Fix and Enhance Existing Recipes

#### Priority 1A: Create Missing Examples for Good Recipes

##### 1. Styling Showcase Example

- **Example:** `examples/styling-showcase/`
- **Demonstrates:** All styling approaches from the existing recipe
- **Features:**
  - Default CSS classes usage
  - Subtype-based styling
  - Per-element CSS classes
  - Custom views with conditional styling
  - Interactive styling (hover, selection)

##### 2. Micro-layout Showcase Example

- **Example:** `examples/micro-layout-showcase/`
- **Demonstrates:** All layout concepts from the existing recipe
- **Features:**
  - Basic layouts (vbox, hbox, stack)
  - Layout options (alignment, padding, sizing)
  - Complex nested compartments
  - Layoutable child features

#### Priority 1B: Split and Rework Problematic Recipes

##### 3. ✅ Custom Views Recipe (Split from SVG Rendering) - COMPLETE

- **New Recipe:** `custom-views.md` ✅ DONE
- **Example:** `examples/custom-views-showcase/` ✅ DONE
- **Scope:** View creation, TSX syntax, rendering lifecycle
- **Features:** ✅ ALL IMPLEMENTED
  - Creating custom views from scratch
  - TSX syntax and conventions
  - View registry configuration
  - Rendering context usage
  - View composition patterns

##### 4. ✅ Layout Strategies Recipe (Split from SVG Rendering) - COMPLETE

- **New Recipe:** `layout-strategies.md` ✅ DONE
- **Example:** `examples/layout-strategies-showcase/` ✅ DONE
- **Scope:** Client vs server layout, bounds computation
- **Features:** ✅ ALL IMPLEMENTED
  - Client-only layout configuration with rich content structure
  - Server-only layout configuration with ELK integration
  - Hybrid client-server layout combining both approaches
  - Layout configurators and bounds computation
  - Interactive strategy comparison demo

##### 5. ✅ Advanced Interactions Recipe (Expand Custom Interactions) - COMPLETE

- **Enhanced Recipe:** `advanced-interactions.md` ✅ DONE (replaced `custom-interactions.md`)
- **Example:** `examples/advanced-interactions-showcase/` ✅ DONE
- **Scope:** Comprehensive interaction patterns
- **Features:** ✅ ALL IMPLEMENTED
  - Button handlers with meaningful actions (info, edit, delete, settings)
  - Mouse and keyboard listeners with context menus and shortcuts
  - Visual feedback with toast notifications and hover effects
  - Selection and focus management with smooth animations
  - Projection bars for minimap navigation
  - Professional UI patterns for production use

##### 6. ✅ Communication Patterns Recipe (Rework Actions and Protocols) - COMPLETE

- **Enhanced Recipe:** `communication-patterns.md` ✅ DONE (replaced `actions-and-protocols.md`)
- **Example:** `examples/communication-demo/` ✅ DONE
- **Scope:** Action lifecycle and communication
- **Features:** ✅ ALL IMPLEMENTED
  - Custom action creation with practical examples (SendMessage, SimulateNetwork, etc.)
  - Action handler implementation with comprehensive command patterns
  - Client-server communication patterns (request-response, WebSocket, notifications)
  - Model synchronization strategies with conflict resolution
  - Error handling in communication with user feedback and recovery
  - Real-time action logging with export capabilities (JSON, CSV, TXT)
  - Interactive network simulation (slow, errors, timeouts)
  - Visual feedback with toast notifications and status indicators

### Phase 2: New Advanced Recipes

#### Priority 2A: High-Demand Features

##### 7. ✅ Animation and Transitions - COMPLETE

- **New Recipe:** `animation-transitions.md` ✅ DONE
- **Example:** `examples/animation-showcase/` ✅ DONE
- **Scope:** Visual animations and model transitions
- **Features:** ✅ ALL IMPLEMENTED
  - CSS-based animations (transitions, keyframes, hover effects)
  - Programmatic animations (bounce, pulse, shake, spin, glow)
  - Custom easing functions (bounce, elastic, back, circular)
  - State transition effects with color interpolation
  - Edge flow animations
  - Compound animations and choreography
  - Performance monitoring and optimization
  - Accessibility (reduced motion support)

##### 8. ✅ Advanced Edge Routing - COMPLETE

- **New Recipe:** `advanced-edge-routing.md` ✅ DONE
- **Example:** `examples/advanced-edges-showcase/` ✅ DONE
- **Scope:** Custom routing algorithms and edge styling
- **Features:** ✅ ALL IMPLEMENTED
  - Built-in routers (Polyline, Manhattan, Bezier)
  - Custom edge routers (Arc, Step)
  - Edge decorations and multiple arrow types
  - Custom anchor computers (Hexagon, Dynamic)
  - Edge intersection handling (jumps and gaps)
  - Dynamic edge styling and flow animation
  - Port-specific anchoring
  - Interactive router and decoration switching

##### 9. Data Binding and Real-time Updates

- **New Recipe:** `data-binding-updates.md`
- **Example:** `examples/live-data-demo/`
- **Scope:** Dynamic data integration patterns
- **Features:**
  - WebSocket integration
  - Incremental model updates
  - Data-driven styling changes
  - Conflict resolution strategies
  - Performance optimization for updates

##### 10. Tool Palette and Element Creation

- **New Recipe:** `tool-palette-creation.md`
- **Example:** `examples/tool-palette-demo/`
- **Scope:** Element creation and editing workflows
- **Features:**
  - Drag-and-drop tool palette
  - Template-based element creation
  - Multi-step creation wizards
  - Creation validation
  - Undo/redo for creation operations

#### Priority 2B: User Experience Enhancements

##### 11. Validation and Error Handling

- **New Recipe:** `validation-error-handling.md`
- **Example:** `examples/validation-demo/`
- **Scope:** Model validation and user feedback
- **Features:**
  - Custom validation rules
  - Error decoration system
  - Warning indicators
  - User-friendly error messages
  - Validation performance optimization

##### 12. Export and Serialization

- **New Recipe:** `export-serialization.md`
- **Example:** `examples/export-demo/`
- **Scope:** Import/export capabilities
- **Features:**
  - SVG export with custom styling
  - PNG/PDF generation
  - Model serialization formats
  - Import validation and migration
  - Batch export operations

#### Priority 2C: Framework and Advanced Topics

##### 13. React Integration

- **New Recipe:** `react-integration.md`
- **Example:** `examples/react-integration/`
- **Scope:** React-specific integration patterns
- **Features:**
  - React hooks for Sprotty
  - State management integration (Redux/Zustand)
  - Component lifecycle management
  - Server-side rendering considerations
  - React component wrapping patterns

##### 14. Performance Optimization

- **New Recipe:** `performance-optimization.md`
- **Example:** `examples/performance-demo/`
- **Scope:** Large diagram handling and optimization
- **Features:**
  - Viewport-based rendering
  - Lazy loading strategies
  - Memory leak prevention
  - Performance profiling techniques
  - Virtualization patterns

## Example Structure Guidelines

### Minimal but Complete

Each example should be:

- **Focused:** Demonstrates one primary concept clearly
- **Complete:** Runnable and self-contained
- **Minimal:** No unnecessary complexity or features
- **Educational:** Well-commented with clear explanations

### Standard Example Structure

```text
examples/recipe-name/
├── README.md              # What this example demonstrates + learning objectives
├── src/
│   ├── model.ts          # Domain-specific model (if needed)
│   ├── views.tsx         # Custom views (if needed)
│   ├── di.config.ts      # Dependency injection configuration
│   ├── actions.ts        # Custom actions (if needed)
│   ├── handlers.ts       # Event handlers and logic (if needed)
│   └── standalone.ts     # Main application entry point
├── css/
│   └── styles.css        # Recipe-specific styling
├── package.json          # Dependencies and build scripts
└── index.html            # Simple demo page
```

## Implementation Timeline

### Immediate Focus (Phase 1) - ✅ COMPLETE

1. ✅ **Styling showcase example** - Foundation for visual concepts
2. ✅ **Micro-layout showcase example** - Essential for layout understanding
3. ✅ **Custom Views recipe + example** - Core rendering concepts
4. ✅ **Layout Strategies recipe + example** - Client/server layout patterns
5. ✅ **Advanced Interactions recipe + example** - Enhanced user experience
6. ✅ **Communication Patterns recipe + example** - Action lifecycle and communication

### Next Priority (Phase 2A) - ✅ Animation COMPLETE, ✅ Advanced Edges COMPLETE

1. ✅ **Animation showcase** - COMPLETE - Comprehensive CSS and programmatic animations
2. ✅ **Advanced Edges** - COMPLETE - Built-in routers, custom routers, decorations, anchors, intersections
3. **Tool Palette** - Practical requirement for editors
4. **Data Binding** - Real-world application necessity

### Future Development (Phase 2B & 2C)

- Layout Strategies, Communication Patterns
- Validation, Export capabilities
- React Integration, Performance Optimization

## Advanced Communication Pattern Demo Ideas

The current Communication Patterns demo shows basic action dispatching, but we have identified several more sophisticated examples that would better demonstrate Sprotty-specific communication patterns:

### 🎯 **Priority Ideas for Enhanced Communication Demos**

#### 1. **Client-Server Layout Coordination Demo** ⭐ **(Recommended)**

**Scenario**: Interactive diagram that demonstrates the complete Sprotty layout workflow
**Sprotty Patterns Demonstrated**:

- `RequestBoundsAction` → Client calculates text bounds
- `ComputedBoundsAction` → Server receives bounds
- Server runs ELK layout algorithm
- `UpdateModelAction` → Server sends positioned model back
- Shows the actual bounds/layout action cycle that developers encounter

**Why This Matters**: This is the core Sprotty workflow that every developer needs to understand - how client and server coordinate to layout diagrams.

#### 2. **Interactive Diagram Builder Demo**

**Scenario**: User builds a diagram with drag-and-drop palette and property panel
**Sprotty Patterns Demonstrated**:

- Drag from palette → Custom `CreateNodeAction`
- Property panel changes → `UpdateModelAction` with validation
- Undo/Redo → Command pattern with proper `CommandReturn` types
- Save/Load → `RequestModelAction` / `SetModelAction` cycle
- Delete operations → Custom delete actions and model updates

**Why This Matters**: Shows CRUD operations through Sprotty's action system, which is essential for diagram editors.

#### 3. **Real-Time Collaborative Editing Demo**

**Scenario**: Multiple users editing the same diagram simultaneously
**Sprotty Patterns Demonstrated**:

- `RequestModelAction` → Server coordination
- `SetModelAction` → Broadcast updates to all clients
- Conflict resolution with `UpdateModelAction`
- Action queuing and batching for performance
- WebSocket integration with Sprotty actions

**Why This Matters**: Demonstrates how to build collaborative diagram applications with Sprotty's action system.

#### 4. **Multi-View Diagram Synchronization Demo**

**Scenario**: Same model displayed in multiple views (tree view + diagram view)
**Sprotty Patterns Demonstrated**:

- Shared `ModelSource` between multiple viewers
- Action dispatching affects both views simultaneously
- View-specific actions that update shared model
- Synchronized selection and focus across views

**Why This Matters**: Shows how to build complex applications with multiple Sprotty views sharing state.

#### 5. **Diagram Action Debugging/Monitoring Tool**

**Scenario**: Meta-tool that monitors and debugs action flows in a live diagram
**Sprotty Patterns Demonstrated**:

- Action interceptor that logs all actions
- Action replay functionality for debugging
- Model state inspection and visualization
- Performance monitoring of action chains
- Custom debugging actions and commands

**Why This Matters**: Helps developers understand and debug their own Sprotty applications.

### 📋 **Implementation Priority**

1. **Client-Server Layout Coordination** - Core Sprotty workflow
2. **Interactive Diagram Builder** - Common use case patterns
3. **Multi-View Synchronization** - Advanced architecture patterns
4. **Real-Time Collaboration** - Complex distributed patterns
5. **Action Debugging Tool** - Developer tooling

### 🎯 **Selection Criteria**

- **Sprotty-Specific**: Must demonstrate actual Sprotty actions and patterns, not generic application communication
- **Practical Relevance**: Should show patterns developers actually encounter
- **Educational Value**: Should teach concepts from the Communication Patterns recipe
- **Progressive Complexity**: Should build on concepts from basic to advanced

## Success Metrics

- Each recipe has a dedicated, working example
- Examples are minimal but demonstrate complete concepts
- Documentation progresses from beginner to advanced concepts
- Real-world applicability of all recipes
- Clear learning path through the recipes

## Notes

- **Flexibility:** Implementation details may evolve based on development experience
- **User Feedback:** Priority may shift based on community needs and feedback
- **Integration:** Complex showcase applications will be developed after individual recipes are complete
- **Quality:** Focus on quality over quantity - each recipe should be comprehensive and well-tested

---

*This roadmap is a living document and will be updated as development progresses.*
