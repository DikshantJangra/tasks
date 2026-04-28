# Design Spec: Minimalist System Todo

**Date:** 2026-04-28
**Status:** Approved (Pending Final Review)

## 1. Vision & Tone
A high-utility, minimalist todo application. The design follows a "System UI" aesthetic—prioritizing function, typography, and high-contrast B&W visuals. No "AI-style" fluff; just professional, maintainable code.

## 2. Technical Stack
- **Framework:** Angular 19+ (Standalone, Signals, Zoneless-ready).
- **Styling:** Tailwind CSS v4 (CSS-first config).
- **Utilities:** Angular CDK (Drag & Drop), Lucide Icons (via `react-icons` equivalent for Angular).
- **State:** Local Signal Store pattern.
- **Backend:** Mock API via `json-server`.

## 3. Architecture
- **`app/core`**: Singleton services (API Repository, Global State).
- **`app/features/todo`**: 
    - `todo.container.ts`: Manages data flow and side effects.
    - `components/`: Pure presentational components (`todo-item`, `todo-input`, `todo-filter`).
- **`app/shared`**: Reusable UI primitives (Buttons, Inputs) and Pipes.

## 4. Key Workflows
1. **Optimistic Updates:** Toggling a todo updates the Signal immediately; rolls back on API failure.
2. **Drag & Drop:** Persistence via API `PATCH` or `PUT` for order indices.
3. **Empty States:** Clean, centered typography when list is empty.

## 5. Deployment & DevOps
- **Docker:** `Dockerfile` using Nginx for serving the SPA.
- **json-server:** `db.json` in root for mock data.
- **Vercel/Netlify:** `vercel.json` or `_redirects` for SPA routing support.
