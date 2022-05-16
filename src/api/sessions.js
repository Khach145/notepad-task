import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL

export const SessionsApi = {
    async getAllSessions() {
        return await axios.get(`${baseUrl}/sessions`)
    },
    async addSession(body) {
        return await axios.post(`${baseUrl}/new_session`, {...body})
    },
    async deleteSession(id) {
        return await axios.get(`${baseUrl}/delete-session?id=${id}`)
    }
}