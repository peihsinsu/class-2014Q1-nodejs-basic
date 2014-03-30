//implement the data create routing
var script = { ...
	"createProduct": function(vo, callback){
		db.query(
			'insert into tb_product (product_name, ...., update_user) values (?,?,?,?,now())',
			[vo.product_name, ...., vo.update_user],  callback);
		}...
}
exports.jobs = script;


