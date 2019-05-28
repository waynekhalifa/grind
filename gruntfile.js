module.exports = function(grunt) {
    
  // Project configuration.
  grunt.initConfig({

    // Grunt-sass 
    sass: {
      
     app: {
				files: {
					'style.css': 'sass/style.scss'
				}
		 },
     options: {
        sourceMap: true, 
        outputStyle: 'nested', 
      }
    },

    // Grunt-contrib-watch
    watch: {
      sass: {
        // Watches all Sass or Scss files within the scss folder and one level down. 
        // If you want to watch all scss files instead, use the "**/*" globbing pattern
        files: ['sass/**/*.{scss,sass}'],
        // runs the task `sass` whenever any watched file changes 
        tasks: ['sass'],
        options: {
          livereload: true  // Set livereload to trigger a reload upon change
        }
      },
      livereload: {
				files: ['*.html', '**/*.php', 'js/**/*.{js,json}', '*.css'],
				options: {
					livereload: true
				}
			}
    },
  });

  // Loads Grunt Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
   // Default task(s).
  // This registers a task that runs `sass`, followed by `watch`. 
  grunt.registerTask('default', ['sass','watch']);
};
