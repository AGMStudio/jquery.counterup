var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
    gulp.src('jquery.counterup.js')
        .pipe(uglify())
        .pipe(rename('jquery.counterup.min.js'))
        .pipe(gulp.dest('.'));
});