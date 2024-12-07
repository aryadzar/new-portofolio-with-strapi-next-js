import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animated';
const {
   default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

export default {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
         },
      },
   },
   plugins: [tailwindcssAnimate, addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
   let allColors = flattenColorPalette(theme('colors'));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );

   addBase({
      ':root': newVars,
   });
}
