var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  styles: [
  	'./css/style.styl',
  ],
  doc: [
    './css/doc.styl'
  ]
};

gulp.task('stylus', function () {
  return gulp.src(paths.styles)
    .pipe(stylus({
      compress: true
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Firefox > 20', '> 5%'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('doc', function () {
  return gulp.src(paths.doc)
    .pipe(stylus({
      compress: true
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Firefox > 20', '> 5%'],
        cascade: false
    }))
    .pipe(gulp.dest('./css'));
});


gulp.task('default', ['stylus', 'doc']);