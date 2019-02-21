var gulp = require('gulp');

var less = require('gulp-less');
var path = require('path');
let cleanCSS = require('gulp-clean-css');
var pug = require('gulp-pug');
var imagemin = require('gulp-tinypng');
var tinypng = require('gulp-tinypng');
var svgo = require('gulp-svgo');
const webp = require('gulp-webp');
var cleanhtml = require('gulp-cleanhtml');

/* IMGs */

gulp.task('tiny', function () {
    return gulp.src('dev/img/*.{png,jpg,jpeg}')
        .pipe(tinypng('09tccvR9rNpw9s8gmt7ghYbw7Lfpz2qr'))
        .pipe(gulp.dest('./img'));
});

gulp.task('svg', () => {
    return gulp.src('dev/img/*.svg')
        .pipe(svgo())
        .pipe(gulp.dest('./img'));
});

gulp.task('webp', () =>
    gulp.src('dev/img/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('./img'))
);

/* CSS */

gulp.task('styles', function () {
  return gulp.src('./dev/style/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dest/style'));
});

gulp.task('minify-css', () => {
  return gulp.src('dest/style/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dest/style'));
});

/* HTML */

gulp.task('pug', function buildHTML() {
  return gulp.src('dev/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dest/pages'))
});

gulp.task('minify-html', function(){
  return gulp.src('dest/pages/*.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('./'));
});

/* watch */

gulp.task('watch', function () {
   gulp.watch('dev/bem/*/*.less', gulp.series(['styles']));
   gulp.watch('dev/bem/*/*.pug', gulp.series(['pug']));
   gulp.watch('dev/data/*.pug', gulp.series(['pug']));
   gulp.watch('dev/pages/*.pug', gulp.series(['pug']));
   gulp.watch('dest/pages/*.html', gulp.series(['minify-html']));

});


/* default */

gulp.task('default', gulp.series(['styles', 'minify-css','pug', 'minify-html', 'watch']));
