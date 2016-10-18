module.exports = {
    entry: './src/solid.spec.js',
    output: {
        filename: 'solid.specpack.js'
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