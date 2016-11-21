var gulp = require('gulp');
var sass = require('gulp-sass');

// MIDDLEWARE
var webserver = require('gulp-webserver');
gulp.task('webserver', function() {
	gulp.src('./app')
	.pipe(webserver({
		livereload: {
			enable: true, // need this set to true to enable livereload 
			filter: function(fileName) {
				if (fileName.match(/.map$/)) { // exclude all source maps from livereload 
					return false;
				} else {
					return true;
				}
			}
		},
		directoryListing: true,
		open: true,
		fallback: './app/index.html'
	}));
});

// var historyApiFallback = require('connect-history-api-fallback');
// gulp.task('serve', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: 'app',
// 			middleware: [ historyApiFallback() ]
// 		}
// 	});
// });

// MIDDLEWARE
// var connect = require('gulp-connect');
// gulp.task('connect', function() {
// 	connect.server({
// 		root: __dirname,
// 		livereload: true,

// 		middleware: function(connect, opt) {
// 			return [ historyApiFallback ];
// 		}
// 	});
// });



// gulp.task('serve', function() {
//     connect.server({
//       root: 'app',
//       fallback: './app/index.html',
//       livereload: true//,
//       // port: 3000,
//       // host: '192.168.1.101',
//     });
//     // gulp.src('./app/*.html')
//     // 	.pipe(connect.reload())
// });


// var history = require('connect-history-api-fallback');
// var historyApiFallback = require('connect-history-api-fallback');

// gulp.task('serve', function() {
// 	browserSync.init({
// 		// proxy: {
// 		// 	target: 'localhost:' + port,
// 		// 	middleware: [ historyApiFallback() ]
// 		// }

// 		server: {
// 			baseDir: "./app",
// 			middleware: [ historyApiFallback() ]
// 		}
// 	});
// });


// SASS
gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./app/css/'))
});


// FONTS
gulp.task('fonts', function() {
	gulp.src('./node_modules/font-awesome/fonts/*')
    	.pipe(gulp.dest('./app/fonts/'))

	// gulp.src('./node_modules/font-awesome/css/*.css')
 // 		.pipe(gulp.dest('./app/css/'))
});


// WATCH TASK
gulp.task('default',function() {
    gulp.watch('./sass/**/*.scss',['styles']);
    gulp.watch('./node_modules/font-awesome/fonts/*', ['fonts']);
    // gulp.watch('./app/*.html', ['serve']);
});
