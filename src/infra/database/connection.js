const { Pool } = require('pg');

const config = {
  user: 'postgres',        
  password: 'postgres',    
  host: 'localhost',       
  port: 5432,              
  database: 'farmaki_db'   
}

const pool = new Pool(config);

pool.connect((err, client, done) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  }
  console.log('Conexão estabelecida com sucesso!');

  done();
});

module.exports = pool;
