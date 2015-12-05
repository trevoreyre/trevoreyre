// gulpfile.js

// Require gulp
var gulp = require('gulp');

// Require other packages
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

// Require config file for FTP server info
var config = require('./config.json');

// Default task
gulp.task('default', ['deployAll', 'watch']);

// FTP connection
var conn = ftp.create({
    host: config.serverHost,
    user: config.serverUser,
    password: config.serverPassword,
    parallel: 5,
    log: gutil.log
});

// Directory to deploy files
var deployDestination = config.deployDestination;

// Deploy all files. Simply kicks off all other deploy tasks. Also uploads any new image files.
gulp.task('deployAll', ['deployLayout', 'deployScripts', 'deployStyles'], function () {
    var deployFiles = [
        './dist/img/*'
    ];

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(rename(function (path) {
            var parts = path.dirname.split('\\');
            parts.splice(0, 1);
            path.dirname = parts.join('\\');
        }))
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// Deploy changed html files after running 'layout' task
gulp.task('deployLayout', ['layout'], function () {
    var deployFiles = [
        './dist/**/*.html',
        '!./dist/styles/**/*' // Ignore html files defining Polymer styles
    ];

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(rename(function (path) {
            var parts = path.dirname.split('\\');
            parts.splice(0, 1);
            path.dirname = parts.join('\\');
        }))
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// Deploy changed javascript files after running 'scripts' task
gulp.task('deployScripts', ['scripts'], function () {
    var deployFiles = [
        './dist/scripts/**/*.min.js'
    ];

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(rename(function (path) {
            var parts = path.dirname.split('\\');
            parts.splice(0, 1);
            path.dirname = parts.join('\\');
        }))
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// Deploy changed style files after running 'styles' task
gulp.task('deployStyles', ['styles', 'polymerStyles'], function () {
    var deployFiles = [
        './dist/styles/**/*.min.css',
        './dist/styles/**/*.html' // Polymer styles
    ];

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(rename(function (path) {
            var parts = path.dirname.split('\\');
            parts.splice(0, 1);
            path.dirname = parts.join('\\');
        }))
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// HTML layout task
gulp.task('layout', function () {
    return gulp.src(['./src/**/*.html', '!./src/layout.html', '!./src/styles/**/*'])
        .pipe(wrap({src: './src/layout.html'}))
        .pipe(gulp.dest('./dist/'));
});

// Scripts task
gulp.task('scripts', function () {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/scripts/'));
});

// Styles task
gulp.task('styles', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 2%']
        }))
        .pipe(gulp.dest('./dist/styles/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/styles/'));
});

// Polymer styles task. Just pushes Polymer styles to dist folder
gulp.task('polymerStyles', function () {
    return gulp.src('./src/styles/**/*.html')
        .pipe(gulp.dest('./dist/styles/'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html', '!./src/styles/**/*'], ['deployLayout']);
    gulp.watch('./src/scripts/**/*', ['deployScripts']);
    gulp.watch('./src/styles/**/*', ['deployStyles']);
});
