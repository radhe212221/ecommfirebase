import { transform } from '../utils'
import axios from 'axios'
export const url = 'https://fbecomm-8bab6-default-rtdb.firebaseio.com/'

export const _get = (_url) => {
    return axios.get(url + _url).then(res => transform(res.data)).catch(e => null)
}
export const _delete = (_url) => {
    return axios.delete(url + _url).then(res => transform(res.data)).catch(e => null)
}


export const _post = (_url, payload) => {
    return axios.post(url + _url, payload).then(res => res.data.name).catch(e => null)
}
export const _patch = (_url, payload) => {
    return axios.patch(url + _url, payload).then(res => res.data.name).catch(e => null)
}
