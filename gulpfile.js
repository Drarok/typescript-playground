const gulp = require('gulp');

const browserify = require('browserify');
const express = require('express');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

gulp.task('copy-views', () => {
  return gulp
    .src('./app/**/*.html', { base: './app/' })
    .pipe(gulp.dest('./web/'));
});

function getBundler() {
  let browserifyOptions = {
    entries: './app/ts/main.ts',
    basedir: '.',
    debug: true,
    cache: {},
    packageCache: {}
  };

  return browserify(browserifyOptions)
    .plugin(tsify);
}

gulp.task('bundle', () => {
  return getBundler()
    .bundle()
    .on('error', console.error)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./web'));
});

gulp.task('serve', () => {
  let app = express();

  app.use(express.static('web'));

  let port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`WTF app listening at http://localhost:${port}/`);
  });
});

gulp.task('default', ['bundle', 'copy-views', 'serve']);
