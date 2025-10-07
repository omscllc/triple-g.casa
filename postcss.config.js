module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './web/themes/custom/triple_g/templates/**/*.twig',
        './web/themes/custom/triple_g/**/*.php',
        './web/themes/custom/triple_g/js/**/*.js'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};
