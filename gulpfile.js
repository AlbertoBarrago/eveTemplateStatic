/* gulpfile.js */
var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    image   = require('gulp-image'),
    uglify  = require('gulp-uglify'),
    browserSync = require('browser-sync');

// source and distribution folder
var source  = 'src/',
    dest    = 'dist/';

// Bootstrap scss source
var bootstrapSass = {
        in: './bower_components/bootstrap-sass/'
    };
    
// fonts
var fonts  = {
        in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
        out: dest + 'fonts/'
    };

// js source file
var js = {
    in: source + 'js/main.js',
    out: dest + 'js/',
    watch: source + 'js/**/*'
};

// css source file: .scss files
var css = {
    in: source + 'css/main.scss',
    out: dest + 'css/',
    watch: source + 'css/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};


gulp.task('browser-sync', function() { 
    browserSync.init(["dist/css/*", "dist/js/*", "dist/img/**/*", "html/*."], {
      server: {
        baseDir: "./"
      }
    });
});


// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(css.in)
        .pipe(sass(css.sassOpts))
        .pipe(gulp.dest(css.out));
});

// compress JS
gulp.task('compress', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//optimizeImage
gulp.task('image', function () {
  gulp.src('src/img/**/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'));
});

// default task
gulp.task('default', ['sass', 'image', 'compress', 'browser-sync'], function () {
     gulp.watch(css.watch, ['sass']);
     gulp.watch(js.watch, ['compress']);
});