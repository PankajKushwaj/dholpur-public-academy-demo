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
          50: '#F0F4FA',
          100: '#D9E2F2',
          200: '#B3C6E5',
          300: '#8DA9D8',
          400: '#5A83C4',
          500: '#2E5EA6',
          600: '#1F4782',
          700: '#1A3968',
          800: '#142B4F', // Core Navy
          900: '#0D1D36',
          950: '#070F1C',
        },
        royal: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // Core Royal Blue
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        gold: {
          50: '#FEF9EC',
          100: '#FDF2D0',
          200: '#FBE4A1',
          300: '#F8D46E',
          400: '#F4B942', // Core Gold
          500: '#E29E20',
          600: '#B97914',
          700: '#8A5611',
          800: '#5C3810',
          900: '#38210A',
        },
        surface: {
          DEFAULT: '#F5F7FB',
          light: '#FFFFFF',
          card: '#FFFFFF',
          subtle: '#EEF2F9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -1px rgba(20, 43, 79, 0.06), 0 1px 4px -1px rgba(20, 43, 79, 0.04)',
        'soft-md': '0 6px 20px -2px rgba(20, 43, 79, 0.08), 0 3px 8px -2px rgba(20, 43, 79, 0.04)',
        'soft-xl': '0 15px 35px -5px rgba(20, 43, 79, 0.12), 0 8px 16px -6px rgba(20, 43, 79, 0.06)',
        'gold-glow': '0 4px 20px rgba(244, 185, 66, 0.35)',
      }
    },
  },
  plugins: [],
}
