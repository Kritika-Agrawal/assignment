const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devtool: 'source-map',
    target: 'web',
    mode : 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader' ],
            }
        ],
    },
    devServer: {
        port: 9000,
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html', 
            template: './src/index.html',
            path: path.join(__dirname, "../dist/"),
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: false,
            filename: 'index.css',
        }),
    ]
}
