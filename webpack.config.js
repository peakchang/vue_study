const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    mode : 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    // >>>> 위에는 부가 옵션 mode(개발인지 아닌지?) / devtool(eval 하면 빠르댜) // resolve(확장자를 대신 처리? 해줌)
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
};

/* 
웹팩은 스크립트가 많아져서 합치기 위해 쓴다.
entry: {}, // 대표가 되는 파일
module: {},
plugins: [],
output: {},
이 4가지가 기본적인 설정이다.
*/