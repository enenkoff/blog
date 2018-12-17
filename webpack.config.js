var webpack = require('webpack');

module.exports = {
    entry: [
        './src/js/app.js'
    ],
    output: {
        path: "/assets/js",
        publicPath: "",
        filename: "app.js"
    },
    watch: false,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}