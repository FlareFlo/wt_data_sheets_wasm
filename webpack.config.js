const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');

const dist = path.resolve(__dirname, "dist");

module.exports = {
	mode: "production",
	entry: {
		index: "./js/index.js"
	},
	output: {
		path: dist,
		filename: "[name].js"
	},
	devServer: {
		contentBase: dist,
		host: 'localhost',
		port: 8081,
	},
	plugins: [
		new CopyPlugin([
			path.resolve(__dirname, "static/manifest"),
			path.resolve(__dirname, "static/metafiles"),
			path.resolve(__dirname, "static/css"),
			path.resolve(__dirname, "static/html"),
		]),

		new WasmPackPlugin({
			crateDirectory: __dirname,
		}),

		new workboxPlugin.GenerateSW({
			swDest: 'sw.js',
			clientsClaim: true,
			cleanupOutdatedCaches: true,
			runtimeCaching: [{
				urlPattern: /\.(?:html|css|js|wasm|svg|json|ico|png)$/,
				handler: 'StaleWhileRevalidate',
				options: {
					cacheName: 'page',
					expiration: {
						// caches no more than 1 hour
						maxAgeSeconds: 60 * 60,
						purgeOnQuotaError: true,
					},
				},
			}],
		}),
	]
};
