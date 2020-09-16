import {src, dest, watch, series} from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import csscomb 	from 'gulp-csscomb';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS	from 'gulp-clean-css';
import rename from 'gulp-rename';
import {assetsSrc, assetsBuild} from './constants';
import {reload} from './browserSync';

const sassWatch = `static/sass/**/*.+(sass|scss)`;

const sassStyles = () => src(sassWatch)
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(csscomb())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(dest(`static/css`));

const sassStylesWatch = () => watch(sassWatch, series(sassStyles, reload));

export {
    sassStyles,
    sassStylesWatch
};
