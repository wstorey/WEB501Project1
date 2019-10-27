const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const del = require('delete');
const typescript = require('gulp-typescript');
const markdown = require('gulp-markdown');
const wrap = require('gulp-wrap');
const frontMatter = require('gulp-front-matter');

function css() {
    return src('source/scss/**/*.scss')
    .pipe(sass( { outputStyle: 'compressed' } ))
    .pipe(dest('prod/ui'));
}

// function image() {
//     return src(['source/images/**/*.jpg', 'source/images/**/*.png']).pipe(dest('prod/images'));
// }

function md() {
    return src('source/md/**/*.md')
    .pipe(frontMatter())
    .pipe(markdown())
    .pipe(wrap({src:'source/templates/layout.html'}))
    .pipe(dest('prod/'));
}

function sync(cb) {
    browserSync.init({
        server: { baseDir: 'prod' }
    });
    cb();
}

function reload(cb) {
    browserSync.reload();
    cb();
}

function watch_task() {
    watch('source/scss/**/*.scss', series(css, reload));
}

function clean(cb) {
    del(['prod/**/*'], cb);
}

exports.default = series(clean, parallel(css, md), sync, watch_task)