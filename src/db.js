import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    DB_USER

} 
from './config.js'



export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT
  
});
