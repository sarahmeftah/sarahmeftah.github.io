/**
 * Gulp Configuration
 */

'use strict';

var gulp = require('gulp');
var pkg = require('./package.json');

var dirs = {
    build: __dirname + '/build',
    src: __dirname + '/src',
    cloud: __dirname + '/cloud'
};

/**
 * Static files
 */
gulp.task('static', function() {
    return gulp.src(dirs.src + '/static/**/*').pipe(gulp.dest(dirs.build));
});


/**
 * CSS
 */
gulp.task('css', function() {
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src([
        dirs.src + '/css/**/*.scss',
        '!' + dirs.src + '/css/_*',
        '!' + dirs.src + '/css/_*/**'
    ])
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
        .pipe(gulp.dest(dirs.build + '/css'));
});


/**
 * HTML
 */
gulp.task('html', function() {
    var pug = require('gulp-pug');
    var md = require('jstransformer')(require('jstransformer-markdown-it'));

    return gulp.src([
        dirs.src + '/html/**/*.pug',
        '!' + dirs.src + '/html/_*',
        '!' + dirs.src + '/html/_*/**'
    ])
        .pipe(pug({
            pretty: true,
            locals: require(dirs.src + '/html/_pug/locals.js'),
            filters: {
                'markdown': function(str) {
                    return md.render(str).body;
                }
            }
        }))
        .pipe(gulp.dest(dirs.build));
});



/**
 * JS
 */
gulp.task('js', function() {
    var rename = require('gulp-rename');
    var sourcemaps = require('gulp-sourcemaps');
    var uglify = require('gulp-uglify');
    var header = require('gulp-header');
    var banner =
        '/** \n' +
        ' * <%= pkg.name %> - <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' * @license <%= pkg.license %>\n' +
        ' */\n\n';

    return gulp.src([
        dirs.src + '/js/**/*.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(header(banner, {pkg : pkg}))
        .pipe(rename(function(path) {
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
        .pipe(gulp.dest(dirs.build + '/js'));
});


/**
 * Resize base images to create needed sizes
 */
gulp.task('img:thumbs', function() {
    var rename = require('gulp-rename');
    var imageResize = require('gulp-image-resize');

    return gulp.src(dirs.cloud + '/img/originals/**/*.jpg')
        .pipe(rename(function(path) {
            path.basename = path.basename.replace(/\s/g, '_').toLowerCase();
        }))
        .pipe(imageResize({
            width: 2000,
            height: 700,
            crop: false,
            upscale: false,
            quality: 1,
            imageMagick: true
        }))
        .pipe(gulp.dest(dirs.build + '/img/thumbs'));
});
gulp.task('img:covers', function() {
    var rename = require('gulp-rename');
    var imageResize = require('gulp-image-resize');

    return gulp.src([
            dirs.cloud + '/img/originals/projects/california/california_2.jpg',
            dirs.cloud + '/img/originals/projects/for_a_very_brief_moment/bamboo-house.jpg',
            dirs.cloud + '/img/originals/projects/for_a_very_brief_moment/red-lot.jpg',
            dirs.cloud + '/img/originals/projects/new_american_landscape/new_american_landscape_6.jpg',
            dirs.cloud + '/img/originals/projects/year_2000/year_2000_2.jpg'
        ], { base: dirs.cloud + '/img/originals/projects/' })
        .pipe(rename(function(path) {
            path.basename = path.basename.replace(/\s/g, '_').toLowerCase();
        }))
        .pipe(imageResize({
            width: 2000,
            height: 2000,
            crop: false,
            upscale: false,
            quality: 1,
            imageMagick: true
        }))
        .pipe(gulp.dest(dirs.build + '/img/covers'));
});
gulp.task('img:copy', function() {
    var rename = require('gulp-rename');

    return gulp.src([
            dirs.cloud + '/img/**/*.jpg',
            '!' + dirs.cloud + '/img/originals/**/*.jpg'
        ])
        .pipe(rename(function(path) {
            path.basename = path.basename.replace(/\s/g, '_').toLowerCase();
        }))
        .pipe(gulp.dest(dirs.build + '/img'));
});

gulp.task('img', ['img:copy', 'img:thumbs', 'img:covers']);


gulp.task('bower', function() {
    var bower = require('gulp-bower');

    return bower({
        directory: dirs.build + '/bower_components'
    });
});


gulp.task('build', ['bower', 'css', 'html', 'js', 'static']);

gulp.task('watch', ['build'], function(){
    return gulp.watch([dirs.src + '/**/*'], ['build']);
});


/**
 * Builds website and then deploys result to gitub pages branch
 */
gulp.task('deploy', ['build', 'img'], function() {
    var ghPages = require('gulp-gh-pages');

    return gulp.src(dirs.build + '/**/*')
        .pipe(ghPages({
            remoteUrl: pkg.repository,
            force: true
        }));
});


/**
 * Demo server. Basic static express app pointing to the build folder
 */
gulp.task('demo', function(done) {
    var express = require('express');
    var http = require('http');
    var morgan = require('morgan');

    var port = 5000;

    var app = express();
    app.use(morgan('dev'));
    app.use('/', express.static(dirs.build));
    app.get('/', function(req, res) {
        res.redirect('/index.html');
    });

    var server = http.createServer(app);
    server.on('error', function(error) {
        console.log('Server error!', error);
        done(error);
    });
    server.on('listening', function() {
        console.log('Express app hosting static directory ', dirs.build);
        console.log('Listening on localhost ' + port);
        done();
    });
    server.listen(port);
});


gulp.task('default', ['build']);
