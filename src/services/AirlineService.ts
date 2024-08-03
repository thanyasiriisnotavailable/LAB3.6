import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAirlines() {
    return apiClient.get('/airlines')
  },
  getAirline(id: string) {
    return apiClient.get('/airlines/' + id)
  }
}
