import { Schema, model } from "mongoose";

const CourseSchema = new Schema({
    name: String,
    hours_duration: Number
})


export default model('Course', CourseSchema) 

