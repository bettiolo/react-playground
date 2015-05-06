/*eslint-disable no-console, strict */
'use strict';
let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

gulp.task('browserify', () => {
  let bundler = browserify({
    debug: true, // append source maps
    transform: [ babelify ] // transpile es6/jsx to es5
  });
  return bundler
    .require('./components/app.jsx', { entry: true }) // React app's entry point
    .bundle() // generates a single stream with inline source maps
    .pipe(source('bundle.js')) // bundled output file name
    .pipe(buffer()) // convert streaming vinyl files to use buffers
    .pipe(sourcemaps.init({ loadMaps: true })) // load existing source maps
      .pipe(uglify()) // minimise bundled file
      .on('error', console.error.bind(console)) // write errors to console
    .pipe(sourcemaps.write('./')) // create source maps
    .pipe(gulp.dest('./dist')); // write minimised file and source maps to disk
});

gulp.task('build', ['browserify']);
