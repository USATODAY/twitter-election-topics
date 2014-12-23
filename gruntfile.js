module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: true,
          style: 'compressed'
        },
        files: {
          'style/scss/project.css': 'style/scss/project.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      single_file: {
        options: {
          map: true
        },
        src: 'style/scss/project.css',
        dest: 'www/style/project.css'
      }
    },
    jshint: {
      options: {
        scripturl: false
      },
      uses_defaults: ['Gruntfile.js','test/*.js', 'js/app.js']
    },
    uglify: {
      my_target: {
        options: {
          mangle: false,
          sourceMap: true
        },
        files: {
          'www/js/app.min.js': ['js/app.js'],
          'www/js/templates.min.js': ['js/templates.js']
        }
      }
    },
    watch: {
      styles: {
        files: ['style/scss/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      js: {
        files: ['js/app.js'],
        tasks: ['jshint', 'uglify']
      },
      test: {
        files: ['js/spec/*.js'],
        tasks: ['']
      },
      html: {
        files: ['index.html'],
        tasks: ['copy']
      },
      tmpl: {
        files: ['templates/*.html'],
        tasks: ['jst', 'copy', 'uglify']
      },
      options: {
        livereload: true,
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        base: 'www',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
        }
      }
    },
    imagemin: {                          // Task
      static: {                          // Target
        options: {                       // Target options
          optimizationLevel: 3,
        },
        files: {                         // Dictionary of files
          'img/*.png': 'src/*.png', // 'destination': 'source'
          'img/*.jpg': 'src/*.jpg',
          'img/*.gif': 'src/*.gif'
        }
      }
    },
    jasmine: {
      test: {
        src: 'js/**/*.js',
        options: {
          specs: 'test/*.js',
          helpers: 'test/*Helper.js'
        }
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['*.html'], dest: 'www/', filter: 'isFile'},
          {expand: true, src: ['js/*.js', 'js/**/*.json'], dest: 'www/', filter: 'isFile'},
          {expand: true, src: ['img/*'], dest: 'www/', filter: 'isFile'},

        ]
      }
    },

    clean: ["www/"],

    jst: {
      compile: {
        options: {
          namespace: "app.templates",
          processName: function(filepath) {
            
            var result = filepath.substr(10);
            return result.toUpperCase();
          }
        },
        files: {
          "js/templates.js": ["templates/*.html"]
        }
      }
    },
    execute: {
        target: {
            src: ['data/data-grabber.js']
        }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-execute');
 
  // Default task(s).

  grunt.registerTask('default', ['clean', 'sass', 'autoprefixer', 'jst', 'jshint', 'uglify', 'copy', 'connect:livereload', 'watch']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('update', ['execute', 'default']);


};
