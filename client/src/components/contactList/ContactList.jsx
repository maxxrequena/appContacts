import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getContacts} from '../../redux/actions/getContacts.js';
import { Button, Container, Typography } from '@mui/material';
import OpenDialog from '../dialog/OpenDialog.jsx';
import DeleteContact from './DeleteContact.jsx';
import Home from '../../pages/Home/Home';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavBar from '../navBar/NavBar.jsx';


const ContactList = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getContacts());
    },[dispatch])

    const rows = useSelector((state) => state.contactsReducer.contacts);

    return (
        <div>
            <NavBar />
            <Container>
                <Typography
                component="h1"
                variant='h4'
                sx={{
                    mt: 4,
                    mb: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                > Contacts 
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">Delete</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Country</TableCell>
                                <TableCell align="center">Comments</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.length ? 
                             rows.map((row) =>{
                                return (
                                    <TableRow
                                    key={row.idcontacts}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.name} {row.lastname}</TableCell>
                                    <TableCell align="center"><Button><DeleteContact id={row.idcontacts}/></Button></TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.country}</TableCell>
                                    <TableCell align="center"><OpenDialog comments={row.comments}/></TableCell>
                                </TableRow>
                                 )
                            }): null}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ContactList;

{/* <Link color="inherit" underline="hover" href="/f"></Link> */}