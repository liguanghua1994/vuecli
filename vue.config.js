const webpack = require('webpack');

module.exports = {
    configureWebpack: {//引入jquery

        plugins: [

            new webpack.ProvidePlugin({

                $:"jquery",

                jQuery:"jquery",

                "windows.jQuery":"jquery"

            })

        ]

    },
    devServer: {//配置服务器代理,实现跨域
        proxy: {
            '/api': {
                target: 'http://localhost:8080/credit', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-project/'
        : '/'
}