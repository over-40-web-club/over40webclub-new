# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based website for the "Over 40 Web Club" - an online community for web developers aged 40 and above. The site is built using GatsbyJS with internationalization support (Japanese and English), Bootstrap styling, and integrates with Airtable for dynamic content management.

## Development Commands

```bash
# Install dependencies (this project uses yarn)
yarn install

# Start development server
yarn dev
# or
gatsby develop

# Build for production
yarn build
# or
gatsby build

# Serve production build locally
yarn serve
# or
gatsby serve

# Clean Gatsby cache and public directory
yarn clean
# or
gatsby clean

# Run ESLint
yarn eslint
# or
eslint ./src

# Format code with Prettier
yarn format

# Run tests (currently runs ESLint)
yarn test
```

## Environment Variables

Required environment variables (create `.env.development` and `.env.production` files):

```
AIRTABLE_API_TOKEN="xxxx"
AIRTABLE_BASE_ID="xxxx"
AIRTABLE_TABLE_NAME="xxxx"
```

Contact the project maintainers for the actual values.

## Architecture

### Core Structure

- **Content-driven**: Uses Markdown files in `/content/` for page content with i18n support
- **Component-based**: React components in `/src/components/` for reusable UI elements
- **View-based sections**: Main page sections in `/src/views/Sections/` (About, Portfolio, History, Team, Clients, Contact)
- **Template-driven**: Uses `/src/templates/top-index.jsx` as the main page template

### Key Directories

- `/content/` - Markdown content files with language suffixes (`.en.md`, `.ja.md`)
  - `/content/sections/` - Page section content
  - `/content/assets/images/` - Images and media assets
- `/src/components/` - Reusable React components
- `/src/views/` - Main layout components (Navbar, Footer, Top, Sections)
- `/src/style/` - SCSS stylesheets with Bootstrap integration
- `/src/utils/` - Utility functions for content processing
- `/config/` - Site configuration including metadata

### Data Flow

1. Markdown files in `/content/` are processed by `gatsby-transformer-remark`
2. Airtable integration via `gatsby-source-airtable` for dynamic team/portfolio data
3. GraphQL queries in templates fetch processed content
4. i18n routing handled by `gatsby-plugin-i18n` with language detection

### Key Files

- `gatsby-config.js` - Main Gatsby configuration with plugins and site metadata
- `gatsby-node.js` - Build-time page generation and GraphQL schema customization
- `config/site.js` - Site metadata and configuration constants
- `src/templates/top-index.jsx` - Main page template with GraphQL queries

### Styling

- Uses SCSS with Bootstrap 5
- Global styles in `/src/style/main.scss` and `/src/style/core.scss`
- Component-specific styles co-located with components (`.scss` files)
- Font Awesome icons via `@fortawesome/react-fontawesome`

### Internationalization

- Default language: Japanese (`ja`)
- Supported languages: Japanese (`ja`), English (`en`)
- Language-specific content files use `.ja.md` and `.en.md` suffixes
- Language selector component for user language switching
- Routes automatically generated for each language

### Build and Deployment

- Builds to `/public/` directory
- Netlify deployment configured via `netlify.toml`
- Includes redirect from old domain to new domain
- Uses `yarn build` command in Netlify