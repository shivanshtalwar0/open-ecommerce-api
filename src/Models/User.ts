import { Schema, model, Document} from "mongoose"


const UserSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true

    },
    age: {
        type: Schema.Types.Number,
        required: true
    }
})
const User= model("user", UserSchema);

export {User}
