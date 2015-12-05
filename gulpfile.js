// gulpfile.js

// Require gulp
var gulp = require('gulp');

// Require other packages
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var ftp = require('vinyl-ftp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

// Require config file for FTP server info
var config = require('./config.json');

// Define build source and destination paths
var srcLayout = ['./src/**/*.html', '!./src/layout.html', '!./src/styles/**/*'];
var srcScripts = './src/scripts/**/*.js';
var srcStyles = './src/styles/*.scss';
var srcStylesPolymer = './src/styles/**/*.html';
var destLayout = './dist/';
var destScripts = './dist/scripts/';
var destStyles = './dist/styles/';

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
gulp.task('deployAll', ['deployLayout', 'deployScripts', 'deployStyles', 'deployPolymerStyles'], function () {
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

// Deploy changed html files after running 'layoutWrap' task
gulp.task('deployLayoutWrap', ['layoutWrap'], function () {
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
gulp.task('deployStyles', ['styles'], function () {
    var deployFiles = [
        './dist/styles/**/*.min.css'
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

// Deploy changed Polymer style files after running 'polymerStyles' task
gulp.task('deployPolymerStyles', ['polymerStyles'], function () {
    var deployFiles = [
        './dist/styles/**/*.html'
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
    return gulp.src(srcLayout)
        .pipe(changed(destLayout))
        .pipe(wrap({src: './src/layout.html'}))
        .pipe(gulp.dest(destLayout));
});

// HTML layout wrap task, for when the layout file is changed
gulp.task('layoutWrap', function () {
    return gulp.src(srcLayout)
        .pipe(wrap({src: './src/layout.html'}))
        .pipe(gulp.dest(destLayout));
});

// Scripts task
gulp.task('scripts', function () {
    return gulp.src(srcScripts)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(destScripts))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destScripts));
});

// Styles task
gulp.task('styles', function () {
    return gulp.src(srcStyles)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 2%']
        }))
        .pipe(gulp.dest(destStyles))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destStyles));
});

// Polymer styles task. Just pushes Polymer styles to dist folder
gulp.task('polymerStyles', function () {
    return gulp.src(srcStylesPolymer)
        .pipe(changed(destStyles))
        .pipe(gulp.dest(destStyles));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(srcLayout, ['deployLayout']);
    gulp.watch('./src/layout.html', ['deployLayoutWrap']);
    gulp.watch(srcScripts, ['deployScripts']);
    gulp.watch(srcStyles, ['deployStyles']);
    gulp.watch(srcStylesPolymer, ['deployPolymerStyles']);
});
