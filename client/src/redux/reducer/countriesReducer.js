import * as types from '../actions/constants.js'

const initialState = {
    countries:[],
    names:[]
}

const countryReducer = (state = initialState, action) => {

    switch (action.type){
        case types.ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        case types.NAMES_COUNTRIES:
            
            return{
                ...state,
                
            }
        default:
            return{
                ...state,
            }    
    }
}

export default countryReducer;