module.exports = function (grunt) {
    'use strict';

    var config = require('./grunt-config.js');

    // Load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Show elapsed time
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        files: config,
        src_dir: config.src_dir,
        public_dir: config.public_dir,
        pkg_dir: config.pkg_dir,

        /**
         * The banner is the comment that is placed at the top of our compiled
         * source files. It is first processed as a Grunt template, where the `<%=`
         * pairs are evaluated based on this very configuration object.
         */
        meta: {
            banner: '/**\n'
                + ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n'
                + ' * <%= pkg.homepage %>\n'
                + ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n'
                + ' */\n'
        }, // meta


        /* SASS
        ==============================================================*/
        sass: {
            dev: {
                options: {
                    banner: '<%= meta.banner %>',
                    imagePath: '../img',
                    sourceMap: true,
                    outputStyle: 'nested'
                },
                files: {
                    '<%= public_dir %>/css/main.css': '<%= src_dir %>/scss/main.scss',
                    '<%= public_dir %>/css/plugins.css': '<%= src_dir %>/scss/plugins.scss',
                }
            },

            prod: {
                options: {
                    imagePath: '../img',
                    outputStyle: 'compressed'
                },
                files: {
                    '<%= public_dir %>/css/main.css': '<%= src_dir %>/scss/main.scss',
                    '<%= public_dir %>/css/plugins.css': '<%= src_dir %>/scss/plugins.scss',
                }
            },
        }, // sass


        /* JS : Concat
        ==============================================================*/
        concat: {
            options: {
                banner: '<%= meta.banner %>',
                separator: ';',
            },

            plugins: {
                dest: '<%= public_dir %>/js/plugins.js',
                src: ['<%= files.plugin_files.js %>'],
            },

            script: {
                dest: '<%= public_dir %>/js/app.js',
                src: ['<%= files.app_files.js %>'],
            }
        }, // concat


        /*  JS : Uglify
        ==============================================================*/
        uglify: {
            options: {
                banner: '<%= meta.banner %>',
                separator: ';',
            },

            plugins: {
                files: {
                    '<%= public_dir %>/js/plugins.js': [
                        '<%= files.plugin_files.js %>'
                    ],
                }
            },

            script: {
                files: {
                    '<%= files.public_dir %>/js/app.js': [
                        '<%= files.app_files.js %>'
                    ]
                }
            }
        }, // uglify


        /*  Copy
        ==============================================================*/
        copy: {
            fonts: {
                src: ['<%= files.plugin_files.fonts %>'],
                dest: '<%= public_dir %>/fonts',
                expand: true,
                flatten: true,
            },
            js: {
                src: ['<%= files.plugin_files.js_vendor %>'],
                dest: '<%= public_dir %>/js/vendor',
                expand: true,
                flatten: true,
            }
        }, // copy


        /*  Notify
        ==============================================================*/
        notify: {
            sass: {
                options: {
                    message: 'grunt-sass complete',
                }
            },
            js: {
                options: {
                    message: 'grunt-js complete',
                }
            },
            fonts: {
                options: {
                    message: 'fonts copied',
                }
            },
            prod: {
                options: {
                    message: 'Ready for production !',
                }
            }
        }, // notify


        /*  Todo
        ==============================================================*/
        todo: {
            theme: {
                options: {
                    colophon: true,
                    file: 'TODOS.md',
                    title: 'Todos',
                    githubBoxes: false,
                    marks: [{
                        name: 'TODO',
                        pattern: /@todo/,
                        color: 'yellow',
                    }, {
                        name: 'FIX',
                        pattern: /@tofix/,
                        color: 'red',
                    }, {
                        name: 'NOTE',
                        pattern: /@note/,
                        color: 'blue',
                    }],
                    usePackage: true,
                },
                src: [
                    '<%= src_dir %>/**/*.js',
                    '<%= src_dir %>/**/*.scss',
                ]
            }
        }, // todo


        /*  Watch
        ==============================================================*/
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: [
                    '<%= src_dir %>/scss/*.scss',
                    '<%= src_dir %>/scss/**/*.scss',
                ],
                tasks: [
                    'sass:dev',
                    'notify:sass',
                ],
            },
            js: {
                files: [
                    '<%= src_dir %>/js/*.js',
                    '<%= src_dir %>/js/**/*.js',
                ],
                tasks: [
                    'concat',
                    'notify:js',
                ],
            }
        }, // watch

    });


    /*  Tasks
    ==============================================================*/
    grunt.registerTask('default', [
        'css',
        'js',
        'copy',
        'todo',
        'notify:prod',
    ]);

    grunt.registerTask('css', [
        'sass:prod',
        'notify:sass'
    ]);

    grunt.registerTask('js', [
        'uglify',
        'notify:js'
    ]);

    grunt.registerTask('fonts', [
        'copy:fonts',
        'notify:fonts'
    ]);

};
