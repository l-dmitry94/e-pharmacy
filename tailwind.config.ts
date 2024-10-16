import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1d1e21',
                green: {
                    DEFAULT: '#59b17a',
                    dark: '#3f945f',
                },
                background: '#f7f8fa',
            },
            borderRadius: {
                10: '10px',
                27: '27px',
                30: '30px',
                60: '60px',
            },
            screens: {
                mobile: '375px',
                tablet: '768px',
                desktop: '1440px',
            },

            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
            },
        },
    },
    plugins: [],
};
export default config;
