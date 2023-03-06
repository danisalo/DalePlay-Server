const { Schema, model } = require("mongoose")

const fieldSchema = new Schema(
    {
        sport: {
            type: String,
            required: [true, 'El deporte es obligatorio.'],
            enum: ['Futbol5', 'Futbol7', 'Futbol11', 'Volleyball', 'Baloncesto3', 'Baloncesto5', 'Padel', 'Tennis']
        },
        type: {
            type: String,
            required: [true, 'La unidad deportiva es obligatoria.'],
            enum: ['PUBLIC', 'PRIVATE']
        },
        hourPrice: {
            type: Number,
            required: [true, 'El precio es obligatorio.']
        },
        numParticipants: {
            type: Number,
            required: [true, 'El número máximo de participantes es obligatorio.']
        },
        imageUrl: {
            type: String,
            required: [true, 'La imagen de la unidad deportiva es obligatoria.'],
        },
    },
    {
        timestamps: true
    }
)


module.exports = model("Field", fieldSchema)