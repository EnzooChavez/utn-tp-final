import { model, Schema } from 'mongoose'

const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"]

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name fiel is required"],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 40
    },
    
    status: {
        type: String,
        validate: {
            validator: function (status){
                return statusEnum.includes(status)
            },
            message: (props) => `${props.value} is not a valid status`
        },
        required: true,
        enum: statusEnum,
    },

    creationAt: {
        type: Date,
        default: Date.now
    },

    price: {
        type: Number,
        required: [true, "Price field is required"],
        min: [0, "Price field has to be a number"]
    },

    image: {
        type: String,
        default: "https://picsum.photos/400"
    }

})

export default model ("Product", productSchema);
