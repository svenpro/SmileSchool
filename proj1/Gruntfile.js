module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['styles']
        },
        files: {
          'styles/styles.css': 'styles/styles.less'
        }
      },
      production: {
        options: {
          paths: ['styles'],
        },
        files: {
          'styles/styles.css': 'styles/styles.less'
        }
      }
    },

    svg_sprite: {
      basic: {
        expand: true,
        cwd: 'img/icons',
        src: ['*.svg'],
        dest: 'out',
        options: {
          shape: {
            dimension: {
              maxWidth: 24,
              maxHeight: 24
            },
            spacing: { // Add padding
              padding: 10
            },
          },
          mode: {
            view: {
              bust: false,
              render: {
                less: true
              }
            },
            symbol: true
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-svg-sprite');

  grunt.registerTask('default', ['less']);
};