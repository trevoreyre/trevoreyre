// gulpfile.js

// Require gulp
var gulp = require('gulp');

// Require other packages
var autoprefixer = require('autoprefixer');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

// Define source/destination paths for build and deploy tasks
var srcLayout = ['./src/**/*.html', '!./src/layout.html', '!./src/styles/**/*'];
var srcLayoutWrap = './src/layout.html';
var srcScripts = './src/scripts/**/*.js';
var srcStyles = './src/styles/**/*.scss';
var srcStylesPolymer = './src/styles/**/*.html';
var srcPHP = './src/php/*.php';
var destLayout = './dist/';
var destScripts = './dist/scripts/';
var destStyles = './dist/styles/';
var destPHP = './dist/php/';
var srcDeployExtras = [
    './res/**/*',
    './bower_components/**/*'
];

gulp.task('build', ['layoutWrap', 'scripts', 'styles', 'polymerStyles', 'php'], function () {
    return gulp.src(srcDeployExtras)
        .pipe(gulp.dest('./dist/'))
})

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
        .pipe(postcss([
            autoprefixer({
                browsers: ['> 2%']
            })
        ]))
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

// PHP task. Just pushes changed PHP files to dist folder
gulp.task('php', function () {
    return gulp.src(srcPHP)
        .pipe(changed(destPHP))
        .pipe(gulp.dest(destPHP));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(srcLayout, ['deployLayout']);
    gulp.watch(srcLayoutWrap, ['deployLayoutWrap']);
    gulp.watch(srcScripts, ['deployScripts']);
    gulp.watch(srcStyles, ['deployStyles']);
    gulp.watch(srcStylesPolymer, ['deployPolymerStyles']);
    gulp.watch(srcPHP, ['deployPHP']);
});
