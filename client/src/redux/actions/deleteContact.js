import axios from 'axios';

export const deleteContact = (id) => {
    return async function(){
        try {
            const response = await axios.delete(`/delete/${id}`);
            console.log(response);
        } catch (error) {
            console.log("error delete", error);
        }
    }
}