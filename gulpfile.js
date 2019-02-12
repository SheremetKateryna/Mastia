var gulp = require('gulp');

var less = require('gulp-less');
var path = require('path');
let cleanCSS = require('gulp-clean-css');
var pug = require('gulp-pug');
var imagemin = require('gulp-tinypng');

gulp.task('styles', function () {
  return gulp.src('./dev/style/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dest/style'));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('dev/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

var tinypng = require('gulp-tinypng');
 
gulp.task('tiny', function () {
    gulp.src('dev/img/*.png')
    gulp.src('dev/img/*.jpg')
        .pipe(tinypng('09tccvR9rNpw9s8gmt7ghYbw7Lfpz2qr'))
        .pipe(gulp.dest('./img'));
});

var svgo = require('gulp-svgo');
 
gulp.task('svg', () => {
 
    return gulp.src('dev/img/*.svg')
        .pipe(svgo())
        .pipe(gulp.dest('./img'));
});

const webp = require('gulp-webp');
 
gulp.task('webp', () =>
    gulp.src('dev/img/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('./img'))
);


gulp.task('watch', function () {
   gulp.watch('dev/bem/*/*.less', gulp.series(['styles']));
   gulp.watch('dev/bem/*/*.pug', gulp.series(['pug']));
   gulp.watch('dev/data/*.pug', gulp.series(['pug']));
   gulp.watch('dev/pages/*.pug', gulp.series(['pug']));

});

gulp.task('default', gulp.series(['styles', 'watch', 'pug']));
