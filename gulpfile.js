var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// CLEAN
gulp.task('clean', function () {  
  return gulp.src('build', {read: false})
    .pipe(clean());
});

// GULP CONCAT - minify JS files into one
gulp.task('scripts', function() {
    gulp.src(
        [
            './app/app/app.js',
            './app/app/routes.js',
            './app/app/modules/main/appModule.js',
            './app/app/modules/scrollto/scrolltoModule.js',
            './app/app/modules/closenav/closenavModule.js',
            './app/app/modules/parallaxscrolling/parallaxscrollingModule.js',
            './app/app/modules/navcollapse/navcollapseModule.js',
            './app/app/modules/contactform/contactformModule.js',
            './app/app/modules/limitchar/limitcharModule.js',
            './app/app/firebase-config.js'
        ])
        .pipe(concat('all.min.' + Date.now() + '.js'))
        // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/js/'))
        .pipe(browserSync.reload({stream: true}));
});

// SASS
gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./app/css/'))
        .pipe(browserSync.reload({stream: true}));
});

// LIVE RELOAD - BROWSERSYNC
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './app'
        },
    })
});

// WATCH TASK
gulp.task('default', ['browserSync', 'sass', 'scripts'], function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./node_modules/font-awesome/fonts/*', ['fonts']);
    gulp.watch([
        './app/app/routes.js', 
        './app/app/firebase-config.js', 
        './app/app/app.js', 
        './app/app/**/**/*.js'
    ], 
    ['scripts']);
});