import axios from "axios";
export const ERROR = "ERROR"
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const RESET_COUNTRY_DETAILS = "RESET_COUNTRY_DETAILS";
export const ADD_FORM_COUNTRIES = "ADD_FORM_COUNTRIES";
export const DELETE_FORM_COUNTRIES = "DELETE_FORM_COUNTRIES";



export const getCountries = () => {
    return function(dispatch){
        try {               
            axios.get(`http://localhost:3001/countries`)
            .then((response) => dispatch({type:GET_COUNTRIES, payload: response.data}))                     
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const getCountry = (id) => {
    return function(dispatch){
        try {               
            axios.get(`http://localhost:3001/countries/${id}`)
            .then((response) => dispatch({type:GET_COUNTRY_BY_ID, payload: response.data}))                     
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const resetCountryDetails = () => {
    return function(dispatch){
        try {               
            dispatch({type:RESET_COUNTRY_DETAILS, payload: {}})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const addFormCountries = (country) => {
    return function(dispatch){
        try {               
            dispatch({type:ADD_FORM_COUNTRIES, payload:country})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const deleteFormCountries = (country) => {
    return function(dispatch){
        try {               
            dispatch({type:DELETE_FORM_COUNTRIES, payload:country})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}

