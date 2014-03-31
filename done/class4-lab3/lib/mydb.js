var mysql = require('mysql')

var db_options = { 
	host: '173.194.81.37',
	port: 3306,  
	user: 'root',
	password: '12341234',  
	database: 'nodejs'
};

var db = mysql.createConnection(db_options);  

var jobs = {
	queryProduct: 
		function(id, callback) {
			db.query(
					'select * from tb_product where id = ?', [id], 
					function(err, rows, fiels) {
		  			if(err) return console.log(err);
						callback(err, rows, fiels);
			});		
		},
	createProduct: 
		function(prdname, prddesc, amount, callback) {
			db.query(
					'insert into tb_product (product_name, product_descript, amount, update_date, update_user) values (?,?,?,?,?)',
					[prdname, prddesc, amount, new Date(), 'sys'], 
					function(err, rows, fiels) {
		  			if(err) return console.log(err);
						callback(err, rows, fiels);
			});		
		},
	updateProduct: 
		function(id, prdname, prddesc, amount, callback) {
			db.query(
					"update tb_product set product_name = ?, product_descript = ?, amount = ?, update_date = now(), update_user = 'sys' where id = ?",
					[prdname, prddesc, amount, id], 
					function(err, rows, fiels) {
		  			if(err) return console.log(err);
						callback(err, rows, fiels);
			});		
		},
	deleteProduct: 
		function(id, callback) {
			db.query(
					"delete from tb_product where id = ?",
					[id], 
					function(err, rows, fiels) {
		  			if(err) return console.log(err);
						callback(err, rows, fiels);
			});		
		}

}

exports.jobs = jobs
