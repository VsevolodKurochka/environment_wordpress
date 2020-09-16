import {babelScripts, babelScriptsWatch} from './babel';
import {reload, serve, server} from './browserSync';
import {clean} from './clean';
import {concat, concatWatch} from './concat';
import {fonts, fontsWatch} from './fonts';
import {image, imageWatch} from './image';
import {sassStyles, sassStylesWatch} from './sass';
import {customCss, customCssWatch} from './css';
import {assetsFolderBuild, vendorFolderBuild, viewsFolderBuild, phpFolderBuild} from './build';

export {
    babelScripts, babelScriptsWatch,
    clean,
    reload, serve, server,
    concat, concatWatch,
    fonts, fontsWatch,
    image, imageWatch,
    sassStyles, sassStylesWatch,
    customCss, customCssWatch,
    assetsFolderBuild, vendorFolderBuild, viewsFolderBuild, phpFolderBuild
};
