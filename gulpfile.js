'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var merge = require('merge-stream');

sass.compiler = require('node-sass');

gulp.task('build', function() {
  var normalize = gulp.src('./src/normalize.css')
    .pipe(gulp.dest('./dist'));
  var motus = gulp.src('./src/motus.sass')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist'));
  var components = gulp.src('./src/components/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/components'));
 return merge(normalize, motus, components)
});
