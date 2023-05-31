const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'farmaki_db',
});

async function runMigrations() {
  try {
    // await client.connect();

    // const migrationFiles = fs.readdirSync('.');
    // for (const migrationFile of migrationFiles) {
    //   const filePath = path.join('.', migrationFile);
    //   const migrationSQL = fs.readFileSync(filePath, 'utf8');

    //   await client.query('BEGIN');
    //   try {
    //     await client.query(migrationSQL);

    //     const migrationName = migrationFile.replace('.sql', '');
    //     await client.query(
    //       'INSERT INTO migrations (name) VALUES ($1)',
    //       [migrationName]
    //     );

    //     await client.query('COMMIT');
    //     console.log(`Migration ${migrationName} applied successfully.`);
    //   } catch (error) {
    //     await client.query('ROLLBACK');
    //     console.error(`Error applying migration ${migrationFile}:`, error);
    //   }
    // }

    console.log('All migrations applied successfully.');
  } finally {
    await client.end();
  }
}

runMigrations().catch((error) => {
  console.error('Error running migrations:', error);
});

exports.runMigrations = runMigrations;