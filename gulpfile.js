var gulp = require('gulp');
var sass = require('gulp-sass');


// SASS
gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./app/css/'))
});


// WATCH TASK
gulp.task('default',function() {
    gulp.watch('./sass/**/*.scss',['styles']);
    gulp.watch('./node_modules/font-awesome/fonts/*', ['fonts']);
    // gulp.watch('./app/*.html', ['serve']);
});
