module.exports = function(grunt) {
	var autoprefixer = require('autoprefixer-core');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd H:MM") %> */',
		watch: {
			options: {
				livereload: false
			},
			dist: {
				files: [
					'sass/*.scss'
				],
				tasks: ['sass', 'postcss', 'cssmin']
			},
			dist2: {
				files: [
					'js/js-debug/*.js'
				],
				tasks: ['uglify']
			}
		},
		postcss: {
			options: {
				processors: [
					autoprefixer({
						browsers: ['ios 5', 'android 2.3']
					}).postcss
				]
			},
			dist: {
				expand: true,
				cwd: 'css/css-debug',
				src: ['*.css'],
				dest: 'css/css/',
			}
		},
		sass: {
			dist: {
				expand: true,
				cwd: 'sass/',
				src: ['*.scss'],
				dest: 'css/css-debug/',
				ext: '.css'
			}

		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'css/css/',
				src: ['*.css'],
				dest: 'css/css-min/',
				ext: '.min.css'
			}
		},
		// concat: {
		// 	options: {
		// 		separator: ';\n'
		// 	},
		// 	dist: {
		// 		src: ['js/js-debug/*.js'],
		// 		dest: 'js/galaxy.js'
		// 	}
		// },
		// copy:{
		// 	galaxy:{
		//         src: ['css/css/*.min.css'],       
		//         dest:'css/'
		// 	}
		// }
		uglify: {
			build: {
				options: {
					banner: ''
				},
				files: [{
					expand: true,
					cwd: 'js/js-debug',
					src: ['*.js'],
					dest: 'js/js-min/',
					ext: '.min.js'
				}]
			},
			// release: {
			// 	options: {
			// 		banner: '/*! 基本依赖，zeptojs，包含zepto,event,ajax,selector,data。fastclick */\n'
			// 	},
			// 	files: {
			// 		'js/dependent.min.js': ['js/fastclick.min.js','js/zepto.min.js']
			// 	}
			// }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default', ['sass', 'postcss', 'cssmin', 'uglify']);
	grunt.registerTask('local', ['sass', 'postcss', 'cssmin', 'uglify','watch']);
};