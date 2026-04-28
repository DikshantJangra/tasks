# Minimalist System Todo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-grade, B&W minimalist Todo app using Angular 19+ and Tailwind v4.

**Architecture:** Repository pattern for API calls and a Signal-based Service for reactive state management. Separates smart container logic from presentational components.

**Tech Stack:** Angular 19+, Tailwind CSS v4, Angular CDK (Drag & Drop), json-server.

---

### Task 1: Project Scaffolding & Tailwind v4 Setup

**Files:**
- Create: `package.json`, `tsconfig.json`, `angular.json`
- Create: `src/main.ts`, `src/index.html`, `src/styles.css`
- Create: `.postcssrc.json`

- [ ] **Step 1: Initialize Angular project**
Run: `npx -y @angular/cli@latest new angular-todo --directory . --style css --standalone --routing false --skip-tests`

- [ ] **Step 2: Install Tailwind v4 and CDK**
Run: `npm install tailwindcss @tailwindcss/postcss postcss @angular/cdk lucide-angular`

- [ ] **Step 3: Configure Tailwind v4**
Create `.postcssrc.json`:
```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```
Update `src/styles.css`:
```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", "system-ui", sans-serif;
  --color-system-black: #000000;
  --color-system-white: #ffffff;
  --color-system-grey: #71717a;
}

@layer base {
  body {
    @apply bg-system-white text-system-black antialiased;
  }
}
```

- [ ] **Step 4: Verify installation**
Run: `npm start` (Verify B&W background and Tailwind processing)

---

### Task 2: Data Model & Mock API

**Files:**
- Create: `db.json`
- Create: `src/app/core/models/todo.model.ts`
- Create: `src/app/core/repositories/todo.repository.ts`

- [ ] **Step 1: Define Todo Model**
```typescript
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  order: number;
}

export type TodoFilter = 'all' | 'active' | 'completed';
```

- [ ] **Step 2: Setup json-server**
Create `db.json`:
```json
{
  "todos": []
}
```

- [ ] **Step 3: Implement Todo Repository**
Create `src/app/core/repositories/todo.repository.ts` using `HttpClient` for CRUD operations.

---

### Task 3: Signal-Based State Management

**Files:**
- Create: `src/app/core/state/todo.store.ts`

- [ ] **Step 1: Create TodoStore Service**
Implement a service using `signal` for todos, `computed` for filtered lists, and methods for state transitions (including optimistic updates).

---

### Task 4: UI Components (System Design)

**Files:**
- Create: `src/app/features/todo/todo.container.ts`
- Create: `src/app/features/todo/components/todo-input.component.ts`
- Create: `src/app/features/todo/components/todo-item.component.ts`
- Create: `src/app/features/todo/components/todo-filter.component.ts`

- [ ] **Step 1: Implement Presentational Components**
Build `todo-item` with B&W styling, `todo-input` with 1px border, and `todo-filter` tabs.

- [ ] **Step 2: Implement Drag & Drop**
Integrate `CdkDropList` and `CdkDrag` into the list container.

---

### Task 5: Dockerization & Deployment

**Files:**
- Create: `Dockerfile`
- Create: `nginx.conf`
- Create: `vercel.json`

- [ ] **Step 1: Create multi-stage Dockerfile**
- [ ] **Step 2: Add Vercel/Netlify configuration**
- [ ] **Step 3: Document build/run steps in README.md**
