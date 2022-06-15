// eslint-disable-next-line
var Encore = require('@symfony/webpack-encore');

// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore.setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableSassLoader()
    .addEntry('app', './assets/js/index.tsx')
    .enableReactPreset()
    .enableTypeScriptLoader()

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .configureBabel(
        (configureBabel) => {
            configureBabel.plugins.push('inline-react-svg');
        },
        {
            useBuiltIns: 'usage',
            corejs: 3,
        },
    );

module.exports = Encore.getWebpackConfig();
