const express = require("express")
const {notesControllers} = require("../controllers/index")
const userSchema = require('../models/user')
const noteSchema = require('../models/notes')
const router = express.Router();

// NOTES
router.post("/notes", notesControllers.saveNote)

// router.get("/notes", (req, res) => {
//     noteSchema.find({}).then((data) => {
//         return res.status(200).json(data)
//     })
//     .catch((err) => res.json({message: err}))
// })

router.get("/notes/:idOwner", notesControllers.getNotes)

router.delete("/notes/:_id", notesControllers.deleteNote)

// USERS
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router;