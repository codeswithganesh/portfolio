# Portfolio Application

## Overview

This is a modern full-stack portfolio application built with React, TypeScript, and Express.js. It's designed as a personal portfolio website showcasing professional experience, projects, skills, and contact information. The application features a responsive design with both light and dark themes, smooth scrolling navigation, and a comprehensive set of UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture:

- **React Router**: Uses Wouter for client-side routing
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Styling**: Tailwind CSS with CSS variables for theming support
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence

### Backend Architecture
The backend follows an Express.js server architecture with modular routing:

- **Server Framework**: Express.js with TypeScript
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **API Structure**: RESTful API endpoints prefixed with `/api`
- **Development Setup**: Vite integration for hot module replacement in development

### Database Design
The application uses Drizzle ORM for database management:

- **Schema Definition**: Centralized schema in `shared/schema.ts` with Zod validation
- **User Model**: Basic user structure with ID, username, and password fields
- **Database Dialect**: PostgreSQL configured but adaptable to other databases
- **Migrations**: Drizzle Kit for schema migrations and database management

### Build System
Modern build pipeline optimized for both development and production:

- **Development**: Vite dev server with HMR and React Fast Refresh
- **Production**: Vite for frontend bundling, esbuild for backend compilation
- **Asset Management**: Static asset serving with proper caching headers
- **TypeScript**: Strict type checking across frontend, backend, and shared code

### Project Structure
The codebase follows a monorepo structure with clear separation of concerns:

- `client/`: Frontend React application with component-based architecture
- `server/`: Backend Express.js application with modular routing
- `shared/`: Common code including database schema and type definitions
- Component organization follows atomic design principles with reusable UI components

## External Dependencies

### Database & ORM
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Drizzle ORM**: Type-safe database toolkit with schema definition and migrations
- **Neon Database**: Serverless PostgreSQL provider integration

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **shadcn/ui**: Pre-built component library with consistent design patterns
- **Lucide React**: Icon library for consistent iconography

### Frontend Libraries
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation and error management
- **Wouter**: Lightweight client-side routing solution
- **date-fns**: Date manipulation and formatting utilities

### Development Tools
- **Vite**: Fast build tool with HMR and optimized bundling
- **TypeScript**: Static type checking and enhanced developer experience
- **ESLint/Prettier**: Code formatting and linting (implied by project structure)
- **PostCSS**: CSS processing with Tailwind CSS integration

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Express Session**: Server-side session management middleware

### Deployment & Runtime
- **Node.js**: Runtime environment for the backend server
- **Express.js**: Web application framework for API and static file serving
- **Environment Variables**: Configuration management for database connections and environment-specific settings