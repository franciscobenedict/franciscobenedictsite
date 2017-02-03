var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// GULP CONCAT - minify JS files into one
gulp.task('scripts', function() {
    gulp.src(
        [
            // 'https://code.jquery.com/jquery-1.11.2.min.js',
            // 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js',
            // 'https://npmcdn.com/ng-formio@latest/dist/formio-complete.min.js',
            // 'cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.min.js',
            // 'ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js',
            // 'https://cdn.firebase.com/js/client/2.2.4/firebase.js',
            // 'https://cdn.firebase.com/libs/angularfire/1.1.2/angularfire.min.js',
            // 'https://www.gstatic.com/firebasejs/3.6.0/firebase.js',
            // 'https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.5.8/angular-sanitize.min.js',
            // 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js',
            // './app/js/vendor/ngparallax/ngParallax.min.js',
            // './app/js/vendor/ngscrollspy/ng-ScrollSpy.js',

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
        .pipe(concat('all' + Date.now() + '.js'))
        // .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./app/js/'));
});

// SASS
gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./app/css/'));
});

// WATCH TASK
gulp.task('default',function() {
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./node_modules/font-awesome/fonts/*', ['fonts']);
    gulp.watch([
        './app/app/routes.js', 
        './app/app/firebase-config.js', 
        './app/app/app.js', 
        './app/app/**/**/*.js'
    ], 
    ['scripts']);

    // gulp.watch('./app/*.html', ['serve']);
});
