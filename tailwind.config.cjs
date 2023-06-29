/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{svelte,html}'],
  theme: {
    // responsive breakpoints
    screens: {
      xs: '380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '2160px'
    },
    extend: {
      // doted colours from figma pallette
      colors: {
        // names curtesy of https://meodai.github.io/color-names/ + https://github.com/dtao/nearest-color
        madagascarPink: '#D1909E',
        panTostado: '#E8C199',
        perrywinkle: '#998DD9',
        crystalsongBlue: '#4FC1C9',
        peachyBreezes: '#FFC996',
        supernova: '#F8D9B5',
        glacierGreen: '#389AAF'
      }
    }
  },
  plugins: []
};
