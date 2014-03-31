
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var folder = '/tmp';

app.get('/res/file', function(req, res){
	console.log('Do get...');
	//implement the file read
	var path = folder + '/' + req.body.filename;
	console.log('Read file in path: ' + path);
	var out = fs.readFileSync(path, 'utf8');
	res.end(out);
});

app.post('/res/file', function(req, res){
	console.log('Do post...');
	var path = folder + '/' + req.body.filename;
	var txt = req.body.body;
	fs.writeFile(path, txt, 'utf8', function() {
		res.end('create done');
	});	
	//implement the file create
});

app.put('/res/file', function(req, res){
	console.log('Do put...');
	//implement the file update 
	var path = folder + '/' + req.body.filename;
	var txt = req.body.body;
	fs.writeFile(path, txt, 'utf8', function() {
		res.end('update done');
	});	
});

app.del('/res/file', function(req, res){
	console.log('Do delete...');
	var path = folder + '/' + req.body.filename;
	//implement the file delete 
	fs.unlink(path, function(){
		res.end('delete done');
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
