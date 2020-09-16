import {series, parallel} from 'gulp';
import {
	serve, concat, concatWatch, fonts, fontsWatch, image, imageWatch, sassStyles, sassStylesWatch, customCss, customCssWatch,
	assetsFolderBuild, vendorFolderBuild, viewsFolderBuild, phpFolderBuild
} from './tasks';

const dev = series(
	serve,
	parallel(
		sassStyles, sassStylesWatch
	)
);
const build = parallel(assetsFolderBuild);

export default dev;

export {
	build
};

/*
gulp.task(
	'watch', 
	gulp.series(
		serve,
		gulp.parallel(
			'concat', 'concat:watch',
			'sass', 'sass:watch',
			'css', 'css:watch',
			'image', 'image:watch',
			'fonts', 'fonts:watch'
		)
	)
);
*/

/*
gulp.task(
	'build',
	gulp.parallel(
		'assets:build',
		'vendor:build',
		'views:build',
		'php:build',
	)
);*/
