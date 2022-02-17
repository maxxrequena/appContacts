import React from 'react';
import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const AboutMe = () => {


    return (
        <>
            <NavBar />
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ marginTop:"50px" ,minHeight: "100vh" }}
                spacing={5}
            >
                <Card sx={{ maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image="https://i.ibb.co/HhW1TCg/g.jpg"
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Maximiliano Requena
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            I am Full Stack Web Developer and Music Producer. Passionate and dedicated always with my activities. More...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default AboutMe;