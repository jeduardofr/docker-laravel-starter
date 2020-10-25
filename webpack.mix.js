const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/index.js", "public/js").browserSync({
    open: "external",
    proxy: "webserver",
    files: ["resources/views/**/*.php", "public/js/*.js"],
    notify: false
});

if (mix.inProduction()) {
    mix.version();
}
