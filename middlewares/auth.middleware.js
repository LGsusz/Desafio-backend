const jwt = require('jsonwebtoken')
const moment = require('moment')

const jwtconfig = {
  AUTH_SECRET: 'contraseña1234',
  AUTH_EXPIRES: '3H',
  AUTH_ROUNDS: '10'
}

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ msg: 'Acceso no autorizado' })
  }
  const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : []
  const decode = jwt.decode(token, jwtconfig.AUTH_SECRET)

  if (decode.exp < moment().unix()) {
    return res.status(320).json({
      msg: 'La sesion a expirado, reinicie'
    })
  }
  jwt.verify(token, jwtconfig.AUTH_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({ msg: 'Ha ocurrido un problema al decodificar el token', err })
    } else {
      req.user = decoded
      next()
    }
  })
}
