const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/app/app.module.js',

    output: {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:8080/',
        filename: 'app.bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loaders: ['ng-annotate', 'babel-loader'], exclude: /node_modules/ },
           // {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw'},
            //{test: /\.json$/, loader: 'json'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            inject: 'body'
        })
    ],

    devServer: {
        contentBase: './src/public',
        stats: 'minimal'
    }

};