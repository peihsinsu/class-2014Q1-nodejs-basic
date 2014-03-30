// implement the product create route
exports.createProduct = function(req, res){
	var vo = {};
	vo.product_name = req.body.product_name;
	....
		mydb.jobs.createProduct(vo, function(err, data, meta){
			   res.redirect('/productList.html');
		});
}

