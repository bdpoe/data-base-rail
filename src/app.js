import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// Obtener todos los usuarios
app.get('/api/usuarios', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM registro2')
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios', details: err.message })
  }
})

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM registro2');
  res.json(rows);
});

// Insertar un nuevo usuario
app.post('/api/form', async (req, res) => {
  const { nombre, apellido, dni } = req.body
  try {
    const [result] = await pool.query(
      'INSERT INTO registro2 (nombre, apellido, dni) VALUES (?, ?, ?)',
      [nombre, apellido, dni]
    )
    res.json({ message: 'Usuario creado correctamente', id: result.insertId })
  } catch (err) {
    res.status(500).json({ error: 'Error al insertar usuario', details: err.message })
  }
})

app.listen(PORT)
console.log('🚀 Servidor backend corriendo en http://localhost:' + PORT)
