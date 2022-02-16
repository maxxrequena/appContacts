import axios from 'axios';
import * as types from './constants.js';

export const getContacts = () => {
    return async (dispatch) => {
        try {
            const json = await axios('http://localhost:3001/contacts')
            return dispatch({
                type: types.ALL_CONTACTS,
                payload: json.data
            })
        } catch (error) {
            
        }
    }
}