const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'invoices_db',
  user: process.env.DB_USER || 'invoice_user',
  password: process.env.DB_PASSWORD || 'invoice_pass',
});

const initDb = async () => {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS customers_schema;

    CREATE TABLE IF NOT EXISTS customers_schema.customers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE,
      phone VARCHAR(50),
      address TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `);
  console.log('Customers DB schema initialized');
};

module.exports = { pool, initDb };
