const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'ccUtils',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'ccUtils.js'
    },
};