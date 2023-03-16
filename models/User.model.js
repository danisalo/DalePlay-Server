const { Schema, model } = require("mongoose")

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'El nombre del usuario es obligatorio.']
    },
    lastName: {
      type: String,
      required: [true, 'El apellido del usuario es obligatorio.']
    },
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio.']
    },
    email: {
      type: String,
      required: [true, 'El correo es obligatorio.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria.'],
      minlength: [6, 'La contraseña debe tener un mínimo de 6 caracteres']
    },
    imageUrl: {
      type: String,
      default: 'https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg'
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()
})

userSchema.methods.signToken = function () {
  const { _id, username, email, role } = this
  const payload = { _id, username, email, role }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
  )

  return authToken
}

userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}


module.exports = model("User", userSchema)