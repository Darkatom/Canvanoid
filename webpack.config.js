var glob = require("glob");

module.exports = {
    entry: { 
        canvanoid: './src/main.js',
        'canvanoid.specs': glob.sync('./src/specs/src/*.spec.js')
    },
    output: {
        library: 'Canvanoid',
        filename: './dist/[name].bundle.js'
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
