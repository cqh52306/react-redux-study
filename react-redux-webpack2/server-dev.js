"use strict";

process.argv.push('--dev');
var webpack = require("webpack"),
	WebpackDevServer = require("webpack-dev-server"),
	open = require("open"),
	config = require("./webpack.config");


new WebpackDevServer(webpack(config), config.devServer)
	.listen(config.devServer.port, "0.0.0.0", function (error) {
		if (error) {
			console.log(error);
		}
		console.log(`http://${config.devServer.host}:${config.devServer.port}`);
		open(`http://${config.devServer.host}:${config.devServer.port}`);
	});

