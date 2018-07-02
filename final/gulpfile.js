'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./style/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../style/build'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./style/sass/style.scss',  ['sass']);
});