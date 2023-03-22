const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    isEditable: {
        type: Boolean,
        default: false
    },
    idOwner: {
        type: String,
        required: true
    },
    collaborators: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Notes', noteSchema)