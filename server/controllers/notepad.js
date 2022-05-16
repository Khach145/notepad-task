const Model = require("../model/notepadModel")

class notepadController {
   async newNotepad(req, res) {
       const data = new Model({
           id: req.body.id,
           pageId: req.body.pageId,
           content: [...req.body.content]
       })
       try {
            const dataToSave = await data.save()
            res.status(200).json(dataToSave)
       } catch(e) {
            res.status(400).json({message : e.message})
       }
   }
   async getNotepad(req, res) {
       try {
            const notepad = await Model.find({pageId: req.query.pageId})
            res.status(200).json(notepad)
       } catch(e) {
            res.status(400).json({message : e.message})
       }
   }
   async setNotepad(req, res) {
        try {
            const notepad = await Model.findOne({pageId: req.query.pageId})
            if(notepad) {
                notepad.content = [...req.body.content]
               try {
                    const notepadToSave = await notepad.save()
                    res.status(200).json(notepadToSave)
               } catch(e) {
                    res.status(400).json({message : e.message})
               }
            }
        } catch(e) {
                res.status(400).json({message : e.message})
        }
   }
}

module.exports = new notepadController();
