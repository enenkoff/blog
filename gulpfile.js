var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');

// Run webpack
gulp.task('webpack', function(){
    return gulp.src('src/js/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('assets/js/'))
        .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: ''
    });
});

// Copy index.html file
gulp.task('build.index', function(){
    // return gulp.src('./src/index.html')
    //     .pipe(gulp.dest('./dist'));
});

// Default task
gulp.task('default', ['webpack', 'webserver', 'build.index']);