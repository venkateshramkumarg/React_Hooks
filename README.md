# React Hooks Collection

A collection of custom React hooks for common use cases and functionality.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Installation

```bash
npm install
# or
yarn install
```

## Usage

Import the desired hooks from their respective files:

```javascript
import { useYourHook } from './hooks/useYourHook';
```

## Project Structure

```
/Hooks
  ├── src/
  │   └── hooks/
  └── tests/
```

## Available Hooks

### State Management Hooks
- **useLocalStorage**: A hook for persisting state in localStorage while keeping it in sync with React state
- **useToggle**: Manages boolean state with easy toggle functionality
- **useCounter**: Manages numeric state with increment/decrement functionality

### Effect & Lifecycle Hooks
- **useMount**: Executes code only when component mounts
- **useUpdateEffect**: Similar to useEffect but skips the first render
- **useUnmount**: Executes cleanup code when component unmounts

### Browser API Hooks
- **useMediaQuery**: Responds to media query changes
- **useGeolocation**: Manages browser geolocation API
- **useOnline**: Tracks online/offline status

### DOM Hooks
- **useClickOutside**: Detects clicks outside a specified element
- **useScrollPosition**: Tracks scroll position
- **useWindowSize**: Monitors window dimensions

### Form & Input Hooks
- **useForm**: Manages form state and validation
- **useInput**: Handles input field state and validation
- **useDebounce**: Debounces input values

### Performance Hooks
- **useMemoCompare**: Memoization with custom comparison
- **useThrottle**: Throttles function calls

Each hook is documented with TypeScript types and includes examples in their respective files.

## Usage Examples

```javascript
// Toggle Example
const [isOn, toggle] = useToggle(false);

// Local Storage Example
const [value, setValue] = useLocalStorage('key', defaultValue);

// Media Query Example
const isDesktop = useMediaQuery('(min-width: 1024px)');
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Dependencies

- React
- React DOM
- Additional dependencies...

## Contributing

Feel free to contribute by creating pull requests or reporting issues.

## License

MIT License

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
