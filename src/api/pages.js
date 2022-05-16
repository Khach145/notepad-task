import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL
// axios.defaults.baseURL = baseUrl;

export const PagesApi = {
    async getSessionPage(id) {
        return await axios.get(`${baseUrl}/get-session-page?sessionId=${id}`)
    },
    async addPage(body) {
        return await axios.post(`${baseUrl}/new-page`, {...body})
    },
    async deletePage(id) {
        return await axios.get(`${baseUrl}/delete-page?id=${id}`)
    }
    // async addSession(body) {
        
    //     console.log(body);
    //     return await axios.post(`${baseUrl}/new_session`, {...body})
    // },
    // async deleteSession(id) {
    //     return await axios.get(`${baseUrl}/delete-session?id=${id}`)
    // }
}