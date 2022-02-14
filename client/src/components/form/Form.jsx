import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import { Container, Paper, TextField, Box, Button, Typography, Autocomplete } from '@mui/material'



let schema = yup.object().shape({
    name: yup.string().required('Name Required'),
    lastname: yup.string().required('Lastname Required'),
    email: yup.string().email().required('Email Required'),
    country: yup.string().required('Country required'),
});


function FormContact() {

    useEffect(() => {

    })

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
                    try {
                        const response = await axios.post("http://localhost:3001/", values)
                        console.log(response);
                        resetForm();
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit
                }) => (
                    <Container sx={{ marginBottom: 15 }} maxWidth="lg">
                        <Paper elevation={3}>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
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
                                }}
                                >
                                <Typography
                                    variant='h4'
                                >Agregar Contacto</Typography>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Nombre"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={touched.name && Boolean(errors.name)}
                                />
                                <TextField
                                    id="lastname"
                                    name="lastname"
                                    label="Apellido"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    error={touched.lastname && Boolean(errors.lastname)}
                                />
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={touched.email && Boolean(errors.email)}
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
                                    value={values.comments}
                                    onChange={handleChange}
                                />
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Paper>
                    </Container>
                )}
            </Formik>
        </div>
    );
};
export default FormContact;