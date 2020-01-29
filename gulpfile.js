'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();
var svgmin = require('gulp-svgmin');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

gulp.task("watch", function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass')).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Минификатор css
gulp.task('csso', function () {
    return gulp.src('css/style.css')
        .pipe(csso())
        .pipe(gulp.dest('./css/min-style'));
});

// запуск browserSync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// оптимизация svg
gulp.task('svg', function () {
    return gulp.src('img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./optimize-svg'));
});

// оптимизация img
gulp.task('img', function() {
    return gulp.src('img/**/*')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.gifsicle({interlaced: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('opt-images'));
  });

//кодирование jpg в webp
gulp.task('webp', exports.default = () => (
	gulp.src('img/**/*.jpg')
		.pipe(webp({
            quality: 80,
            preset: 'photo',
            method: 6
        }))
		.pipe(gulp.dest('opt-webp'))
));
