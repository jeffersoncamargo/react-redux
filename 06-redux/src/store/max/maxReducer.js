const reducer = (state = 10, action) => {
    console.log(state, action)
    
    if (action.type === "SET_MAX") {
        return action.payload
    }

    return state
}

export default reducer