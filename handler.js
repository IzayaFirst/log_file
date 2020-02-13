const cf = require('./config.json');
const db = require('./db');

exports.welcome = (req, res, next) => res.send('Wifi logger api')

exports.login = (req, res, next) => {
  const {
    username = null,
    password = null,
  } = req.body
  if (username === cf.username && password === cf.password) {
    return res.status(200).json({
      token: cf.token
    })
  } else {
    return res.status(501)
  }
}

exports.getLog = async (req, res, next) => {
  const {
    limit = 0,
    offset = 10,
  } = req.query
  try {
    const logs = await db.getLog(limit, offset)
    res.status(200).json({
      logs,
    })

  } catch(err) {
    res.status(500).json({
      error: err.message
    })
  }
}