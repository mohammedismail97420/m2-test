/* @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: [
      "picsum.photos",
      "xtwostore-ae01a.web.app",
      "i.ibb.co",
      "ibb.co",
      "dummyimage.com",
      "media.xtwostore.de",
    ],
  },

  i18n: {
    locales: ["en_GB", "de_DE", "fr_FR", "zh_CN"],
    defaultLocale: "en_GB",
    localeDetection: false,

    domains: [
      {
        domain: "xtwostore-dev.de",
        defaultLocale: "de_DE",
      },
      {
        domain: "xtwostore-dev.fr",
        defaultLocale: "fr_FR",
      },
      {
        domain: "xtwostore-dev.cn",
        defaultLocale: "zh_CN",
      },
      {
        domain: "xtwostore-dev.cz",
        defaultLocale: "en_GB",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://m2.xtwodev.store/rest/:path*",
      },
    ];
  },
};
