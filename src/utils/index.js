export const transform = payload => {
    let x = Object.keys(payload)
    let y = Object.values(payload)
    let temp = []
    for (let i = 0; i < x.length; i++) {
        temp.push({
            id: x[i], ...y[i]
        })
    }
    return temp
}


export const uniqueTags = a => {
    let b = Array.from(new Set(a.map(x => x.tags)))
    return b.map(x => ({ name: x, count: a.filter(y => y.tags === x)?.length }))
}

export const createCookie = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
export const getCookie = key => {
    if (!localStorage.getItem(key)) {
        return ''
    }
    return localStorage.getItem(key)
}
export const deleteCookie = key => {
    localStorage.removeItem(key)
}

export const parseCookie = key => {
    if (!getCookie(key)) {
        return null
    }
    return JSON.parse(getCookie(key))
}

export const thisUserData = (data) => {
    let user = parseCookie("user")
    if (user) {
        return data.filter(x => x.uid === user?.id)
    }
    return []
}
export const checkinCart = (a, uid, pid) => {
    return a.some(x => x.uid === uid && x.pid === pid)
}
export const findCart = (a, uid, pid) => {
    return a.find(x => x.uid === uid && x.pid === pid)
}   
