# Minimalist System Todo

A production-grade, high-utility Todo application built with **Angular 21** and **Tailwind CSS v4**.

## Key Features
- **Signals-based State:** High-performance, reactive state management without the boilerplate.
- **Refined System UI:** High-contrast B&W aesthetic following modern system design principles.
- **Drag & Drop:** Native reordering using Angular CDK.
- **Mock Backend:** Integrated `json-server` for rapid local development.
- **Dockerized:** Multi-stage production build using Nginx.

## Tech Stack
- **Frontend:** Angular 21 (Standalone Components)
- **Styling:** Tailwind CSS v4 (PostCSS-first)
- **Icons:** Lucide Angular
- **State:** Local Signal Store pattern
- **Backend:** json-server (Mock API)

## Getting Started

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the mock API (in a separate terminal):
   ```bash
   npm run mock
   ```
3. Start the Angular dev server:
   ```bash
   npm start
   ```

### Docker
1. Build the image:
   ```bash
   docker build -t angular-todo .
   ```
2. Run the container:
   ```bash
   docker run -p 8080:80 angular-todo
   ```
   *The app will be available at `http://localhost:8080`.*

## Deployment
This app is ready for deployment on **Vercel** or **Netlify**:
- **Vercel:** Just connect your GitHub repo; the `vercel.json` ensures SPA routing works.
- **Netlify:** Set the build command to `npm run build` and publish directory to `dist/angular-todo/browser`.
