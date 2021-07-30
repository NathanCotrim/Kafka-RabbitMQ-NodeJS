import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
    file: Object,
    course_id: Number,
    user_id: Number,
    created_at: {
        type: Date,
        default: Date.now()
    }
})

const Certificate = mongoose.model('Certificate', CertificateSchema) 
export { Certificate }

