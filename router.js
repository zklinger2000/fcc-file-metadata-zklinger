const FileUpload = require('./controllers/file_upload');

module.exports = function(app) {
  // app.get('/', requireAuth, function(req, res) {
  //   res.send({ message: 'Super secret code is ABC123' });
  // });

  app.get('/', function(req, res) {
    res.render('pages/index');
  });

  app.get('/api/upload/*', FileUpload.fileUpload);

  // app.param('postId', Blogger.blogPostById);
};
