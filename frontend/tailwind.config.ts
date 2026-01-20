import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'
import lineClamp from '@tailwindcss/line-clamp'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,vue,svelte}',
        './**/*.{html,js,ts,jsx,tsx,vue,svelte}',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                primary: {
                    50: '#f5fbff',
                    100: '#e6f6ff',
                    200: '#bfeaff',
                    300: '#99ddff',
                    400: '#4dbfff',
                    500: '#009eff',
                    600: '#007acc',
                    700: '#005599',
                    800: '#003366',
                    900: '#001933',
                },
                accent: '#ff6b6b',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            borderRadius: {
                lg: '0.75rem',
            },
            boxShadow: {
                'md-soft': '0 6px 18px rgba(8,15,52,0.08)',
            },
        },
    },
    plugins: [forms, typography, aspectRatio, lineClamp],
}

export default config