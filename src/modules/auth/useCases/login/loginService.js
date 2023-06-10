const { UserRepository } = require("../../../../infra/repositories/userRepository");

class LoginService {
  constructor() {
    this.userRepository = new UserRepository(); 
  }

  async execute({ email, password }) {
    const userExists = await this.userRepository.findUserByEmail(email);

    if (!userExists) {
      throw new Error('Usuário ou Senha incorretos!');
    }

    if (userExists.password !== password) {
      throw new Error('Usuário ou Senha incorretos!');
    }

    return userExists;
  }
}

module.exports = { LoginService };