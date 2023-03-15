const { Schema, model } = require("mongoose")

const clubSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre del Club es obligatorio.']
        },
        description: {
            type: String,
        },
        address: {
            type: String,
            required: [true, 'La ubicación del Club es obligatoria.'],
        },
        imageUrl: {
            type: String,
            required: [true, 'La imagen de portada del Club es obligatoria.'],
            default: 'https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg'
        },
        fields: [{
            ref: 'Field',
            type: Schema.Types.ObjectId
        }],
        owner: {
            ref: 'User',
            type: Schema.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
)


module.exports = model("Club", clubSchema)