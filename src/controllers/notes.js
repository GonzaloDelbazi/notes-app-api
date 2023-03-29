const { mongoose } = require("mongoose");
const { noteSchema } = require("../models/index")

const notesControllers = {
    parseId (id) {
        return mongoose.Types.ObjectId(id)
    },
    saveNote(req, res) {
        const note = noteSchema(req.body);
        note.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
    },
    async getNotes(req, res) {
        const body = req.params;
        await noteSchema.find({idOwner: body.idOwner})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => res.json({message: err})) 
    },
    async updateNote(req, res) {
        const { _id } = req.params;
        const note = req.body;
        await noteSchema.updateOne({_id: _id}, note)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => res.json({message: err})) 
    },
    async deleteNote(req, res) {
        const body = req.params;
        await noteSchema.deleteOne({_id: body._id})
        .then((data) => {
            res.status(200).json({meesage: "Se ha eliminado correctamente"})
        })
        .catch((err) => res.json({message: err}))
    }
    
}

module.exports = notesControllers;