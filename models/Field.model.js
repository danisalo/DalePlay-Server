const { Schema, model } = require("mongoose")

const fieldSchema = new Schema(
    {
        sport: {
            type: String,
            required: [true, 'El deporte es obligatorio.'],
            enum: ['Futbol-5', 'Futbol-7', 'Futbol-11', 'Volleyball-6', 'Baloncesto-3', 'Baloncesto-5', 'Padel-2', 'Padel-4', 'Tennis-2', 'Tennis-4']
        },
        timeSlots: [{
            type: String
        }],
        hourlyPrice: {
            type: Number,
            // required: [true, 'El precio es obligatorio.']
        },
        maxPlayers: {
            type: Number,
            // required: [true, 'El número máximo de participantes es obligatorio.']
        },
        imageUrl: {
            type: String,
            // required: [true, 'La imagen de la unidad deportiva es obligatoria.'],
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


module.exports = model("Field", fieldSchema)