'use strict';

var GLOBAL = {
    dirs: {
        gulp: './gulp/',
        sass: './src/sass/',
        jade: './src/jade/',
        docs: './src/documentation/',
        assets: './assets/',
        css: './assets/css/',
        libs: './libs/',
        themeforest: './themeforest/'
    },
    themeName: 'moderat'
};

var gulp = require('gulp');

// zara add this//
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

/////////////////////////////////////////////////


//-zara end this----------------------------


gulp.task('sass', require(GLOBAL.dirs.gulp + 'sass')(GLOBAL, gulp));
gulp.task('min:css', require(GLOBAL.dirs.gulp + 'build')(GLOBAL, gulp));
gulp.task('jade', require(GLOBAL.dirs.gulp + 'jade')(GLOBAL, gulp));
gulp.task('watch', require(GLOBAL.dirs.gulp + 'watch')(GLOBAL, gulp));
gulp.task('imagemin', require(GLOBAL.dirs.gulp + 'imagemin')(GLOBAL, gulp));

gulp.task('themeforest', ['themeforest:build'], function () {
    gulp.start(['themeforest:pixelate', 'themeforest:mailconfig']);
});

gulp.task('themeforest:build', require(GLOBAL.dirs.gulp + 'themeforest/build')(GLOBAL, gulp));
gulp.task('themeforest:pixelate', require(GLOBAL.dirs.gulp + 'themeforest/pixelate')(GLOBAL, gulp));
gulp.task('themeforest:mailconfig', require(GLOBAL.dirs.gulp + 'themeforest/mailconfig')(GLOBAL, gulp));
gulp.task('themeforest:zip', require(GLOBAL.dirs.gulp + 'themeforest/zip')(GLOBAL, gulp));

gulp.task('default', ['sass', 'jade', 'watch']);

gulp.task('docs', require(GLOBAL.dirs.gulp + 'docs')(GLOBAL, gulp));

// ----------------------------------------------------------

// zara add gulp here
// 'use strict';
 
// var gulp = require('gulp');
// var sass = require('gulp-sass');
 
// gulp.task('sass', function () {
//   return gulp.src('./scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./scss/**/*.scss', ['sass']);
// });

// ------zara add above end here--------------------------------------------------------

