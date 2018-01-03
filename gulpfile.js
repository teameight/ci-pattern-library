// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./scss-new/pattern-library.scss')
        .pipe(sass())
        .pipe(rename('pattern-library.css'))
        .pipe(gulp.dest('public/css'));
});

// Concatenate CSS
gulp.task('css', function() {
    return gulp.src(['public/css/style.css'])
        .pipe(concatCss('ci-17-style.css', { rebaseUrls : false} ))
        .pipe(cleanCss())
        .pipe(gulp.dest('../../children-inc-dms/ChildrenIncorporated/Styles/pd'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['js/ci-mobile-menu.js', 'js/ci-alert-box.js', 'js/ci-modal.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('public/js'));
});

gulp.task('wp-style', function() {
    return gulp.src('./scss-new/wp.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('../../../../vvv/www/children/htdocs/wp-content/themes/children_theme/css'));
        // this needs to be updated to your local path
});

gulp.task('dms-style', function() {
    return gulp.src('./scss-new/dms.scss')
        .pipe(sass())
        .pipe(rename('ci-17.css'))
        .pipe(gulp.dest('../../ci-inc-dms-test/children-inc-dms/ChildrenIncorporated/Styles/pd'));
        // this needs to be updated to your local path
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss-new/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);