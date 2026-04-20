import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5f1',
          100: '#c5e5d9',
          200: '#9dd3bf',
          300: '#72c1a4',
          400: '#4eb290',
          500: '#2d7a5f',
          600: '#276e55',
          700: '#1f5f48',
          800: '#18503b',
          900: '#0e3828',
        },
        accent: {
          50: '#fdf8e7',
          100: '#faeec4',
          200: '#f5e09d',
          300: '#f0d275',
          400: '#ecc655',
          500: '#e8a827',
          600: '#d99920',
          700: '#c08618',
          800: '#a67211',
          900: '#7d5509',
        },
      },
      fontSize: {
        // Grotere base font sizes voor ouderen
        'base': ['1.125rem', { lineHeight: '1.75rem' }],
        'lg': ['1.25rem', { lineHeight: '1.875rem' }],
        'xl': ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '4xl': ['3rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
export default config
