const path              = require('path');
const {
    CleanWebpackPlugin
}                       = require('clean-webpack-plugin');
const fs                = require('fs');
const webpack           = require('webpack');
const dotenv            = require('dotenv');

dotenv.config({path: './.env'});


const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
    ].filter(Boolean);
    if (preProcessor) {
        loaders.push(
            {
                loader: require.resolve('resolve-url-loader'),
                options: {
                    sourceMap: true,
                    root: path.resolve(fs.realpathSync(process.cwd()), 'src'),
                },
            },
            {
                loader: require.resolve(preProcessor),
                options: {
                    sourceMap: true,
                },
            }
        );
    }
    return loaders;
};

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve('./public', 'static'),
        chunkFilename: 'js/[name].chunk.js',
    },
    module: {
        strictExportPresence: true,
        rules: [
            { parser: { requireEnsure: false } },
            {
                oneOf: [
                    {
                        test: [/\.avif$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'),
                            mimetype: 'image/avif',
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'),
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: [/\.tsx?$/, /\.ts?$/],
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.css$/,
                        exclude: /\.module\.css$/,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: true,
                        }),
                        sideEffects: true,
                    },
                    {
                        test: /\.module\.css$/,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: true,
                            modules: {
                                getLocalIdent: require('react-dev-utils/getCSSModuleLocalIdent'),
                            },
                        }),
                    },
                    {
                        test: /\.(scss|sass)$/,
                        exclude: /\.module\.(scss|sass)$/,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: true,
                            },
                            'sass-loader'
                        ),
                        sideEffects: true,
                    },
                    {
                        test: /\.module\.(scss|sass)$/,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: true,
                                modules: {
                                    getLocalIdent: require('react-dev-utils/getCSSModuleLocalIdent'),
                                },
                            },
                            'sass-loader'
                        ),
                    },
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'public', 'index.html')
        // }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],
};