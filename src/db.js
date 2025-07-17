/*import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    DB_USER

} 
from './config.js'
*/


import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // <- Aceptar certificados autofirmados
  },

  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: true, // Esto es necesario en Railway PostgreSQL
})
