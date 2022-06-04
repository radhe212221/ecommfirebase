const intialState = {
    products: [],
    tags: [],
    cart: [],
    orders: [],
    filters: [],
    user: null,
    loggedin: false,
    col: "id",
    order: true,
    search: '',
    tagname: '',
    loader: false,
}
export default function reducer(state = intialState, action) {
    switch (action.type) {
        case "products": return { ...state, products: action.payload }
        default: return state
    }
}