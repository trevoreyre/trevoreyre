// gulpfile.js

// Require gulp
var gulp = require('gulp');

// Require other packages
var autoprefixer = require('gulp-autoprefixer');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

// Require config file for FTP server info
var config = require('./config.json');

// Define source/destination paths for build and deploy tasks
var srcLayout = ['./src/**/*.html', '!./src/layout.html', '!./src/styles/**/*'];
var srcLayoutWrap = './src/layout.html';
var srcScripts = './src/scripts/**/*.js';
var srcStyles = './src/styles/*.scss';
var srcStylesPolymer = './src/styles/**/*.html';
var destLayout = './dist/';
var destScripts = './dist/scripts/';
var destStyles = './dist/styles/';
var srcDeployLayout = ['./dist/**/*.html', '!./dist/styles/**/*'];
var srcDeployScripts = './dist/scripts/**/*.min.js';
var srcDeployStyles = './dist/styles/**/*.min.css';
var srcDeployPolymerStyles = './dist/styles/**/*.html';
var srcDeployExtras = [
        './dist/img/*'
    ];
var deployDestination = config.deployDestination;

// FTP connection
var conn = ftp.create({
    host: config.serverHost,
    user: config.serverUser,
    password: config.serverPassword,
    parallel: 5,
    log: gutil.log
});

// Deploy function. Expects source files to be grouped in a distribution folder.
// Strips this first folder, to place files in base directory of server
function deploy (inputStream) {
    return inputStream
        .pipe(rename(function (path) {
            var parts = path.dirname.split('\\');
            parts.splice(0, 1);
            path.dirname = parts.join('\\');
        }))
        .pipe(conn.newer(deployDestination))
        .pipe(conn.dest(deployDestination));
}

// Default task
gulp.task('default', ['deployAll', 'watch']);

// Various deploy tasks by file type to reduce FTP transfer to server
gulp.task('deployAll', ['deployLayoutWrap', 'deployScripts', 'deployStyles', 'deployPolymerStyles'], function () {
    return deploy(gulp.src(srcDeployExtras, {base: '.', buffer: false}));
});
gulp.task('deployLayout', ['layout'], function () {
    return deploy(gulp.src(srcDeployLayout, {base: '.', buffer: false}));
});
gulp.task('deployLayoutWrap', ['layoutWrap'], function () {
    return deploy(gulp.src(srcDeployLayout, {base: '.', buffer: false}));
});
gulp.task('deployScripts', ['scripts'], function () {
    return deploy(gulp.src(srcDeployScripts, {base: '.', buffer: false}));
});
gulp.task('deployStyles', ['styles'], function () {
    return deploy(gulp.src(srcDeployStyles, {base: '.', buffer: false}));
});
gulp.task('deployPolymerStyles', ['polymerStyles'], function () {
    return deploy(gulp.src(srcDeployPolymerStyles, {base: '.', buffer: false}));
});

// HTML layout task
gulp.task('layout', function () {
    return gulp.src(srcLayout)
        .pipe(changed(destLayout))
        .pipe(wrap({src: srcLayoutWrap}))
        .pipe(gulp.dest(destLayout));
});

// HTML layout wrap task, for when the layout file is changed
gulp.task('layoutWrap', function () {
    return gulp.src(srcLayout)
        .pipe(wrap({src: srcLayoutWrap}))
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

// Polymer styles task. Just pushes Polymer styles to distribution folder
gulp.task('polymerStyles', function () {
    return gulp.src(srcStylesPolymer)
        .pipe(changed(destStyles))
        .pipe(gulp.dest(destStyles));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(srcLayout, ['deployLayout']);
    gulp.watch(srcLayoutWrap, ['deployLayoutWrap']);
    gulp.watch(srcScripts, ['deployScripts']);
    gulp.watch(srcStyles, ['deployStyles']);
    gulp.watch(srcStylesPolymer, ['deployPolymerStyles']);
});
