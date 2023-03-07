const { Schema, model } = require("mongoose")

const clubSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre del club es obligatorio.']
        },
        description: {
            type: String,
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        imageUrl: {
            type: String,
            required: [true, 'La imagen de portada es obligatoria.'],
            default: ""
        },
        fields: [{
            ref: 'Field',
            type: Schema.Types.ObjectId
        }],
        owner: [{
            ref: 'User',
            type: Schema.Types.ObjectId
        }]
    },
    {
        timestamps: true
    }
)

clubSchema.index({ location: '2dsphere' })

module.exports = model("Club", clubSchema)