const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];
const uploadFolder = config.uploadPath;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split(".");
    const filename = file.fieldname + '-' + Date.now() + '.' + extension[extension.length - 1];
    cb(null, filename);
  }
});
const upload = multer({storage: storage}).any();
const router = express.Router();

/* Upload files */
router.post('/', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      console.error(err);
      return res.sendStatus(400);
    }

    if (req.files.length === 0)
      return res.status(400).send('Couldn\'t find any attached file(s).');

    const fileData = req.files.map(item => {
      return {
        "originalname": item.originalname,
        "newfilename": item.filename
      }
    });

    res.send({
      status: "200",
      response: "Upload successfully is completed!",
      fileData: fileData
    });
  });
});

/* Get file list */
router.get('/', function (req, res, next) {
  fs.readdir(uploadFolder, (err, files) => {
    if (err) {
      console.error(err);
      return res.sendStatus(400);
    }
    var fileJson = files.map(function (fileName) {
      const stats = fs.statSync(uploadFolder + fileName);
      const fileSizeInBytes = stats.size;
      // Convert the file size to megabytes
      const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;
      return {name: fileName, size: fileSizeInMegabytes};
    });
    res.json(fileJson);
  })
});

/* Get file */
router.get('/:fileName', function (req, res, next) {
  try {
    res.sendFile(path.resolve(uploadFolder + req.params.fileName));
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

/* Delete file */
router.delete('/:fileName', function (req, res, next) {
  const file = uploadFolder + req.params.fileName;
  fs.stat(file, function (err, stats) {
    if (err) {
      console.error(err);
      return res.sendStatus(400);
    }

    fs.unlink(file, function (err) {
      if (err) {
        console.error(err);
        return res.sendStatus(400);
      }
      res.send({
        status: "200",
        response: "File is deleted!"
      });
    });
  });
});

module.exports = router;
