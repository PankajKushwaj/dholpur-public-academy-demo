/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F4F7FB',
          100: '#E6EDF5',
          200: '#C7D6E8',
          300: '#9FB9D6',
          400: '#648FB9',
          500: '#3B6B9B',
          600: '#264E78',
          700: '#1C3B5E',
          800: '#142B4F', // Core Navy (#142B4F)
          900: '#0E1F3A',
          950: '#081223',
        },
        royal: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // Core Royal Blue (#2563EB)
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#172554',
        },
        gold: {
          50: '#FDFBF5',
          100: '#FAF4E4',
          200: '#F5E7C2',
          300: '#F0D597',
          400: '#F4B942', // Core Gold (#F4B942)
          500: '#DFA32B',
          600: '#B87E18',
          700: '#8A5C10',
          800: '#5F3E0C',
          900: '#3A2506',
        },
        surface: {
          DEFAULT: '#F5F7FB',
          card: '#FFFFFF',
          muted: '#EEF2F8',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      },
      letterSpacing: {
        agency: '0.18em',
        subtle: '0.04em',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(20, 43, 79, 0.04), 0 1px 2px -1px rgba(20, 43, 79, 0.03)',
        'card-hover': '0 10px 25px -3px rgba(20, 43, 79, 0.08), 0 4px 10px -2px rgba(20, 43, 79, 0.04)',
        'dropdown': '0 14px 34px -4px rgba(20, 43, 79, 0.12), 0 4px 12px -2px rgba(20, 43, 79, 0.06)',
      }
    },
  },
  plugins: [],
}
