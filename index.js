/* eslint-disable eqeqeq */
/* eslint-disable n/no-path-concat */

const express = require('express')
const app = express()
const db = require('./models')
const morgan = require('morgan')
const bcrypt = require('bcrypt')
const path = require('path')
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()

app.use(cors())

const userRoutes = require('./routes/usuario.routes')
const jwtconfig = {
  AUTH_SECRET: 'contraseña1234',
  AUTH_EXPIRES: '3H',
  AUTH_ROUNDS: '10'
}
db.sequelize.sync({ alter: true, force: false, logging: console.log })
  .then(() => {
    console.log('tablas sincronizadas')
  })

app.use(morgan('combined'))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/login.html'))
})
app.use(userRoutes)

//  METODO POST PARA REALIZAR VALIDACION DE LOGIN
app.post('/login', async (req, res) => {
  const email = req.body.email
  const pass = req.body.pass
  let usuario
  if (email != undefined && pass != undefined) {
    usuario = await db.Usuarios.findOne({
      where: { email },
      include: db.Permisos
    })
  } else {
    res.send('email o contraseñas invalido')
    return
  }
  if (usuario != undefined) {
    if (bcrypt.compareSync(pass, usuario.password) === true) {
      await db.Accesos.create(
        {
          id_usuario: usuario.id
        }
      )
      const token = jwt.sign({ usuario }, jwtconfig.AUTH_SECRET, { expiresIn: jwtconfig.AUTH_EXPIRES })
      return res.status(200).send({ msg: 'Usuario ingresado exitosamente', token })
    } else {
      res.send('contraseña invalida.')
    }
  } else {
    res.send('no se encontro.')
  }
})

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000')
})
