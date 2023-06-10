const pool = require('../database/connection');

class UserRepository {
  async findUserByEmail(email) {
    try {
      const query = 'SELECT * FROM farmaki.users WHERE email = $1';
      const values = [email];

      const result = await pool.query(query, values);
      const [user] = result.rows;

      return user;
    } catch (error) {
      console.error('Erro ao buscar usuário por email:', error);
      throw error;
    }
  }
}

module.exports = { UserRepository };
