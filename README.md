# Space Pendragon

A modern web application for managing Pendragon RPG characters set in space. Built with SvelteKit, TypeScript, and Tailwind CSS.

## Features

- **Character Management**: Interactive character sheets with traits, passions, and skills
- **Legends Browser**: Explore legendary archetypes based on rock/pop icons
- **Forms Reference**: Animal spirit forms with their associated traits and instincts
- **Mechs Database**: Mechanical companions with unique voices and combat styles
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Print Support**: Optimized layouts for printing character sheets
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Screenshots

### Homepage

![Homepage](https://github.com/user-attachments/assets/77d72397-dfe5-4612-9627-7b5409eb057f)

### Character Sheet

![Character Sheet](https://github.com/user-attachments/assets/f429837a-0d22-4c49-a9a9-6c553dcef13c)

## Development Setup

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/iaingalloway/space-pendragon.git
cd space-pendragon

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linting checks
- `npm run format` - Format code with Prettier
- `npm run check` - Run Svelte type checking

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable Svelte components
│   │   ├── CharacterSheet.svelte
│   │   ├── TraitShield.svelte
│   │   ├── ErrorBoundary.svelte
│   │   └── LoadingSpinner.svelte
│   ├── characters/          # Character data files
│   │   ├── arfius.json
│   │   ├── baastias.json
│   │   └── madoc.json
│   ├── character.model.ts   # Character domain logic
│   ├── character.types.ts   # Character type definitions
│   ├── forms.ts            # Animal forms data
│   ├── legends.ts          # Legendary archetypes data
│   ├── mechs.ts            # Mechanical companions data
│   ├── utils.ts            # Utility functions
│   └── *.types.ts          # Type definitions
├── routes/                 # SvelteKit routes
│   ├── characters/         # Character-related pages
│   ├── legends/           # Legends browser
│   ├── forms/             # Forms reference
│   ├── mechs/             # Mechs database
│   ├── +layout.svelte     # App layout
│   ├── +page.svelte       # Homepage
│   └── +error.svelte      # Error page
├── app.html               # HTML template
├── app.css                # Global styles
└── app.d.ts               # App type definitions
```

## Architecture

### Data Models

The application uses a clean separation between data models and view models:

- **Character Data**: Raw character data stored in JSON files
- **Character View Model**: Processed data optimized for UI display
- **Type Safety**: Full TypeScript coverage with strict configuration

### Component Architecture

- **ErrorBoundary**: Catches and handles component errors gracefully
- **TraitShield**: SVG-based trait value display with accessibility support
- **CharacterSheet**: Main character display component with semantic HTML
- **LoadingSpinner**: Consistent loading states throughout the app

### Routing

SvelteKit file-based routing with:

- Dynamic routes for character, legend, form, and mech details
- Proper error handling with custom error pages
- SEO optimization with meta tags

## Code Quality

### TypeScript Configuration

Strict TypeScript configuration with additional rules:

- `noUnusedLocals` and `noUnusedParameters`
- `noImplicitReturns` and `noFallthroughCasesInSwitch`
- `exactOptionalPropertyTypes`

### Linting & Formatting

- **ESLint**: TypeScript and Svelte linting with strict rules
- **Prettier**: Consistent code formatting
- **EditorConfig**: Consistent editor settings

### Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

### Performance

- Component lazy loading
- Optimized bundle splitting
- Efficient reactive updates
- Proper key usage in loops

## Deployment

### Build

```bash
npm run build
```

The built application will be in the `.svelte-kit/output` directory.

### Environment Support

Uses `@sveltejs/adapter-auto` which supports:

- Netlify
- Vercel
- Cloudflare Pages
- Node.js
- And many other platforms

## Contributing

### Development Workflow

1. Clone the repository
2. Create a feature branch
3. Make changes following the coding standards
4. Run linting and type checks
5. Test your changes thoroughly
6. Submit a pull request

### Coding Standards

- Use TypeScript for all new code
- Follow the existing component patterns
- Add proper ARIA labels for accessibility
- Include JSDoc comments for public APIs
- Write semantic, accessible HTML
- Use existing utility functions where possible

### Adding New Characters

1. Create a new JSON file in `src/lib/characters/`
2. Follow the existing character data structure
3. Test the character loads correctly
4. Update any relevant documentation

### Adding New Features

1. Consider accessibility implications
2. Add proper TypeScript types
3. Include error handling
4. Follow existing component patterns
5. Add appropriate documentation

## License

This project is private and not licensed for public use.

## Support

For questions or issues, please contact the project maintainer or create an issue in the repository.
