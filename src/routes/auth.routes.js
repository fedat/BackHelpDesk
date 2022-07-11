const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config')
const router = express.Router();
const Funcionario = require('../services/funcionario.service');
const service = new Funcionario();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: req.user.id,
        roleadmin: req.user.administrador,
        rolesuper: req.user.superadministrador,
      };
      const token = jwt.sign(payload, config.jwtSecret);
      res.json({
        token
      });
    } catch (error) {
      res.status(401).send('unauthorized');
    }
  }
);

module.exports = router;