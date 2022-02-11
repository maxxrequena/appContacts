import * as types from '../actions/constants.js'

const initialState = {
    countries:""
}

const countryReducer = (state = initialState, action) => {

    switch (action.type){
        case types.ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        default:
            return{
                ...state,
            }    
    }
}

export default countryReducer;