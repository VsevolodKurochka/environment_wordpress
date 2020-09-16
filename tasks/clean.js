import {assetsBuild} from './constants';
import del from 'del';

const options = {force: true};

export const clean = () => {
    del([`${assetsBuild}/css`], options);
    del([`${assetsBuild}/fonts`], options);
    del([`${assetsBuild}/img`], options);
    del([`${assetsBuild}/js`], options);
};
