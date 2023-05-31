const { runMigrations } = require('.');

runMigrations()
  .then(() => {
    console.log('Migrações aplicadas com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao executar as migrações:', error);
    process.exit(1);
  });
