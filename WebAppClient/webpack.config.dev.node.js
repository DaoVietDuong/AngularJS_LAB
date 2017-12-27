import webpackBase from './webpack.config.base';
import path from 'path';


const pathSrc = 'dist';
webpackBase.output = {
    path: path.resolve(__dirname, pathSrc),
    publicPath: '/',
    filename: '[name].js'
};
webpackBase.devServer = {
    stats: { colors: true },
    contentBase: path.resolve(__dirname, pathSrc)
};

export default webpackBase;
