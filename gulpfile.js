var gulp =              require('gulp');
var clean =             require('gulp-clean');
var sass =              require('gulp-sass');
var concat =            require('gulp-concat');
var uglify =            require('gulp-uglify');
var browserSync =       require('browser-sync').create();
var rev =               require('gulp-rev');
var RevAll =            require('gulp-rev-all');
var revReplace =        require('gulp-rev-replace');
var filter =            require('gulp-filter');

var gutil  =            require('gulp-util');
var argv   =            require('minimist')(process.argv);
var gulpif =            require('gulp-if');
var prompt =            require('gulp-prompt');
var rsync =             require('gulp-rsync');

// ===================


// CLEAN
gulp.task('clean', function () {  
    return gulp.src('build', {read: false})
        .pipe(clean());
});
// ===================


// GULP CONCAT - minify JS files into one
// GULP CACHE-BUSTING
var manifestFolder = './app/manifest-js/';
gulp.task("gulp-rev", function(){
    var fileToInject = [
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
    ];
    var outputFolderJs = './app/js';
    return gulp.src(fileToInject)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(RevAll.revision())
        .pipe(gulp.dest('./app/js/'))
        .pipe(RevAll.manifestFile())
        .pipe(gulp.dest(manifestFolder))
        .pipe(rev.manifest())
        .pipe(gulp.dest(manifestFolder))
        .pipe(browserSync.reload({stream: true}));
});
// ===================


// GULP REPLACE FILENAME SO HTML USES NEW/UNIQUE GENERATED FILENAME :D Winning!!!!
gulp.task("revreplace", ["gulp-rev"], function() {
    var manifest = gulp.src(manifestFolder + "rev-manifest.json");
    var source = "./app/index.html";
    var outputFolderHtml = './app';
    return gulp.src(source)
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest(outputFolderHtml))
        .pipe(browserSync.reload({stream: true}));
});
// ===================


// SASS BUILD
gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./app/css/'))
        .pipe(browserSync.reload({stream: true}));
});
// ===================


// HTML
gulp.task('html', function() {
    gulp.src([
        './app/index.html',
        './app/app/views/*'
        ])
        .pipe(browserSync.reload({stream: true}));
});
// ===================


// LIVE RELOAD - BROWSERSYNC
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './app'
        },
    })
});
// ===================


// CREATE BUILD FILES
gulp.task('buildFolder', function() {
    gulp.src([
        '*app/app/views/**/*',
        '*app/css/**/**/*',
        '*app/cv/*',
        '*app/fonts/*',
        '*app/images/**/*',
        '*app/js/**/*',
        '*app/portfolio/**/**/*',
        '*app/index.html',
        '*app/.htaccess'
        ])
        .pipe(gulp.dest('./build/'));
});
// ===================


// CREATE DEPLOY FILES
gulp.task('deployFolder', function() {
    gulp.src(['./build/app/**/**/**/*', './build/app/.htaccess'])
        .pipe(gulp.dest('./deploy/'));
});
// ===================


// WATCH TASK
// gulp.task('default', ['browserSync', 'sass', 'revreplace', 'gulp-rev', 'build', 'deploy', 'sshdeploy'], function() {
gulp.task('default', ['browserSync', 'sass', 'revreplace', 'gulp-rev', 'buildFolder', 'deployFolder'], function() {
    gulp.watch('./sass/**/*.scss', ['sass', 'buildFolder', 'deployFolder']);
    gulp.watch('./app/fonts/*', ['fonts', 'buildFolder', 'deployFolder']);
    gulp.watch([
        './app/app/routes.js', 
        './app/app/firebase-config.js', 
        './app/app/app.js', 
        './app/app/**/**/*.js'
    ], 
    ['gulp-rev', 'buildFolder', 'deployFolder']);
    gulp.watch([
        './app/index.html',
        './app/app/views/*',
    ], ['html', 'buildFolder', 'deployFolder']);
});
// ===================
