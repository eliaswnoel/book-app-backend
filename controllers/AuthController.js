const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { email, password } = req.body
    // Finds a user by a particular field (in this case, email)
    const user = await User.findOne({ email })
    // Checks if the password matches the stored digest
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    // If they match, constructs a payload object of values we want on the front end
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      // Creates our JWT and packages it with our payload to send as a response
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}

const Register = async (req, res) => {
    console.log(req.body)
    console.log('banana')
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).send("A user with that email has already been registered!")
  } else {
    const user = await User.create({ email, passwordDigest, name })
    return res.send(user)
  }

    } catch (error) {
    console.log(error)
    res.status(400).json(error);
}
}


module.exports = {
  Login,
  Register,

}