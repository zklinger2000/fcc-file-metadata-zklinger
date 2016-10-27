exports.fileUpload = function(req, res, next) {
  console.log(req.file);
  res.send({ size: req.file.size });
};
