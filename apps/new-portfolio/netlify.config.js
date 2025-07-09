module.exports = {
  siteId: process.env.NETLIFY_SITE_ID_PORTFOLIO_V2,
  buildCommand: 'pnpm run build',
  dist: '.output/public',
  build: {
    publish: '.output/public',
  },
};
