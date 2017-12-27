import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; //bundle, minify
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    devtool: 'inline-source-map',
    entry: {
        main: [path.resolve(__dirname, './app/app.js')], // input files
        vendor: ['angular', '@uirouter/angularjs'] // library files.
    },
    target: 'web',
    resolve: {
        extensions: ['*', '.js', '.css', '.html']
    },
    plugins: [
        new ExtractTextPlugin('[name].[contenthash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'head'
        }),
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] }, // Using babel to load (import, require...) javascript files. Because some files contain keyword which be long to ES6 (ECSMA 2015)
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }) //Helper load CSS by import, require in javascript file
            },
            {
                test: /\.html$/, loader: 'raw-loader' //Helper load html by import, require in javascript file
            }
        ]
    }
}
