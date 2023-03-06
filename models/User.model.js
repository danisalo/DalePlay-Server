const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'El nombre es obligatorio.']
    },
    lastName: {
      type: String,
      required: [true, 'El apellido es obligatorio.']
    },
    username: {
      type: String,
      required: [true, 'El username es obligatorio.']
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
      required: [true, 'La contraseña es obligatoria.']
    },
    imageUrl: {
      type: String,
      required: [true, 'La imagen de perfil es obligatoria.'],
    },
    role: {
      type: String,
      enum: ['USER', 'OWNER', 'ADMIN'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }
)


module.exports = model("User", userSchema)