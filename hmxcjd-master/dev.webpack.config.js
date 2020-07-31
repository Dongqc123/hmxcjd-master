const path = require('path');
const webpack = require('webpack');
const { webpackDevServerMock } = require('dw-mx-request-mock');


const {getRules, getPlugins, getOutput} = require("./common.webpack.config");

const cwd = process.cwd();

module.exports = {
    mode: 'development',
    entry: ['react-hot-loader/patch', '@babel/polyfill', path.resolve(cwd, './src/index.tsx')],
    output: getOutput('development'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            "@": path.resolve(cwd, "./src")
        }
    },
    cache: true,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        before: webpackDevServerMock,
        publicPath: '/',
        open: true,
        host: '0.0.0.0',
        hot: true,
        port: 8887,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/mx': {
                target: `http://10.1.96.34:8080/dwwsa/mousex/`,
                proxyTimeout: 30 * 1000,
                timeout: 30 * 1000,
                cookiePathRewrite: {
                    [`/dwwsa`]: '/'
                },
            }
        }
    },
    module: {
        rules: getRules('development')
    },
    plugins: getPlugins('development')
};
