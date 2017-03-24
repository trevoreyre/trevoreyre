// Require Gulp other packages
var autoprefixer = require('autoprefixer');
// var changed = require('gulp-changed');
// var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var cssnano = require('cssnano');
var ftp = require('vinyl-ftp');
var gulp = require('gulp');
var gutil = require('gulp-util');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

// Require config file for FTP server info
var config = require('../config/trevoreyreConfig');

// Define source/destination paths for build and deploy tasks
var buildSrc = {
    'html': ['./src/**/*.html', '!./src/layout.html'],
    'htmlWrap': './src/layout.html',
    'scripts': './src/**/*.js',
    'styles': './src/**/*.scss',
    'php': './src/**/*.php',
    'res': './res/**/*'
};
var buildDest = './dist/';
var deploySrc = './dist/**/*';

// Set up FTP connection
var deployDestination = config.deployDestination;
var deployDestinationProd = config.deployProductionDestination;
var conn = ftp.create({
    host: config.serverHost,
    user: config.serverUser,
    password: config.serverPassword,
    parallel: 5,
    log: gutil.log
});

// Deploy function. If source files are located in 'dist' or 'res' folders,
// function strips first folder, to put files in base directory. If source
// files are in a different base folder, the original file structure is
// preserved.
var deploy = function (destination, inputStream) {
    return inputStream
        .pipe(rename(function (path) {
            var parts = path.dirname.split('\\');
            if (parts[0] == 'dist' || parts[0] == 'res') {
                parts.splice(0, 1);
            }
            path.dirname = parts.join('\\');
        }))
        .pipe(conn.dest(destination));
};

// Default task
gulp.task('default', ['start']);

// Build task
gulp.task('build', ['html', 'scripts', 'styles', 'php'], function () {
    return gulp.src(buildSrc.res)
        .pipe(gulp.dest(buildDest));
});

gulp.task('start', ['build', 'watch'], function () {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
});

// Deploy to development server
gulp.task('deploy', ['build'], function () {
    return deploy(
        deployDestination,
        gulp.src(
            deploySrc,
            {base: '.', buffer: false}
        )
    );
});

// Deploy to production server
gulp.task('deployProduction', ['build'], function () {
    return deploy(
        deployDestinationProd,
        gulp.src(
            deploySrc,
            {base: '.', buffer: false}
        )
    );
});

// HTML layout task
gulp.task('html', function () {
    return gulp.src(buildSrc.html)
        .pipe(wrap({src: buildSrc.htmlWrap}))
        .pipe(gulp.dest(buildDest))
});

// Scripts task
gulp.task('scripts', function () {
    return gulp.src(buildSrc.scripts)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(buildDest))
        .pipe(browserSync.stream());
});

// Styles task
gulp.task('styles', function () {
    return gulp.src(buildSrc.styles)
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions']
            }),
            cssnano()
        ]))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(buildDest))
        .pipe(browserSync.stream());
});

// PHP task. Just pushes changed PHP files to dist folder
gulp.task('php', function () {
    return gulp.src(buildSrc.php)
        .pipe(gulp.dest(buildDest))
        .pipe(browserSync.stream());
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(buildSrc.html, ['html']);
    gulp.watch(buildSrc.htmlWrap, ['html']);
    gulp.watch(buildSrc.scripts, ['scripts']);
    gulp.watch(buildSrc.styles, ['styles']);
    gulp.watch(buildSrc.php, ['php']);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
});
