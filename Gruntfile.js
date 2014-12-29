module.exports = function(grunt) {
    
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        watch: {
            all: {
                files: ['*.html', '*.js'],
                options: { livereload: true }
            }
        },
        open: {
            all: {
                path: 'http://localhost/reddit-clone/index.html'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('server', [
    'open',
    'watch'
    ]);
};