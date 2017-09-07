var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	entry:{
		app:__dirname+'/js/index.js',
//		main:__dirname+'/js/index2.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:"[name].js",
//		chunkFilename:
	},
	module:{
		rules:[{
			test:/\.js$/,
			loader:'babel-loader',
			options:{
				"presets":[
					"es2015"
				]
			}
		},{
			test:/\.css$/,
			use:['style-loader','css-loader']
		},{
			test:/\.png|.jpg$/,
			use:['url-loader']
		},{
			test:/\.html$/,
			use:['html-loader']
		}]
	},
	devServer:{
		hot: true,  
		port: 9999,
		host: 'localhost',
		setup(app) {
			app.get('/data/path', function(req, res) {
	    		var data=[
	    				{
							title: '转角遇到爱',
							content: "你在不",
							src: "img/a (1).png",
							time:'1:04'
						},
						{
							title: '四中',
							content: "说话说话",
							src: "img/a (2).png",
							time:'0:37'
						},
						{
							title: 'es6前端开发',
							content: "兼容pc端",
							src: "img/a (3).png",
							time:'0:32'
						},
						{
							title: 'es6前端开发',
							content: "兼容pc端",
							src: "img/a (4).png",
							time:'0:25'
						},
						{
							title: 'es6前端开发',
							content: "兼容pc端",
							src: "img/a (5).png",
							time:'0:09'
						}]
	    		res.json({data:data});
			});
		}
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.html'
		}),
//		new webpack.optimize.UglifyJsPlugin(),//把js压缩成1行
//		new webpack.optimize.CommonsChunkPlugin({
//			name:'commons',
//			filename:'common.js'
//		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
