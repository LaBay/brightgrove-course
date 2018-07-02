'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
 
gulp.task('sass', function () {
  return gulp.src('./style/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style/style'))
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./style/sass/*.scss', ['sass']);
});

/*
gulp sass:watch
*/