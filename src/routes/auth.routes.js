const { Router } = require('express');
const { LoginController } = require('../modules/auth/useCases/login/loginController');

const authRoutes = Router();

const loginController = new LoginController();

authRoutes.post('/login', loginController.handle);

module.exports = { authRoutes };