/**
 * Gulp Configuration
 */

/* jshint browser:false, node:true */

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var header = require('gulp-header');
var clean = require('gulp-clean');

var pkg = require('./package.json');


var banner =
    '/** \n' +
    ' * <%= pkg.name %> - <%= pkg.description %>\n' +
    ' * @version v<%= pkg.version %>\n' +
    ' * @link <%= pkg.homepage %>\n' +
    ' * @license <%= pkg.license %>\n' +
    ' */\n\n';

var dirs = {
    root: __dirname,
    res: __dirname + '/res',
    src: __dirname + '/src'
};

gulp.task('clean', function() {
    return gulp.src([
            dirs.res + '/css/**/*',
            dirs.res + '/js/**/*',
            dirs.root + '/**/*.html'
        ])
        .pipe(clean({
            force: true,
            read: false
        }));
});

gulp.task('sass', ['clean'], function() {
    return gulp.src(dirs.src + '/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'compact',
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./',{
            addComment: true,
            includeContent: true
        }))
        .pipe(gulp.dest(dirs.res + '/css'));
});

gulp.task('jade', ['clean'], function() {
    return gulp.src(dirs.src + '/jade/**/[^_]*.jade')
        .pipe(jade({
            pretty: true,
            locals: {}
        }))
        .pipe(gulp.dest(dirs.root));
});

gulp.task('js', ['clean'], function() {
    return gulp.src([
            dirs.src + '/js/**/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(header(banner, {pkg : pkg}))
        .pipe(rename(function(path){
            path.extname = '.min.js';
        }))
        .pipe(uglify({
            mangle: true,
            compress: true
        }))
        .pipe(sourcemaps.write('./', {
            addComment: true,
            includeContent: true
        }))
        .pipe(gulp.dest(dirs.res + '/js'));
});

gulp.task('build', ['sass', 'jade', 'js'], function() {
    console.log('======= BUILD COMPLETE =======');
});

gulp.task('default', ['build']);

gulp.task('watch', ['build'], function(){
    return gulp.watch([
        dirs.src + '/**/*'
    ], ['build']);
});
