module.exports = {
    entry: './src/Canvanoid.js',
    output: {
        library: 'Canvanoid',
        filename: './dist/canvanoid.bundle.js'
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