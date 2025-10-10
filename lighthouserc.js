
module.exports = {
  ci: {
    collect: {
      // The URL of your live staging site.
      url: ['https://stg.triple-g.dev'],
      url: ['https://stg.triple-g.dev/portfolio'],
      url: ['https://stg.triple-g.dev/contact'],
      url: ['https://stg.triple-g.dev/about-me' ],
      url: ['https://stg.triple-g.dev/gadgets'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'filesystem',
      outputDir: './web/lhci_reports',
    },
  },
};
