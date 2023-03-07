const { Schema, model } = require("mongoose")

const eventSchema = new Schema(
    {
        host: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            required: [true, 'Event name required.'],
        },
        notes: {
            type: String
        },
        timeStart: {
            type: String,
            required: [true, 'Starting time is required.']
        },
        timeEnd: {
            type: String,
            required: [true, 'Ending time is required.']
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