import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String
})


export default model('User', UserSchema) 


