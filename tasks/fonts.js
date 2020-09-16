import {src, dest, watch, series} from 'gulp';
import {assetsSrc, assetsBuild} from './constants';
import {reload} from './browserSync';

const fontsPath = `${assetsSrc}/fonts/**/*`;
const fonts = () => src(fontsPath).pipe(dest(`${assetsBuild}/fonts`));
const fontsWatch = () => watch(fontsPath, series(fonts, reload));

export {
    fonts,
    fontsWatch
};
