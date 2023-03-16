const { Schema, model } = require("mongoose")

const fieldSchema = new Schema(
    {
        sport: {
            type: String,
            required: [true, 'El deporte es obligatorio.'],
            enum: ['Futbol 5v5', 'Futbol 7v7', 'Futbol 11v11', 'Volleyball 6v6', 'Baloncesto 3v3', 'Baloncesto 5v5', 'Padel 1v1', 'Padel 2v2', 'Tennis 1v1', 'Tennis 2v2']
        },
        timeSlots: [{
            type: String
        }],
        hourlyPrice: {
            type: Number,
            required: [true, 'El precio por hora es obligatorio.']
        },
        maxPlayers: {
            type: Number
        },
        imageUrl: {
            type: String,
            default: 'https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg'
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