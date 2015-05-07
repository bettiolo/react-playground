/*eslint-disable strict */
'use strict';
let gulp = require('gulp');
let rename = require('gulp-rename');
let del = require('del');
let browserify = require('browserify');
let shim = require('browserify-shim');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

const reactApp = './components/_bootstrap-client.jsx';
const bundle = 'bundle.js';
const baseDestination = './dist/';
const jsDestination = './dist/js/';

gulp.task('clean', (cb) => del([ baseDestination ], cb));

gulp.task('browserify', ['clean'], () => {
  return browserify({ debug: true /* append source maps */ })
    .transform(babelify) // transpile es6/jsx to es5
    .transform(shim) // provide shims for CDN resources
    .require(reactApp, { entry: true }) // React app's entry point
    .bundle() // generates a single stream with inline source maps
    .pipe(source(bundle)) // bundled output file name
    .pipe(gulp.dest(jsDestination)); // write minimised file and source maps to disk
});

gulp.task('minify', ['browserify'], () => {
  gulp.src(jsDestination + bundle)
    .pipe(sourcemaps.init({ loadMaps: true })) // load existing source maps
      .pipe(uglify()) // minimise bundled file
      .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('./')) // create source maps
    .pipe(gulp.dest(jsDestination)); // write minimised file and source maps to disk
});

gulp.task('build', ['browserify', 'minify']);
