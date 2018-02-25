var webpack = require('webpack');
var path = require('path');

var config = {
	devtool: 'eval',
	mode: 'development',
	context: path.resolve(__dirname, './../src'),
	entry: {
		main: [ 'babel-polyfill', './entry.js' ],
	},
	output: {
		path: path.resolve(__dirname, './../public/dist'),
		publicPath: '/',
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: [ 'react', 'stage-0' ],
					}
				}
			},

			{ test: /\.png$/, exclude: /node_modules/, use: 'url-loader?limit=100000' },
			{ test: /\.jpg$/, exclude: /node_modules/, use: 'file-loader' },
		]
	},
};

module.exports = config;
