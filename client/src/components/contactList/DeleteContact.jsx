import React from 'react';
import { deleteContact } from '../../redux/actions/deleteContact'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Button } from '@mui/material';
import ContactList from './ContactList';
import { useDispatch } from 'react-redux';

const DeleteContact = ({id}) => {

    console.log(id)
    const dispatch = useDispatch();
    
    const handleDelete = (idcontacts) =>{
        console.log("handle", idcontacts)
       deleteContact(idcontacts);
       dispatch(ContactList());
    } 
 
    return (
        <div>
            <Button
            onClick={handleDelete(id)}
            ><DeleteForeverOutlinedIcon/></Button>
        </div>
    );
};

export default DeleteContact;