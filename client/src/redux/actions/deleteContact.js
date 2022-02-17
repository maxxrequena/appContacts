import axios from 'axios';

export const deleteContact = (id) => {
    return async function(){
        try {
            console.log(id, "id actions")
            const response = await axios.delete(`http://localhost:3001/delete/${id}`);
            console.log(response);
        } catch (error) {
            console.log("error delete", error);
        }
    }
}