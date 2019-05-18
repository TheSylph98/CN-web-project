const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");
const runSequence = require("run-sequence");
const gulpWebpack = require("gulp-webpack");
const webpack = require("webpack");
const zip = require("gulp-zip");
const merge = require("merge2");
const browserSync = require("browser-sync");

var tsCode = ts.createProject("./frontend/tsconfig.json");

gulp.task('compile', () => {
    return tsCode.src()
        .pipe(tsCode())
        .js.pipe(gulp.dest('./resources/js'));
})

gulp.task('cleanDist', () => {
    return gulp.src('./resources')
        .pipe(clean());
})

gulp.task('copyHtmlAndCss', () => {
    return merge([
        gulp.src("./frontend/src/index.blade.php")
            .pipe(gulp.dest("./resources/views")),
        gulp.src("./frontend/src/html/*.html")
            .pipe(gulp.dest("./resources/html")),
        gulp.src("./frontend/src/page/*.php")
            .pipe(gulp.dest("./resources/views/page")),
        gulp.src("./frontend/src/css/*.css")
            .pipe(gulp.dest("./resources/css")),
        gulp.src("./frontend/src/images/**/*")
            .pipe(gulp.dest("./resources/images"))
    ])
})

gulp.task('bundle', () => {
    return gulp.src("./resources/js/main/main.js")
        .pipe(gulpWebpack({
            output: {
                filename: "resources/js/main.js",
            },
            publicPath: "/",
            entry: "./resources/js/main/main.js",
            devtool: "source-map"
        }, webpack))
        .pipe(gulp.dest("./"))
})

gulp.task('zip', () => {
    return gulp.src('./resources/**')
        .pipe(zip('public_html.zip'))
        .pipe(gulp.dest('./resources'))
})

gulp.task('watch', (callback) => {
    return gulp.watch('./frontend/src/**/*', () => {
        runSequence('cleanDist', ['compile', 'copyHtmlAndCss'], ['bundle'], callback);
    })
})

gulp.task('reloadServer', () => {
    return browserSync.reload();
})

gulp.task('startServer', () => {
    return browserSync({
        notify: false,
        server: {
            baseDir: './'
        }
    });
})

gulp.task('default', (callback) => {
    runSequence('cleanDist', ['compile', 'copyHtmlAndCss'], ['bundle'], ['watch'], callback);
})

gulp.task('production', (callback) => {
    runSequence('cleanDist', ['compile', 'copyHtmlAndCss'], ['bundle'], ['zip'], callback);
})
