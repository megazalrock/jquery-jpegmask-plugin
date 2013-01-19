/*global module:false*/
module.exports = function(grunt){
	var jsFiles = [
		'jquery.jpegmask.js'
	];
	grunt.initConfig({
		//lint
		lint: {
			files : [
				'grunt.js',
				'jquery.jpegmask.js'
			]
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true
			}
		},
		//watch
		watch : {
			dist : {
				files : jsFiles,
				tasks:'min'
			},
		},
		min: {
			dist :{
				src : ['jquery.jpegmask.js'],
				dest : 'jquery.jpegmask.min.js'
			}
		}
	});
	grunt.registerTask('default', 'min');
};