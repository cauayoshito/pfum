import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: 'hsl(var(--ink))',
        ivory: 'hsl(var(--ivory))',
        sand: 'hsl(var(--sand))',
        gold: { DEFAULT: 'hsl(var(--gold))', dark: 'hsl(var(--gold-dark))', light: 'hsl(var(--gold-light))' },
        guava: { DEFAULT: 'hsl(var(--guava))', dark: 'hsl(var(--guava-dark))', light: 'hsl(var(--guava-light))' },
      },
      boxShadow: { soft: '0 6px 24px rgba(0,0,0,.08)', gold: '0 8px 30px rgba(200,164,77,.35)' },
      backgroundImage: {
        'gold-fade': 'linear-gradient(135deg, hsl(var(--gold-light)) 0%, hsl(var(--ivory)) 70%)',
        'guava-mist': 'linear-gradient(160deg, hsl(var(--guava-light)) 0%, hsl(var(--ivory)) 70%)',
      }
    }
  },
  plugins: [],
}; export default config;
