import  express from 'express'
import pool from './db.js'
import {PORT} from './config.js'

const app = express()   

app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.send(rows)
})

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT "HELLO WORDL" as RESULT' );
    res.json(result[0])
})

    app.get('/create', async (req, res) => {
       const result = await pool.query('INSERT INTO userss(name)VALUES("jhon")')
    
    res.json(result)
})

app.listen(PORT)
console.log('serve 3000', PORT)
