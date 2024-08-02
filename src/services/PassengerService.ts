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
  getPassengers() {
    return apiClient.get('/passenger')
  },
  getPassenger(id: string) {
    return apiClient.get('/passenger/' + id)
  }
}
