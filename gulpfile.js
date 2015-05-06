/*eslint-disable no-console, strict */
'use strict';
let gulp = require('gulp');
let rename = require('gulp-rename');
let del = require('del');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

const reactApp = './components/app.jsx';
const destination = './dist';

gulp.task('clean', (cb) => del([ 'dist/'], cb));

gulp.task('browserify', ['clean'], () => {
  let bundler = browserify({
    debug: true, // append source maps
    transform: [ babelify ] // transpile es6/jsx to es5
  });
  return bundler
    .require(reactApp, { entry: true }) // React app's entry point
    .bundle() // generates a single stream with inline source maps
    .pipe(source('bundle.js')) // bundled output file name
    .pipe(gulp.dest(destination)); // write minimised file and source maps to disk
});

gulp.task('minify', ['browserify'], () => {
  gulp.src('./dist/bundle.js')
    .pipe(sourcemaps.init({ loadMaps: true })) // load existing source maps
      .pipe(uglify()) // minimise bundled file
      .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('./')) // create source maps
    .pipe(gulp.dest(destination)); // write minimised file and source maps to disk
});

gulp.task('build', ['browserify', 'minify']);
