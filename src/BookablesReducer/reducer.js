function reducer(state, action) {
    switch (action.type) {
        case "SET_GROUP":
            return {
                ...state,
                group: action.payload,
                bookableIndex: 0
            };
        
        case "SET_BOOKABLE":
            return {
                ...state,
                bookableIndex: action.payload
            };

        case "SET_HAS_DETAILS":
            return {
                ...state,
                hasDetails: action.payload
            };
        
        default:
            return state;
    }
}

export default reducer;