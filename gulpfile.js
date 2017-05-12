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

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss-new/*.scss')
        .pipe(sass())
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
    return gulp.src(['js/*.js', '!js/PIE.js', '!js/google-map.js', '!js/google.infobox.js', '!js/markerwithlabel.js', '!js/theme-customizer.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('header', function() {
    return gulp.src('scss-new/header.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('footer', function() {
    return gulp.src('scss-new/footer.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('newstyle', function() {
    return gulp.src('scss-new/ci-17.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(gulp.dest('../../children-inc-dms/ChildrenIncorporated/Styles/pd'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss-new/**/*.scss', ['sass', 'newstyle']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);