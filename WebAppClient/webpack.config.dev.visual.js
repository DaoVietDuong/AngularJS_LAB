import webpackBase from './webpack.config.base';
import path from 'path';

const pathSrc = 'dist';
webpackBase.output = {
    path: path.resolve(__dirname, pathSrc), //path directory to save files
    publicPath: './dist/', //path file will be insert on html file
    filename: '[name].js'
}

export default webpackBase;
