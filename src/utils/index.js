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