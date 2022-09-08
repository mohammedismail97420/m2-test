/* @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["picsum.photos", "xtwostore-ae01a.web.app", "i.ibb.co", "ibb.co"],
  },

  localeDetection: false,

  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      {
        domain: "xtwostore.com",
        defaultLocale: "en",
      },
      {
        domain: "xtwostore.de",
        defaultLocale: "de",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://m2.xtwodev.store/rest/:path*",
      },
    ];
  },
};
