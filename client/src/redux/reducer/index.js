import { combineReducers } from 'redux';
import countryReducer from './countriesReducer';
import contactsReducer from './contactsReducer';


export default combineReducers ({
    countryReducer,
    contactsReducer,
})