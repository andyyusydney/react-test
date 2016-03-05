var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var fs = require("fs")
var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));



function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){
    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

var pageSize = 3;
app.get('/articles/:page', function (req, res) {
	var page = req.params.page || 1;
	console.log("page=", page);
	//console.log(getConfig('articlesList.json'))
	var articlesList = getConfig('articlesList.json');
	
	var currentPageList = articlesList.slice(pageSize * (page-1), pageSize * page);
	console.log("currentPageList=", currentPageList);
    res.send(JSON.stringify(currentPageList, null, 3));
});

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});