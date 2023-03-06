const { Schema, model } = require("mongoose")

const clubSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre del club es obligatorio.']
        },

        description: {
            type: String,
            // required: [true, 'Descripcion del clubs.']
        },

        // location: {
        //     type: String
        //     ref:
        // }
        fieldsId: {
            type: Schema.Types.ObjectId,
            ref: 'Field'
        },
        imageUrl: {
            type: String,
            required: [true, 'La imagen de portada es obligatoria.'],
        }
    },
    {
        timestamps: true
    }
)


module.exports = model("Club", clubSchema)