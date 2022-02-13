import React from 'react';
import { useEffect } from 'react';
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import {TextField} from '@mui/material'
import { Select } from "@mui/material";
import { AutoComplete } from "@mui/material";



let schema = yup.object().shape({
    name: yup.string().required('Name Required'),
    lastname: yup.string().required('Lastname Required'),
    email: yup.string().email().required('Email Required'),
    country: yup.string().required('Country required'),
});


function FormContact(){

    useEffect(() => {

    })

    return (
        <div>
            <h1>JO</h1>
            <Formik
                initialValues={{
                    name:"",
                    lastname:"",
                    email:"",
                    country:"",
                    comments:""
                }}
                validationSchema={schema}
                onSubmit={async(values, { resetForm })=>{

                }}
            >
                <Form>
                    <TextField name="name" label="Nombre"/>
                    <Select
                    name="gender"
                    label="Gender"
                    options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                        { value: "Other", label: "Other" }
                    ]}
                    />
                    {/* <AutoComplete
                    name="country"
                    // options={countries}
                    textFieldProps={{
                        label: "Country"
                    }} */}
                    {/* <button type="submit">Submit</button> */}
                </Form>
            </Formik>
        </div>
    );
};

export default FormContact;