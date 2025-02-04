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
        amberHoney: {
          50: '#FFB700',
        },
        leafGreen: {
          50: '#15803d',
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
          fontWeight: theme('fontWeight.semibold'),
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
      });
      addComponents({
        '.primaryBtn': {
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.white'),
          textAlign: 'center',
          backgroundColor: theme('colors.navyBlue.50'),
          padding: '0.75rem 1rem',
          borderRadius: '0.125rem',
          cursor: 'pointer',
          lineHeight: 'inherit',
        },
        '.primaryBtnRound': {
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.white'),
          textAlign: 'center',
          backgroundColor: theme('colors.navyBlue.50'),
          padding: '0.75rem 1rem',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          lineHeight: 'inherit',
        },
        '.secondaryBtn': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.navyBlue.50'),
          textAlign: 'center',
          backgroundColor: '#e9ecef',
          padding: '0.25rem 0.5rem',
          border: `1.5px solid ${theme('colors.navyBlue.50')}`,
          borderRadius: '0.125rem',
          cursor: 'pointer',
          lineHeight: 'inherit',
        },
        '.container-md': {
          maxWidth: '1200px', //1280px
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
        '.txt-label': {
          color: theme('colors.gray.700'),
        },
        '.txt-gray': {
          color: theme('colors.gray.600'),
        },
        '.sub-txt': {
          color: theme('colors.gray.500'),
          fontWeight: theme('fontWeight.medium'),
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
