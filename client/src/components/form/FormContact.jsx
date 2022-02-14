import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Container, Paper, TextField, Box, Button, Typography, Autocomplete} from '@mui/material'



let schema = yup.object({
    name: yup.string().required('Name Required'),
    lastname: yup.string().required('Lastname Required'),
    email: yup.string().email().required('Email Required'),
    country: yup.string().required('Country required'),
});


function FormContact(){

    const formik = useFormik({
        initialValues:{
            name:"",
            lastname:"",
            email:"",
            country:"",
            comments:""
        },
        //validationSchema:schema,
        onSubmit : async (values)=>{
            try {
                const response = await axios.post("/", values)
                console.log("response", response);
            } catch (error) {
                console.log(error);
            }
        }       
    })

    useEffect(() => {

    })

    return (
        <div>
            {/* <Container sx={{ marginBottom: 15 }} maxWidth="lg">
                <Paper elevation={3}>
                    <Box
                        sx={{
                            rowGap: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginBottom: 5,
                            marginTop: 10,
                            paddingBottom: 5,
                            paddingTop: 5,
                            "& .MuiTextField-root": { m: 2, width: "40rem" },
                            "& .MuiFormControl-root": { m: 2, width: "40rem" },
                            "& .MuiSelect-root": { m: 2, width: "40rem" },
                            "& .MuiButton-root": { m: 2, width: "40rem" },
                        }}>

                    </Box>
                </Paper>
            </Container> */}
                        <Typography
                        variant='h4'
                        >Agregar Contacto</Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                id="name"
                                name="name"
                                label="Nombre"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                            />
                            <TextField
                                id="lastname"
                                name="lastname"
                                label="Apellido"
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                            />
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                            />
                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                //options={}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Pais" />}
                            /> */}
                            <TextField
                                id="comments"
                                name="comments"
                                label="Comentarios"
                                type="comments"
                                multiline
                                rows={4}
                                value={formik.values.comments}
                                onChange={formik.handleChange}
                            />
                            <Button 
                                color="primary" 
                                variant="contained" 
                                type="submit"    
                            >
                                Submit
                            </Button>
                        </form>
        </div>
    );
};

export default FormContact;