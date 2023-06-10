const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const connectionString = 'postgres://postgres:postgres@localhost:5432/farmaki_db';

async function applyMigrations() {
  const client = new Client({ connectionString });
  await client.connect();

  try {
    const migrationFiles = fs.readdirSync(path.join(__dirname, 'migrations'));

    for (const file of migrationFiles) {
      const filePath = path.join(__dirname, 'migrations', file);
      const sql = fs.readFileSync(filePath, 'utf-8');

      try {
        await client.query(sql);
        console.log(`Migração aplicada: ${file}`);
      } catch (error) {
        console.error(`Erro ao aplicar a migração ${file}: ${error}`);
      }
    }
  } catch (error) {
    console.error('Erro ao ler os arquivos de migração:', error);
  } finally {
    await client.end();
  }
}

applyMigrations();
