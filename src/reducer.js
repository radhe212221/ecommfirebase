const intialState = {
    products: [],
    tags: [],
    cart: [],
    orders: [],
    filters: ["old", "new", "rating", "discount", "tags"],
    user: null,
    loggedin: false,
    col: "id",
    order: true,
    search: '',
    tagname: '',
    loader: false,
}
export default function reducer(state = intialState, action) {
    console.log(action)
    switch (action.type) {
        case "products": return { ...state, products: action.payload }
        case "sort": return { ...state, col: action.payload.col, order: action.payload.order }
        case "search": return { ...state, search: action.payload }
        case "tagname": return { ...state, tagname: action.payload }
        case "loader.1": return { ...state, loader: true }
        case "loader.0": return { ...state, loader: false }
        default: return state
    }
}