import { Schema, model, SchemaTypes } from "mongoose";

const CertificateSchema = new Schema({
    file: Object,
    course_id: Number,
    user_id: Number,
    created_at: Date
})

export default model('Certificate', CertificateSchema) 
