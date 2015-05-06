'use strict';
let gulp = require("gulp");
let browserify = require('browserify');
let babelify = require('babelify');
let exorcist = require('exorcist');
let source = require('vinyl-source-stream');

gulp.task('browserify', () => {
  browserify({ debug: true }) // setting debug: true enables source maps
    .transform(babelify)
    .require("./components/app.jsx", { entry: true })
    .bundle()
    .pipe(exorcist('dist/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
  return gulp.src('dist/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['browserify']);
