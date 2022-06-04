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
    switch (action.type) {
        case "products": return { ...state, products: action.payload }
        // case "sort": return { ...state, ...action.payload }
        case "search": return { ...state, search: action.payload }
        case "tagname": return { ...state, tagname: action.payload }
        default: return state
    }
}