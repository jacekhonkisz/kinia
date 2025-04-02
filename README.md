# Kinia - React Application

A React + TypeScript application built with Vite.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3001

## Building for Production

```bash
npm run build
```

This will generate a production build in the `dist` directory.

## Deployment

### GitHub Pages

This project is configured for deployment to GitHub Pages.

Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

### Vercel

This project is also configured for deployment to Vercel.

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the configuration and deploy the app

For manual deployment using Vercel CLI:
```bash
npm install -g vercel
vercel
```

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `pages/` - Page components
  - `styles/` - CSS styles
  - `utils/` - Utility functions
  - `types/` - TypeScript type definitions  
  - `data/` - Data files
- `public/` - Static assets
- `index.html` - HTML entry point
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel configuration 