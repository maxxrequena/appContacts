import * as types from './constants.js'

export const nameCountry = (payload) => {
    return {
        type: types.NAMES_COUNTRIES,
        payload
    }
}