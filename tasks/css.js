import {src, dest, watch, series} from 'gulp';
import {assetsSrc, assetsBuild} from './constants';
import {reload} from './browserSync';

const cssWatch = `${assetsSrc}/sass/**/*.css`;

const customCss = () => src(cssWatch).pipe(dest(`${assetsBuild}/css`));
const customCssWatch = () => watch(cssWatch, series(customCss, reload));

export {
    customCss,
    customCssWatch
};
