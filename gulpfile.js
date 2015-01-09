var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('lint', function () {
  return gulp.src([ 'Gruntfile.js', 'index.js', 'test/test-*.js' ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function () {
  return gulp.src('test.js', { read: false })
    .pipe(mocha({ /*reporter: 'nyan'*/ }));
});

gulp.task('default', [ 'lint', 'test' ]);

