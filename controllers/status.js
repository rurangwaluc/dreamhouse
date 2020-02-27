const Status = require('../models/status');
const {
  errorHandler
} = require('../helpers/dbErrorHandler');



exports.statusById = (req, res, next, id) => {
  Status.findById(id).exec((err, status) => {
    if (err || !status) {
      return res.status(400).json({
        error: 'status does not exist'
      });
    }
    req.status = status;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.status);
};

exports.create = (req, res) => {

  const status = new Status(req.body);

  status.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    };
    res.json({
      data
    });
  });
};

exports.update = (req, res) => {
  console.log('req.body', req.body);
  console.log('status update param', req.params.statusId);

  const status = req.status;
  status.name = req.body.name;
  status.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  });
};


exports.remove = (req, res) => {
  const status = req.status;
  // Product.find({
  //   status
  // }).exec((err, data) => {
  //   if (data.length >= 1) {
  //     return res.status(400).json({
  //       message: `Sorry. You can't delete ${status.name}. It has ${data.length} associated products.`
  //     });
  //   } else {
  status.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message: 'status deleted'
    });
    //   });
    // }
  });
};

exports.list = (req, res) => {
  Status.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  });
};