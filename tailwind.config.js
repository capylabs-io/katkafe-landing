
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    '10': '#FFFFFF',
                    '20': '#B5B5B5',
                    '30': '#5A5A5A',
                    '40': '#2E2D2B',
                },
                red: {
                    '10': '#E3B695',
                    '20': '#F08267',
                    '30': '#F74751',
                    '40': '#A61D47',
                    '50': '#4E322F',
                },
                orange: {
                    '10': '#FFFEEC',
                    '20': '#F4F3E7',
                    '30': '#EEEDD8',
                    '40': '#FFEDBB',
                    '50': '#FDA043',
                    '60': '#FD742D',
                    '90': '#5E5745',
                },
                yellow: {
                    '10': '#FFF4D9',
                    '20': '#FED65A',
                    '30': '#E1B93B',
                },
                blue: {
                    '10': '#DCF2FF',
                    '20': '#76B4EE',
                    '30': '#4D6DCC',
                    '40': '#3D4EA6',
                },
                green: {
                    '10': '#D8EDB3',
                    '20': '#BBE76C',
                    '30': '#97C63C',
                },
                mint: {
                    '10': '#99E7D9',
                    '20': '#74D3CB',
                    '30': '#619C88',
                }
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            fontFamily: {
                pixelifySans: ['var(--font-pixelify-sans)', 'cursive']
            },
            screens: {
                mobile: '440px',
                tabletHeader: '768px'
            }
        }
    },
}