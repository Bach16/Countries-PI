import {GET_COUNTRIES,GET_COUNTRY_BY_ID,ADD_FORM_COUNTRIES,RESET_COUNTRY_DETAILS,DELETE_FORM_COUNTRIES} from "./actions"

const initialState = {
    country:{} ,
    countries:[],
    error: [],
    formCountries:[]    
}
const rootReducer =(state=initialState,action) =>{
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }  
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: action.payload
            }  
        case RESET_COUNTRY_DETAILS:
            return {
                ...state,
                country: action.payload
            }
        case ADD_FORM_COUNTRIES:
            return {
                ...state,
                formCountries:action.payload
            }
        case DELETE_FORM_COUNTRIES:
            return{
                ...state,
                formCountries:action.payload
            }
        default:
            return {...state}
    }
}

export default rootReducer