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