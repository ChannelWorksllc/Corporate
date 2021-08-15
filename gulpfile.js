'use strict';

const changed = require('gulp-changed');

// scssコンパイル
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const SCSS_SRC = './public/Assets/scss/**/*.scss';
const SCSS_DEST = './public/Assets/css';

gulp.task('compile_scss', () => {

    return gulp
    .src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));

});


gulp.task('watch_scss', () => {
    gulp.watch(SCSS_SRC, gulp.task('compile_scss'));
});

// img圧縮
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

gulp.task('imagemin', () => {

  return gulp
  .src('./src/saveImg/**')
  .pipe(changed('./src/img'))
  .pipe(
    imagemin([
      pngquant({
        quality: [.60, .70],
        speed: 1
      }),
      mozjpeg({ quality: 65 }),
      imagemin.svgo(),
      imagemin.optipng(),
      imagemin.gifsicle({ optimizationLevel: 3 })
    ])
  )
  .pipe(gulp.dest('./src/img'));
});

gulp.task('watch_imagemin', () => {
  gulp.watch('./src/saveImg/**', gulp.task('imagemin'));
});

gulp.task('default', gulp.parallel('watch_scss', 'watch_imagemin'));

