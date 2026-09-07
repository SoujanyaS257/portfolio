/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: '#F8FAFC',
        ink: '#0F172A',
        muted: '#64748B',
        line: '#E2E8F0',
        navy: '#0B1120',
        indigo: '#6366F1',
        violet: '#8B5CF6',
        accent: { DEFAULT: '#2563EB', hover: '#1D4ED8' },
        safe: '#059669',
        suspicious: '#D97706',
        fraud: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(15,23,42,0.04), 0 1px 3px 0 rgba(15,23,42,0.06)',
        'card-hover': '0 4px 12px -2px rgba(15,23,42,0.08), 0 8px 24px -4px rgba(37,99,235,0.10)',
        glow: '0 0 0 1px rgba(37,99,235,0.15), 0 8px 30px -6px rgba(99,102,241,0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}