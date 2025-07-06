// gulpfile.js

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Use the Dart Sass compiler
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');

// Define your source and destination paths
const paths = {
  scss: './src/scss/triple-g.scss',         // All .scss files in src/scss and its subdirectories
  css: './dist/css/',                       // Output directory for compiled CSS
  components: './src/css/components/*.css', // starterkit css files moved to src to keep things consistent
  target: './dist/css/components/'
};

/**
 * Task to compile SCSS to CSS, minify, and generate source maps.
 */
function compileSass() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init()) // Initialize sourcemaps before any transformations
    .pipe(sass().on('error', sass.logError)) // Compile Sass, log errors
    .pipe(cleanCSS()) // Minify the compiled CSS
    .pipe(sourcemaps.write('./maps')) // Write sourcemaps to a 'maps' subdirectory in the output
    .pipe(gulp.dest(paths.css)) // Save the compiled and minified CSS to the destination
}

function copyCss() {
  return gulp.src(paths.components)
  .pipe(gulp.dest(paths.target));
}

/**
 * Watch task to automatically recompile SCSS on changes.
 */
function watchSass() {
  gulp.watch(paths.scss, compileSass);
}

// Export tasks
exports.compile = gulp.series(compileSass, copyCss); // You can run this with `gulp compile`
exports.watch = watchSass;     // You can run this with `gulp watch`
exports.default = gulp.series(compileSass, watchSass); // Default task runs compile then watches
