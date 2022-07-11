const boom = require('@hapi/boom');

function checkAdminRole(req, res, next) {
    const user = req.user;
    if ( req.user.roleadmin === true) {
      next();
    } else {
     res.status(401).json('unautorized');
      next(boom.unauthorized());
    }
  }

  function checkSuperadminRole(req, res, next) {
    const user = req.user;
    if (req.user.rolesuper === true) {
      next();
    } else {
      next(boom.unauthorized());
    }
  }

  module.exports={checkAdminRole, checkSuperadminRole};