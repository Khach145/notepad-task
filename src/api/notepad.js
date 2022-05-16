import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL
// axios.defaults.baseURL = baseUrl;

export const NotepadApi = {
    async newNotepad(body) {
        return await axios.post(`${baseUrl}/new-notepad`, {...body})
    },
    async getNotepad(id) {
        const note = await axios.get(`${baseUrl}/get-notepad?pageId=${id}`);
        if(!note.data.length) {
            const newData = await this.newNotepad({pageId: id, content: []})
            return newData.data
        }
        return note.data
    },
    async setNotepadContent(id, body) {
        return await axios.post(`${baseUrl}/set-notepad?pageId=${id}`, {...body})
    }
}