import axios from 'axios';
import * as types from './constants.js'

export const loadCountries = (input) => {
    return async (dispatch) => {
        try {
           var json = await axios('https://restcountries.com/v3.1/all')
           return dispatch({
                type: types.ALL_COUNTRIES,
                payload: json.data.common
           }) 
        } catch (error) {
            console.log("error Countries load", error)
        }
    }
}