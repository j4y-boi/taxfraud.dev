const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {
        colors: {
          'great-blue': 'oklch(49.933% 0.11024 250.04)',
          'great-blue-50': 'oklch(96.247% 0.02001 200.64)',
          'great-blue-100': 'oklch(92.597% 0.03582 205.23)',
          'great-blue-200': 'oklch(84.361% 0.06317 214.03)',
          'great-blue-300': 'oklch(74.762% 0.08826 226.04)',
          'great-blue-400': 'oklch(63.754% 0.11758 239.66)',
          'great-blue-500': 'oklch(49.933% 0.11024 250.04)',
          'great-blue-600': 'oklch(41.436% 0.10419 257.32)',
          'great-blue-700': 'oklch(33.231% 0.09464 263.24)',
          'great-blue-800': 'oklch(25.996% 0.07965 268.39)',
          'great-blue-900': 'oklch(19.004% 0.05983 273.58)',
        },
      },
    },
  plugins: [forms, typography],
};
