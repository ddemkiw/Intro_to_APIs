module.exports = function(grunt){

  grunt.initConfig({
    
    pkg:grunt.file.readJSON('package.json'), 
    
    mocha_casperjs: {
        options:{ 
      }, 
        files: {
        src: ['test/**/*']
      }
    },
    
    express: {
      dev: {
        options: {
        script: './server.js'
        }
      }
    },

    jshint:{
      files:['src/*']
    },
    
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      }, 
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.registerTask('default', [ 'express', 'mocha_casperjs', 'jasmine_node', 'jshint']);


};