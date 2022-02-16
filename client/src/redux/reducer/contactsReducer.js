import * as types from '../actions/constants.js'

const initialState = {
    contacts:[]
}

const contactsReducer = (state = initialState, action) => {
    
    switch(action.type){

        case types.ALL_CONTACTS:{
            return{
                ...state,
                contacts: action.payload
            };
        }
        default: 
            return{
                ...state
            };
    }
}

export default contactsReducer;