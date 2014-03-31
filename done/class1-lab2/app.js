var fs = require('fs')
	, http = require('http')

http.createServer(function(req, res) {
	//implement the file read of one file and put to response
	res.end(fs.readFileSync(__dirname + '/data.txt'));
}).listen(3000);
