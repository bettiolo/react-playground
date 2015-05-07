react-playground
================

My very personal opinionated Isomorphic React Golden Setup

- Isomorphic React via express + babel
- React component dependencies resolved using ES6 modules
- Browser bundling via browserify
- CDN dependencies' shim via browserify-shim
- Transpiled from ES6/JSX to ES5 via babelify
- Minified via gulp-uglify
- JSX Source maps working with the minified bundles via gulp-sourcemaps
- Linted via eslint + babel-eslint
- Tasks via gulp
- Event loop blocked checks via blocked

Todo:
- Run ESLint from gulp
- Configure browserify-shim from gulp
- Better understand [error handling in gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/combining-streams-to-handle-errors.md)
