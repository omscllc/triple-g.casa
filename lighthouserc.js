
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        preset: "desktop"
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
