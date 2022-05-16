const Model = require('../model/pageModel');
const NotepadModel = require('../model/notepadModel')

class PageController {
   async newPage(req, res) {
        const data = new Model({
            sessionId: req.body.sessionId, 
            name: req.body.name,
            id: req.body.id,
            date: req.body.date
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    }
    async getSessionPages(req, res) {
        try {
            const pages = await Model.find({sessionId: req.query.sessionId})
            res.status(200).json(pages)
        } catch(e) {
            res.status(400).json({message: e.message})
        }
    }
    async deletePage(req, res) {
        try {
         await NotepadModel.findOneAndDelete({ pageId: req.query.id })
         const Page = await Model.findByIdAndRemove({ _id: req.query.id })
         res.status(200).json(Page)
        } catch(e) {
         res.status(400).json({message: e.message})
        }
    }
}

module.exports = new PageController();