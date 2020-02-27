const mongoose = require("mongoose");
const {
    ObjectId
} = mongoose.Schema;

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    status: {
        type: ObjectId,
        ref: "Status",
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    garage: {
        type: Number,
        required: true
    },
    lounge: {
        type: Number,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Property", propertySchema);