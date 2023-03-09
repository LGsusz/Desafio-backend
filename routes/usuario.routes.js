const { Router } = require('express')
const authmiddleware = require('../middlewares/auth.middleware')
const db = require('../models')
const bcrypt = require('bcrypt')

const router = Router()

router.get('/cargarPermisos', (req, res) => {
  db.Permisos.findAll().then(users => {
    res.status(200).json(users)
  })
    .catch(err => {
      console.error('Error al buscar usuarios:', err)
      res.status(500).send('Error al buscar usuarios')
    })
})

router.get('/cargarAccesos', (req, res) => {
  db.Accesos.findAll().then(users => {
    res.status(200).json(users)
  })
    .catch(err => {
      console.error('Error al buscar usuarios:', err)
      res.status(500).send('Error al buscar usuarios')
    })
})

router.get('/cargarUsuarios', (req, res) => {
  db.Usuarios.findAll().then(users => {
    res.status(200).json(users)
  })
    .catch(err => {
      console.error('Error al buscar usuarios:', err)
      res.status(500).send('Error al buscar usuarios')
    })
})
router.get('/buscarUsuario/:id', authmiddleware, (req, res) => {
  db.Usuarios.findOne({
    where: { id: req.params.id }
  }).then(users => {
    res.status(200).json(users)
  })
    .catch(err => {
      console.error('Error al buscar usuarios:', err)
      res.status(500).send('Error al buscar usuarios')
    })
})

router.post('/crearUsuario', authmiddleware, async (req, res) => {
  const datos = req.body
  datos.password = await bcrypt.hash(datos.password, 10)
  db.Usuarios.create(datos)
  res.status(200).json('usuario creado')
})

router.put('/actualizarUsuario/:id', authmiddleware, (req, res) => {
  const idUser = req.url
  const idfinal = idUser.slice(-1)
  const id = Number(idfinal)
  const datos = req.body
  db.Usuarios.update(datos, { where: { id } })
  res.status(200).json('usuario actualizado')
})

router.delete('/eliminarUsuario/:id', authmiddleware, (req, res) => {
  const idUser = req.url
  const idfinal = idUser.slice(-1)
  const id = Number(idfinal)
  db.Usuarios.destroy({ where: { id } })
  res.status(200).json('usuario eliminado')
})

module.exports = router
