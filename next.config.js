const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    images: {
        domains: ['unnatural.nl', 'localhost'],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
})
