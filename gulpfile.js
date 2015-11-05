// gulpfile.js

// Require gulp
var gulp = require('gulp');

// Require other packages
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

// Require config file
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

// Files and folders to ignore in deploy tasks
var deployIgnoreFiles = [
    '!./bower_components/',
    '!./bower_components/**',
    '!./node_modules/',
    '!./node_modules/**',
    '!./src/',
    '!./src/**',
    '!./bower.json',
    '!./package.json',
    '!./gulpfile.js',
    '!./config.json',
    '!./.gitignore',
    '!./README.md'
];

// Deploy all files
gulp.task('deployAll', ['layout', 'scripts', 'styles'], function() {
    var deployFiles = [
        './**'
    ];
    var deployFiles = deployFiles.concat(deployIgnoreFiles);

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// Deploy changed html files
gulp.task('deployLayout', ['layout'], function() {
    var deployFiles = [
        './**/*.html'
    ];
    var deployFiles = deployFiles.concat(deployIgnoreFiles);

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// Deploy changed javascript files
gulp.task('deployScripts', ['scripts'], function() {
    var deployFiles = [
        './**/*.js'
    ];
    var deployFiles = deployFiles.concat(deployIgnoreFiles);

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// Deploy changed style files
gulp.task('deployStyles', ['styles'], function() {
    var deployFiles = [
        './**/*.css'
    ];
    var deployFiles = deployFiles.concat(deployIgnoreFiles);

    return gulp.src(deployFiles, {base: '.', buffer: false})
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
});

// HTML layout task
gulp.task('layout', function() {
    return gulp.src(['./src/**/*.html', '!./src/layout.html', '!./src/layout-old.html'])
        .pipe(wrap({src: './src/layout.html'}))
        .pipe(gulp.dest('./'));
});

// Scripts task
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js/'));
});

// Styles task
gulp.task('styles', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('./src/**/*.html', ['deployLayout']);
    gulp.watch('./src/js/*.js', ['deployScripts']);
    gulp.watch('./src/sass/*.scss', ['deployStyles']);
});