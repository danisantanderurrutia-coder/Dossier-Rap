/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090a0d',
        surface: {
          DEFAULT: '#111318',
          subtle: '#181b22',
          border: '#252934',
          hover: '#1e222b',
        },
        crt: {
          green: '#00ff66',
          amber: '#ffb703',
          red: '#ff3333',
          cyan: '#00f0ff',
          magenta: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
        display: ['Cabinet Grotesk', 'Clash Display', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 20px -3px rgba(0, 255, 102, 0.3)',
        'glow-amber': '0 0 20px -3px rgba(255, 183, 3, 0.3)',
        'glow-cyan': '0 0 20px -3px rgba(0, 240, 255, 0.3)',
        'glow-red': '0 0 20px -3px rgba(255, 51, 51, 0.3)',
      },
    },
  },
  plugins: [],
}
