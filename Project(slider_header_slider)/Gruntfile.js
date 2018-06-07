module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['']
                },
                files: {
                    'styleNew.css': 'styleNew.less'
                }
            },
            production: {
                options: {
                    paths: [''],
                },
                files: {
                    'styleNew.css': 'styleNew.less'
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
    grunt.loadNpmTasks('grunt-contrib-watch');
};