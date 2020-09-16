import {src, dest, watch, series} from 'gulp';
import {assetsSrc, assetsBuild} from './constants';
import {reload} from './browserSync';

const concatPath = `${assetsSrc}/js/**/*`;
const concat = () => src(concatPath).pipe(dest(`${assetsBuild}/js`));
const concatWatch = () => watch(concatPath, series(concat, reload));

export {
    concat,
    concatWatch
};
