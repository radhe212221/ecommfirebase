import { transform } from '../utils'
import axios from 'axios'
export const url = 'https://fbecomm-8bab6-default-rtdb.firebaseio.com/'

export const _get = (url) => {
    return axios.get(url).then(res => transform(res.data)).catch(e => null)
}
export const _delete = (url) => {
    return axios.delete(url).then(res => transform(res.data)).catch(e => null)
}


export const _post = (url, payload) => {
    return axios.post(url, payload).then(res => res.data.name).catch(e => null)
}
export const _patch = (url, payload) => {
    return axios.patch(url, payload).then(res => res.data.name).catch(e => null)
}
