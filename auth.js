const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Artist } = require('./models')
const SALT = 11;
const SECRET = 'super duper secret'


const hash = async password => await bcrypt.hash(password, SALT);

const compare = async (password, password_digest) => await bcrypt.compare(password, password_digest);

const encode = async data => await jwt.sign(data, SECRET);

const verify = async token => await jwt.verify(token, SECRET);

const restrict = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, SECRET);
    const user = await Artist.findByPk(data.id);

    res.locals.user = user;

    next();
  } catch (e) {
    res.status(401).send('Not Authorized');
  }
}

// const main = async () => {
//   const stuff = await encode('stuff');
// }
//
// main();

module.exports = {
  hash,
  encode,
  compare,
  restrict
}
