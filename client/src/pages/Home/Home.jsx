import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx'
import { Button, Grid, Link } from '@mui/material';

const Home = () => {


    return (
        <div>
            <NavBar/>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ marginTop: "50px" }}
                spacing={5}
            >
                <Button 
                    color="primary"
                    variant="outlined"
                    sx={{ mt: 1, mb: 2 }}>
                    <Link color="inherit" underline="hover" href="/addcontact" >Add Contact</Link>        
                </Button>
                <Button 
                    color="primary"
                    variant="outlined"
                    sx={{ mt: 1, mb: 2 }}>
                    <Link color="inherit" underline="hover" href="/contacts" >Contact List</Link>
                </Button>
            </Grid>
        </div>
    );
};

export default Home;