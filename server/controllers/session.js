const Model = require('../model/sessionModel');
const PageModel = require('../model/pageModel')
const NotepadModel = require('../model/notepadModel')

class SessionController {
   async newSession(req, res) {
        const data = new Model({
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
   async getSessions(req, res) {
       try {
        const Sessions = await Model.find({})
        res.status(200).json(Sessions)
       } catch (error) {
        res.status(400).json({message: error.message})
        }
       
   }
   async deleteSession(req, res) {
       try {
        const Pages = await PageModel.find({sessionId: req.query.id})
        Pages.map(async el => {
            await NotepadModel.findOneAndDelete({ pageId: el._id.valueOf() })
        })
        await PageModel.deleteMany({ sessionId: req.query.id })
        const Session = await Model.findByIdAndRemove({ _id: req.query.id })
        res.status(200).json(Session)
       } catch(e) {
        res.status(400).json({message: e.message})
       }
   }
}

module.exports = new SessionController();