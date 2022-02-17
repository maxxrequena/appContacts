import React, { useEffect } from 'react';
import axios from 'axios';
import Home from '../../pages/Home/Home.jsx';
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import { Container, TextField, Box, Button, Typography, Avatar, Autocomplete } from '@mui/material'
import { loadCountries } from '../../redux/actions/loadCountries.js'
import { useState } from 'react';
import NavBar from '../navBar/NavBar.jsx';

let schema = yup.object().shape({
    name: yup.string().required('Name Required'),
    lastname: yup.string().required('Lastname Required'),
    email: yup.string().required('Email Required'),
});


function FormContact() {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countryReducer.countries)

    const country = countries.map(c => c.name.common)
    //const country = c.sort();

    useEffect(() => {
        dispatch(loadCountries());
    }, [dispatch])

    const [value, setValue] = useState(null);

    useEffect(() => {
        dispatch(loadCountries());
    }, [dispatch]);

    return (
        <div>
            <NavBar />
            <Formik
                initialValues={{
                    name: "",
                    lastname: "",
                    email: "",
                    country: "",
                    comments: ""
                }}
                validationSchema={schema}
                onSubmit={async (values, { resetForm }) => {
                    values.country = value;
                    try {
                        const response = await axios.post("http://localhost:3001/contact", values)
                        console.log(response);
                        resetForm();
                    } catch (error) {
                        console.log(error);
                    }
                }}
            // UTILIZADO SOLO PARA TEST 
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
                                marginTop: 2,
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
                                sx={{ m: 1 }}
                            >
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Nombre"
                                    margin="normal"
                                    fullWidth
                                    value={values.name}
                                    onChange={handleChange}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    id="lastname"
                                    name="lastname"
                                    label="Apellido"
                                    margin="normal"
                                    sx={{ mt: 1 }}
                                    fullWidth
                                    value={values.lastname}
                                    onChange={handleChange}
                                    error={Boolean(touched.lastname && errors.lastname)}
                                    helperText={touched.lastname && errors.lastname}
                                />
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    //margin="normal"
                                    sx={{ mt: 1 }}
                                    fullWidth
                                    value={values.email}
                                    onChange={handleChange}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                                <Autocomplete
                                    //margin="normal"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    options={country}
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }} country
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            label="Pais"
                                            error={Boolean(touched.country && errors.country)}
                                            helperText={touched.country && errors.country}
                                        />}
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
                                    sx={{ mt: 2 }}
                                    value={values.comments}
                                    onChange={handleChange}
                                />
                                <Button
                                    fullWidth
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    //style={{ background: '#C0C0C0' }}
                                    sx={{ mt: 1, mb: 2 }}
                                >
                                    Submit
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