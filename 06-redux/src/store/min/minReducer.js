const reducer = (state = 0, action) => {
    console.log(state, action)
    
    if (action.type === "SET_MIN") {
        return action.payload
    }

    return state
}

export default reducer