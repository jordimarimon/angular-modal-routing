const plugin = require('tailwindcss/plugin');

// See: https://tailwindcss.com/docs/configuration

module.exports = {
    // Prefix used for utility classes
    prefix: '',

    // Just in time compiler
    mode: 'jit',

    // Remove unused CSS classes
    content: ['./src/**/*.{html,ts}'],

    // How to switch to dark mode.
    //     - Can be a boolean (true or false)
    //     - 'media' (@media (prefers-color-scheme: dark))
    //     - 'class' (with a CSS class)
    // darkMode: false,

    // To disable the default configuration:
    // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
    // Also can be used to combine multiple configuration files.
    // presets: [],

    // Theme variables used to generate the utility classes
    theme: {
        screens: {
            xs: '30em', // 480px
            sm: '40em', // 640px
            md: '48em', // 768px
            lg: '64em', // 1024px
            xl: '80em', // 1280px
        },

        extend: {
            width: {
                md: '48em',
            },
            maxWidth: {
                screen: '100vw',
            },
            minHeight: {
                150: '37.5rem',
            }
        },
    },

    // Tailwind plugins
    plugins: [
        // Per poder utilitzar propietats lògiques
        require('tailwindcss-logical'),

        // Afegeix la possibilitat de poder utilitzar la pseudo classe ":empty" amb Tailwind
        plugin(function({ addVariant, e }) {
            addVariant('empty', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`empty${separator}${className}`)}:empty`
                })
            })
        })
    ],
};
