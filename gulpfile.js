const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('pages', () => {
  return gulp.src('./src/views/pages/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('./dist'))
})

gulp.task('views', () => {
  return gulp.src('./src/views/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('./dist'))
})

gulp.task('styles', () => {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'))
})

gulp.task('webp', () => {
  return gulp.src('./src/images/*')
  .pipe(webp())
  .pipe(gulp.dest('./public/images'))
})

gulp.task('imageop', () => {
  return gulp.src('./src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/images'))
})

gulp.task('default', () => {
  gulp.watch('./src/views/**/*.pug', gulp.series('views', 'pages'))
  gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
})
