import { model, Schema } from 'mongoose'
import bcryptjs  from 'bcryptjs'

const rolesEnum = ["ADMIN", "MERCHANT", "CUSTOMER"]

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 40
    },
    
    image: {
        type: String,
        default: "https://picsum.photos/400"
    },

    password: {
        type: String,
        required: [true, "Password field is required"],
        trim: true,
    },

    email: {
        type: String,
        required: [true, "Email field is required"],
        trim: true,
        unique: true,
    },

    role: {
        type: String,
        validate: {
        validator: function (status){
            return rolesEnum.includes(status)
        },
        message: (props) => `${props.value} is not a valid role`
    },
    enum: rolesEnum,
    required: [true, "Role field is required"],
    },

})





export default model ("User", userSchema);
