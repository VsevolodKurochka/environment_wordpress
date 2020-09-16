import {src, dest} from 'gulp';
import {app, build, assetsBuild} from './constants';

const assetsFolderBuild = () => src(`${assetsBuild}/**/*`).pipe(dest(`${build}/assets/build`));
const vendorFolderBuild = () => src(`${app}/vendor/**/*`).pipe(dest(`${build}/vendor`));
const viewsFolderBuild = () => src(`${app}/views/**/*`).pipe(dest(`${build}/views`));
const phpFolderBuild = () =>src(`${app}/*.php`).pipe(dest(`${build}`));

export {
    assetsFolderBuild,
    vendorFolderBuild,
    viewsFolderBuild,
    phpFolderBuild
};
