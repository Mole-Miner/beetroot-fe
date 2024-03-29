import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import * as del from 'del';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import browserSync from 'browser-sync';
import htmlMinify from 'html-minifier';

const sass = gulpSass(dartSass);
const bs = browserSync.create();
const htmlMinifyOptions = {
    includeAutoGeneratedTags: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
    collapseWhitespace: true
};

const paths = {
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/scripts'
    },
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/styles'
    },
    pages: {
        src: 'src/index.html',
        dest: 'dist'
    }
};

export function clean() {
    return del.deleteAsync('dist');
}

export function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest))
}

export function pages() {
    return gulp.src(paths.pages.src)
        .on('data', (file) => {
            file.contents = Buffer.from(htmlMinify.minify(file.contents.toString(), htmlMinifyOptions));
            return file;
        })
        .pipe(gulp.dest(paths.pages.dest));
}

function watchFiles() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.pages.src, pages);
}
export {watchFiles as watch};

export function serve() {
    build();
    bs.init({
        server: ['dist'],
        notify: false,
        open: false,
        ui: false
    });
    watchFiles();
    gulp.watch(paths.pages.src).on('change', bs.reload);
}

const build = gulp.series(clean, gulp.parallel(scripts, styles, pages));

export default build;
