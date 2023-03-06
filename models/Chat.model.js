const { Schema, model } = require("mongoose")

const chatSchema = new Schema(
    {
        owner: {
            ref: 'User',
            type: Schema.Types.ObjectId
        },
        bodyText: {
            type: String,
            trim: true,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = model("Chat", chatSchema)