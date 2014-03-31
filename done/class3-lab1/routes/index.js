
/*
 * GET home page.
 */
// put title and content to page
exports.index = function(req, res){
  res.render('index', { title: 'Node.js Web', content: 'Hello~' });
};
