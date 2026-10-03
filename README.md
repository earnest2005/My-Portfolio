# My Portfolio

A modern, full-stack portfolio application built using a pnpm monorepo structure.

## 🚀 Tech Stack

### Frontend (`@workspace/portfolio`)
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (v4)
- **UI Components:** Radix UI Primitives, Framer Motion for animations
- **Routing:** wouter
- **State/Data Fetching:** React Query

### Backend & Libraries
- **API Server:** Node.js backend (`artifacts/api-server`)
- **Database Tools:** Drizzle ORM (`lib/db`)
- **Shared Schemas:** Zod (`lib/api-zod`), API Specification (`lib/api-spec`)

## 📁 Project Structure

The project uses a pnpm workspace to manage multiple packages and apps.

```
/
├── artifacts/
│   ├── portfolio/       # Main frontend React application
│   ├── api-server/      # Backend API server
│   └── mockup-sandbox/  # UI Mockup and testing sandbox
├── lib/
│   ├── db/              # Database schema and utilities
│   ├── api-spec/        # API route definitions
│   ├── api-zod/         # Shared Zod validation schemas
│   └── api-client-react/# React query hooks/API client
├── scripts/             # Workspace scripts
└── package.json         # Workspace root configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- `pnpm` (Workspace is strictly configured to use `pnpm`)

### Installation

Install all dependencies across the workspace:
```bash
pnpm install
```

### Running Locally

To start the development server for the portfolio frontend:
```bash
pnpm run dev
```

To run all apps and services concurrently:
```bash
pnpm run dev:all
```

### Build & Typecheck

To perform typechecking across all workspace packages:
```bash
pnpm run typecheck
```

To build the portfolio frontend for production:
```bash
pnpm run build
```

## 📜 License

This project is licensed under the MIT License.
