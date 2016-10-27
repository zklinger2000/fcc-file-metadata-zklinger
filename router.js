const FileUpload = require('./controllers/file_upload');
const multer = require('multer');
const upload = multer();

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('pages/index');
  });

  app.post('/api/upload', upload.single('myfile'), FileUpload.fileUpload);
};
