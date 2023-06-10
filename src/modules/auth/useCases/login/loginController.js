const { LoginService } = require('./loginService');

class LoginController {
  async handle(req, res) {
    try {
      const { password, email } = req.body;
      const loginService = new LoginService();

      const response = await loginService.execute({ 
        password, 
        email
      });

      const { password: userPassword, ...user } = response;
    
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = { LoginController };