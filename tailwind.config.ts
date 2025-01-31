import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#dc2626',
          'primary-focus': '#b91c1c',
          'primary-content': '#ffffff',
          secondary: '#374151',
          accent: '#991b1b',
          neutral: '#171717',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#d1d5db',
          'base-content': '#171717',
          info: '#374151',
          success: '#15803d',
          warning: '#854d0e',
          error: '#991b1b',
        },
      },
    ],
  },
}

export default config
