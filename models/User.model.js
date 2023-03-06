const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      default: '',

    },
    lastName: {
      type: String,
      default: '',

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
      default: 'ffff.png',

    },
    role: {
      type: String,
      enum: ['USER', 'OWNER', 'ADMIN'],
      default: 'USER'
    },
    events: [{
      ref: 'Event',
      type: Schema.Types.ObjectId
    }]
  },
  {
    timestamps: true
  }
)


module.exports = model("User", userSchema)