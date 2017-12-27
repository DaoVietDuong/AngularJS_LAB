import webpackBase from './webpack.config.base';
import webpack from 'webpack';
import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin'; //bundle, minify
import WebpackMd5Hash from 'webpack-md5-hash'; //dynamic name file
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const pathSrc = 'dist';
webpackBase.devtool = 'source-map';
webpackBase.output = {
    path: path.resolve(__dirname, pathSrc),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
};
webpackBase.plugins = [];
webpackBase.plugins.push(new ExtractTextPlugin('[name].[contenthash].css'));
webpackBase.plugins.push(new WebpackMd5Hash());
webpackBase.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
}));
webpackBase.plugins.push(new HtmlWebpackPlugin({
    template: './app/index.html',
    minify: {
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: false,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
    },
    inject: 'head'
}));
webpackBase.plugins.push(new webpack.optimize.DedupePlugin());
webpackBase.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true }));

export default webpackBase;
