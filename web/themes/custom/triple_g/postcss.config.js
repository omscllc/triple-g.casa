module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-inline-svg': {
      removeFill: true,
      paths: ['./node_modules/bootstrap-icons/icons']
    },
    'postcss-pxtorem': {
      propList: ['font', 'font-size', 'line-height', 'letter-spacing', '*margin*', '*padding*'],
      mediaQuery: true
    }
  }
};
