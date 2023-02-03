const initialState = {
    error: []    
}
const rootReducer =(state=initialState,action) =>{
    switch (action.type) {
        case "aja":
            return {
                ...state,
                pokemons: action.payload
            }      
        default:
            return {...state}
    }
}

export default rootReducer