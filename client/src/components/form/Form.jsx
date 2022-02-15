import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { Formik } from "formik";
import * as yup from 'yup';
import { Container, TextField, Box, Button, Typography, Avatar, Autocomplete } from '@mui/material'
import { loadCountries } from '../../redux/actions/countriesActions'
import { useState } from 'react';


let schema = yup.object().shape({
    name: yup.string().required('Name Required'),
    lastname: yup.string().required('Lastname Required'),
    email: yup.string().email().required('Email Required'),
    country: yup.string().required('Country required'),
});


function FormContact() {
    
    const dispatch = useDispatch();
    const countries = useSelector((state)=> state.countryReducer.countries)
    
    const c = countries.map(c => c.name.common)
    const country = c.sort();

    const [value, setValue] = useState(null);

    useEffect(() => {
        dispatch(loadCountries());
    },[dispatch]);

    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    lastname: "",
                    email: "",
                    country: "",
                    comments: ""
                }}
                //validationSchema={schema}
                onSubmit={async(values, {resetForm}) => {
                    values.country = value; 
                    try {
                        const response = await axios.post("http://localhost:3001/contact", values)
                        console.log(response);
                        resetForm();
                    } catch (error) {
                        console.log(error);
                    }
                }}
                // onSubmit={(values, { resetForm }) => {
                //     values.country = value;
                //     alert(JSON.stringify(values, null, 2));
                //     resetForm();
                // }}

            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Container maxWidth="xs">
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                                >
                                <Avatar 
                                sx={{ 
                                    m: 1 
                                }}>    
                                </Avatar>
                                <Typography
                                    component="h1"
                                    variant='h5'
                                >Agregar Contacto</Typography>
                                <Box 
                                component="form"
                                onSubmit={handleSubmit}  
                                sx={{m:1}}
                                >
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Nombre"
                                        margin="normal"
                                        fullWidth
                                        value={values.name}
                                        onChange={handleChange}
                                        error={touched.name && Boolean(errors.name)}
                                    />
                                    <TextField
                                        id="lastname"
                                        name="lastname"
                                        label="Apellido"
                                        margin="normal"
                                        fullWidth
                                        value={values.lastname}
                                        onChange={handleChange}
                                        error={touched.lastname && Boolean(errors.lastname)}
                                    />
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        margin="normal"
                                        fullWidth
                                        value={values.email}
                                        onChange={handleChange}
                                        error={touched.email && Boolean(errors.email)}
                                    />
                                    <Autocomplete
                                        margin="normal"
                                        fullWidth
                                        sx={{mt:2}}
                                        options={country}
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => 
                                        <TextField {...params} label="Pais" />}
                                    />
                                    <TextField
                                        id="comments"
                                        name="comments"
                                        label="Comentarios"
                                        type="comments"
                                        margin="normal"
                                        fullWidth
                                        multiline
                                        rows={2}
                                        sx={{mt:3}}
                                        value={values.comments}
                                        onChange={handleChange}
                                    />
                                    <Button
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        //type="submit"
                                        sx={{ mt: 0, mb: 2 }}
                                    >
                                        Volver
                                    </Button>

                                </Box>
                            </Box>
                    </Container>
                )}
            </Formik>
        </div>
    );
};
export default FormContact;