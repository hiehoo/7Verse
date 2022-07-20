const withPlugins = require("next-compose-plugins");

const nextConfig = {
    hmr: false,
    poweredByHeader: false,
    devIndicators: {
        buildActivity: false,
        autoPrerender: false
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
    },
    images: {
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        domains: ["localhost", "quaythe.online"],
    },
    async headers() {
        return [{
            source: '/:all*(svg|jpg|png)',
            locale: false,
            headers: [{
                key: 'Cache-Control',
                value: 'public, max-age=9999999999, must-revalidate',
            }],
        }, ]
    },
}

module.exports = withPlugins([], nextConfig);

// module.exports = {
//     poweredByHeader: false,
//     devIndicators: {
//         buildActivity: false,
//         autoPrerender: false
//     },
//     images: {
//         imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//         deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     },
//     async headers() {
//         return [{
//             source: '/:all*(svg|jpg|png)',
//             locale: false,
//             headers: [{
//                 key: 'Cache-Control',
//                 value: 'public, max-age=9999999999, must-revalidate',
//             }],
//         }, ]
//     },
// };