Class1 Lab2
====

## 說明：

透過fs模組讀取某個目錄底下的文件，並提供給http模組做呈現

## 參考範例：

```
var fs = require('fs')
	, http = require('http')

http.createServer(function(req, res) {
	//implement the file read of one file and put to response
	//res.end(fs.readFileSync(...));
});
```
