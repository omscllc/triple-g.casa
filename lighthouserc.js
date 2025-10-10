
module.exports = {
  ci: {
    collect: {
      // The URL of your live staging site.
      url: ['https://stg.triple-g.dev'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
