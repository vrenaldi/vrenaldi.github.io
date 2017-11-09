const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    entry: './src/assets/ts/main.ts',
    output: {
        filename: 'assets/js/bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 2, minimize: true } },
                        { loader: 'postcss-loader', options: { plugins: [require('precss'), require('autoprefixer')] } },
                        { loader: 'sass-loader' }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                use: 'url-loader'
            },
            {
                test: require.resolve('snapsvg/dist/snap.svg-min.js'),
                use: 'imports-loader?this=>window,fix=>module.exports=0',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin('assets/css/main.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
};