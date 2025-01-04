module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        faintPurple: '#D6A7F7', // Faint purple
        faintBlue: '#A7C7E7',    // Faint blue
        darkGold: '#B8860B',     // Dark gold
        white: '#FFFFFF',        // White
        black: '#000000',        // Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],   // Modern sans-serif font
        mono: ['Fira Code', 'monospace'], // Modern monospace font
      },
      spacing: {
        128: '32rem', // Custom spacing
      },
      borderRadius: {
        'xl': '1rem', // More rounded corners for modern feel
      },
      boxShadow: {
        'modern': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // Modern shadow
      },
    },
  },
  variants: {},
  plugins: [],
}
