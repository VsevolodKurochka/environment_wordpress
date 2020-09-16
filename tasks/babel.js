import {src, dest, watch, series} from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import {assetsSrc} from './constants';
import {reload} from './browserSync';

const scriptsWatch = `${assetsSrc}/js/babel/*.babel.js`;

const babelScripts = () => src(scriptsWatch)
    .pipe(babel())
    .on('error', notify.onError({
        title: 'Babel Error',
        message: '<%= error.message %>'
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(dest(`${assetsSrc}/js/libs`));

const babelScriptsWatch = () => watch(scriptsWatch, series(babel, reload));

export {
    babelScripts,
    babelScriptsWatch
};
