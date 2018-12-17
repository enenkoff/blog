/* common variables */

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger'),
    rename = require("gulp-rename"),
    newer = require('gulp-newer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');


/* css variables */

var sass = require('gulp-sass'),
    cssmin = require('gulp-clean-css'),
    postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    stylefmt = require('stylefmt'),
    configFmt = require('./stylefmt.config'),
    mqpacker = require('css-mqpacker');

/* js variables */

var webpack = require('webpack-stream'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    connect = require('gulp-connect'),
    copy = require('gulp-copy'),
    uglify = require('gulp-uglify');

/* paths */

var path = {
    build: {
        root: './',                                /* path to ready htmls */
        js: './assets/js/',                        /* path to ready js */
        css: './assets/css/',                      /* path to ready css */
        img: './assets/images/',                         /* path to ready images */
        media: './assets/media/',                  /* path to ready media-files */
        svg: './assets/svg/',                      /* path to ready svg */
        fonts: './assets/fonts/'                   /* path to ready fonts */
    },
    src: {
        common: 'src/',                                   /* path to source folder */
        svg: 'src/svg/',                                  /* path to source svg folder */
        media: 'src/media/**/*.*',                        /* path to source media files */
        fonts: 'src/fonts/**/*.*',                        /* path to source fonts folder */
        js: 'src/js/',                                    /* path to source js folder */
        html_templates: 'src/_code/templates/',           /* path to source html all files */
        html_pages: 'src/_code/pages/*.html',             /* path to source html page-files */
        sass: 'src/sass/**/*.+(sass|scss)',               /* path to source sass files */
        // img: 'src/_code/pages/views/uploads/**/*.+(jpg|jpeg|png|gif)'
        img: 'src/img/**/*.+(jpg|jpeg|png|gif)' /* path to source images files */
    },
    watch: {
        html: 'src/_code/**/*.html',                      /* path for watch html files */
        js: 'src/js/**/*.js',                             /* path for watch js files */
        img: 'src/img/**/*.+(jpg|jpeg|png|gif)',          /* path for watch img files */
        vue: 'src/js/components/**/*.vue',                /* path for watch vue files */
        style: 'src/sass/**/*.scss'                       /* path for watch sass files */
    },
    clean: './'                                     /* path for browsersync directory */
};

/* browser sync */

gulp.task('webserver',function () {
    browserSync({
        server: path.clean,
        host: 'localhost',
        browser: 'chrome',
        port: 7070,
        notify: false
    })
});

// Run webpack
gulp.task('webpack', function(){
    return gulp.src('src/js/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('assets/js/'))
        .pipe(browserSync.reload({stream: true}));
});

/* minimize images */

gulp.task('compress:img', function () {
    gulp.src(path.src.img)
        .pipe(newer(path.build.img))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

// Copy index.html file
gulp.task('build:css', function(){
    gulp.src(path.src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sass().on('error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass ошибка!"
            }))
        )
        .pipe(
            postcss([
                autoprefix({
                    browsers:['last 10 versions']
                }),
                mqpacker(),
                stylefmt(configFmt)
            ])
        )
        .pipe(gulp.dest(path.build.css))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.css))
        .pipe(notify( 'Готово!' ) )
        .pipe(browserSync.reload({stream: true}));
});

// Default task
gulp.task('default', ['webpack', 'webserver', 'build:css', 'compress:img'], function () {
    gulp.watch(path.watch.style,['build:css']);
    gulp.watch(path.watch.vue, ['webpack']);
    gulp.watch(path.watch.img, ['compress:img']);
});