Class4 Lab3
====

## 說明：

建立產品資料建檔的維護網頁
* 使用mysql套件規劃產品的新刪改查功能頁面
	* 產品總列表，含刪除產品、進入Detail隻聯結
	* 產品Detail頁面
	* 產品修改頁面

## 參考範例：

app.js實作片段

```
// implement the product create route
app.post('/products', dbroutes.createProducts);
```

資料庫操作片段

```
//implement the data create routing
var script = { ...
	"createProduct": function(vo, callback){
		db.query(
			'insert into tb_product (product_name, ...., update_user) values (?,?,?,?,now())',
			[vo.product_name, ...., vo.update_user],  callback);
		}...
}
exports.jobs = script;
```

