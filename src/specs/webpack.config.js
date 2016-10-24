module.exports = {
    entry: {
        canvanoid: './src/canvanoid.spec.js',
        solid: './src/solid.spec.js',
        board: './src/board.spec.js'
    },
    output: {
        path: './dist/',
        filename: '[name].specpack.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: ["add-module-exports"]
            }
        }]
    }
};