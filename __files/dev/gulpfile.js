/* gulp variables */

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    svgstore = require('gulp-svgstore'),
    injectSvg = require('gulp-inject-svg'),
    imagemin = require('gulp-imagemin'),
    include = require('gulp-html-tag-include'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    cssmin = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    newer = require('gulp-newer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');


/* postcss variables */

var postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    stylefmt = require('stylefmt'),
    configFmt = require('./stylefmt.config'),
    mqpacker = require('css-mqpacker');


/* paths */

var path = {
    build: {
        root: '../',                                /* path to ready htmls */
        html: '../views/',                                /* path to ready htmls */
        js: '../assets/js/',                        /* path to ready js */
        css: '../assets/css/',                      /* path to ready css */
        img: '../views/uploads/',                         /* path to ready images */
        media: '../views/assets/media/',                  /* path to ready media-files */
        svg: '../views/assets/svg/',                      /* path to ready svg */
        fonts: '../views/assets/fonts/'                   /* path to ready fonts */
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
        img: 'src/_code/pages/views/uploads/**/*.+(jpg|jpeg|png|gif)' /* path to source images files */
    },
    watch: {
        html: 'src/_code/**/*.html',                      /* path for watch html files */
        js: 'src/js/**/*.js',                             /* path for watch js files */
        style: 'src/sass/**/*.scss'                       /* path for watch sass files */
    },
    clean: '../'                                     /* path for browsersync directory */
};


/* browser sync */

gulp.task('browser-sync',function () {
    browserSync({
        server: path.clean,
        host: 'localhost',
        browser: 'chrome',
        port: 7070,
        notify: false
    })
});


/* create svg sprite */

gulp.task('svg-sprite', function(){
    gulp.src(path.src.svg + 'sprite/*.svg')
        .pipe(newer(path.build.svg))
        .pipe(svgstore())
        .pipe(gulp.dest(path.src.svg))
        .pipe(gulp.dest(path.build.svg));

    gulp.src([path.src.svg + '**/*.svg','!' + path.src.svg + 'sprite.svg'])
        .pipe(newer(path.build.svg))
        .pipe(gulp.dest(path.build.svg));
});


gulp.task('svg', ['svg-sprite'], function(){

    gulp.src(path.src.svg + 'sprite-svg.html')
        .pipe(injectSvg({
            base: path.src.svg
        }))
        .pipe(gulp.dest(path.src.html_templates));

});

/* minimize images */

gulp.task('img', function () {
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

/* media */

gulp.task('media', function(){
    gulp.src(path.src.media)
        .pipe(gulp.dest(path.build.media))
});

/* fonts */

gulp.task('fonts', function(){
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


/* builders */

gulp.task('builder:html', ['img'], function () {
    gulp.src(path.src.html_pages)
        .pipe(include())
        .pipe(gulp.dest(path.build.html))
        .pipe(gulp.dest(path.build.root))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('builder:js', function () {
    gulp.src(path.src.js + 'main.js')
        .pipe(sourcemaps.init())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('builder:css', function () {
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



/* watch changes */

gulp.task('watch', ['svg', 'builder:css', 'builder:html', 'builder:js', 'browser-sync'], function () {
    gulp.watch(path.watch.style,['builder:css']);
    gulp.watch(path.watch.html, ['builder:html']);
    gulp.watch(path.watch.js, ['builder:js']);
});

/* dafault tasks */

gulp.task('default', function () {
    gulp.run('watch');
});
