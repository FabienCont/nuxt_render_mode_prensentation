# Nuxt Render Mode Presentation

This website demonstrates the different rendering modes available in Nuxt 4. It serves as an educational tool to explore and understand how various rendering strategies work under the hood, along with their pros and cons.

## Rendering Modes Covered

-   **SPA (Client-Side Rendering)**: Typical Single Page Application behavior.
-   **SSR (Server-Side Rendering)**: Initial load on the server, subsequent navigation on the client.
-   **SSG (Static Site Generation / Prerendering)**: Generated at build time.
-   **SWR (Stale-While-Revalidate)**: Add cache headers to the server response and cache it on the server or reverse proxy for a configurable TTL
-   **ISR (Incremental Static Regeneration)**: The behavior is the same as swr except it add the response to the CDN cache on platforms that support this.
-   **Nuxt Islands**: Component-level server-side rendering.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Linting & Type Checking

Run the linter:

```bash
pnpm lint
```

Run type checks:

```bash
pnpm typecheck
```
