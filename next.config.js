const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    images: {
        domains: ['unnatural.nl', 'localhost', 'res.cloudinary.com'],
    },
})
