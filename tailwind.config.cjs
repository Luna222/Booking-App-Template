const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      //Tablets and above: => @media (min-width: 640px) { ... }

      laptop: '768px',
      //Laptops and above: => @media (min-width: 768px) { ... }

      desktop: '1024px',
      //Desktops: => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['"Rubik"', ...defaultTheme.fontFamily.sans],
        title: ['"Pacifico"', 'cursive'],
      },
      colors: {
        navyBlue: {
          50: '#2563EB',
          100: '#1D4ED8',
          200: '#1E40AF',
          300: '#1E3A8A',
          400: '#172554',
        },
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(0.25rem) scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addUtilities,
      addVariant,
      theme,
    }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
        },
      });
      addComponents({
        '.card': {
          backgroundColor: theme('colors.sky.100'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
        '.primaryBtn': {
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.white'),
          backgroundColor: theme('colors.navyBlue.50'),
          padding: '0.75rem 1rem',
          borderRadius: '0.125rem',
          cursor: 'pointer',
          lineHeight: 'inherit',
        },
        '.secondaryBtn': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.navyBlue.50'),
          backgroundColor: '#e9ecef',
          padding: '0.25rem 0.5rem',
          border: `1.5px solid ${theme('colors.navyBlue.50')}`,
          borderRadius: '0.125rem',
          cursor: 'pointer',
          lineHeight: 'inherit',
        },
        '.container-md': {
          maxWidth: '1100px', //1280px
          width: '100%',
          margin: '0 auto',
          padding: theme('spacing.6'),
          overflow: 'hidden',
        },
        '.container-sm': {
          maxWidth: '960px',
          width: '100%',
          margin: '0 auto',
          padding: theme('spacing.6'),
          overflow: 'hidden',
        },
        //This setup ensures your .page-wrapper element covers the entire viewport
        '.page-wrapper': {
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          overflow: 'auto',
        },
      });
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
        '.animate-fade-in-up': {
          animation: theme('animation.fade-in-up'),
        },
      });
      /*
      ['&:hover', '&:focus']: This array contains the CSS selectors that the new variant will apply to (:hover and :focus pseudo-classes)

        ==> 🤓 When you use the 'hocus' Variant Modifier, Tailwind will apply utility classes BOTH on hover and focus states.
      */
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('first-child', '&:first-child');
      addVariant('last-child', '&:last-child');
    }),
  ],
};
