const { Schema, model } = require("mongoose")

const eventSchema = new Schema(
    {
        host: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            required: [true, 'El nombre del Evento es obligatorio.'],
        },
        notes: {
            type: String
        },
        timeSlot: [{
            type: String
        }],
        cost: {
            type: String
        },
        day: {
            type: String
        },
        timeStart: {
            type: String,
            required: [true, 'La hora de inicio es obligatoria.']
        },
        playMinTotal: {
            type: String,
            required: [true, 'El tiempo de juego es obligatorio.']
        },
        players: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        field: {
            ref: 'Field',
            type: Schema.Types.ObjectId
        },
        comments: [{
            ref: 'Chat',
            type: Schema.Types.ObjectId
        }]
    },
    {
        timestamps: true
    }
)


module.exports = model("Event", eventSchema)