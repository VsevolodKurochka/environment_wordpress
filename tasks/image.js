import {src, dest, watch, series} from 'gulp';
import imagemin from 'gulp-imagemin';
import {assetsSrc, assetsBuild} from './constants';

const imagesPath = `${assetsSrc}/img/**/*`;
const options = {
    interlaced: true,
    progressive: true,
    optimizationLevel: 5,
    svgoPlugins: [{removeViewBox: true}]
};

const image = () => src(imagesPath).pipe(imagemin(options)).pipe(dest(`${assetsBuild}/img`));
const imageWatch = () => watch(imagesPath, series(image));

export {
    image,
    imageWatch
};
