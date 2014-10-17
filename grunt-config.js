module.exports = {
    /**
     * File paths
     */
    public_dir: 'www',
    pkg_dir: 'bower_components',
    src_dir: 'src',

    /**
     * Plugin Files
     */
    plugin_files: {
        fonts: [
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/fonts/bootstrap/*',
            '<%= files.pkg_dir %>/font-awesome/fonts/*',
        ],
        js: [
            '<%= files.pkg_dir %>/console-polyfill/index.js',

            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
            '<%= files.pkg_dir %>/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
        ],
        js_vendor: [
            '<%= files.pkg_dir %>/requirejs/require.js',
            '<%= files.pkg_dir %>/jquery/dist/jquery.min.js',
            '<%= files.pkg_dir %>/jquery/dist/jquery.min.map',
        ],
    },

    /**
     * Modules Files
     */
    module_files: {
        js: [
            '<%= files.src_dir %>/js/modules/*.js',
        ],
        scss: [
            '<%= files.src_dir %>/scss/modules/*.scss',
        ],
    },

    /**
     * App Files
     */
    app_files: {
        js: [
            '<%= files.src_dir %>/js/helpers/utils.js',
            '<%= files.src_dir %>/js/main.js',
        ],
        scss: [
            '<%= files.src_dir %>/scss/main.scss',
        ],
    },
};
