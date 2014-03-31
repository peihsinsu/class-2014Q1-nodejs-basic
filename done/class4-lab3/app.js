
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var partials = require('express-partials');
var app = express();
var db = require('./lib/mydb');
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
app.use(partials());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/product/:id', 
		function(req, res) {
			db.jobs.queryProduct(req.params.id, function(err, rows, fields){
				res.send(rows);
			} );
		}
);

app.post('/product/byname/:prdname', function(req, res) {
	db.jobs.createProduct(req.params.prdname, req.body.prddesc, req.body.amount, function(err, rows, fields){
		res.send(rows);
	} );
});

app.put('/product/byid/:id', function(req, res) {
	db.jobs.updateProduct(req.params.id, req.body.prdname, 
		req.body.prddesc, req.body.amount, function(err, rows, fields){
		res.send(rows);
	} );
});

app.del('/product/byid/:id', function(req, res) {
	db.jobs.deleteProduct(req.params.id, function(err, rows, fields){
		res.send(rows);
	});
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
