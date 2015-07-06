module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: 'assets/css/less/*',
                tasks: ['less:development']
            },
            js: {
                files: 'assets/js/app/*',
                tasks: ['browserify']
            }
        },
        less: {
            development: {
                files: {
                    "assets/css/style.css": "assets/css/less/main.less"
                }
            },
            production: {
                files: {
                    "assets/css/style.css": "assets/css/less/main.less"
                },
                compress: true,
            }
        },
        browserify: {
            options: {},
            'assets/js/app.js': ['assets/js/app/**/*.js']
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build-dev', ['less:development']);
    grunt.registerTask('build-prod', ['less:production']);

};