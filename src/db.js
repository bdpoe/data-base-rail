import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    DB_USER

} 
from './config.js'



const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  
});
