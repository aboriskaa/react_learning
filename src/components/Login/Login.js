import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer'
import { Navigate } from "react-router-dom";


const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required 1';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

    password: Yup.string()
        .min(4, "Must be longer than 2 characters")
        .max(9, "Must be shorter than 5 characters")
        .required("Required 2")
});


const Login = (props) => {

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <h2> LOGIN </h2>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}

                onSubmit={(values, { setSubmitting }) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    // }, 400);
                    setSubmitting(false);
                    props.login(values.email, values.password, values.rememberMe)
                }}>

                {() => (
                    <Form>
                        <div>
                            <Field
                                name={'email'}
                                type={'text'}
                                placeholder={'E-mail'} />
                        </div>
                        <ErrorMessage name="email" component="div" />

                        <div>
                            <Field
                                name={'password'}
                                type={'password'}
                                placeholder={'password'} />
                        </div>
                        <ErrorMessage name="password" component="div" />

                        <div>
                            <Field
                                type={'checkbox'}
                                name={'rememberMe'}
                                id='rememberMe' />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        <button type={'submit'}>Login</button>
                    </Form>
                )}
            </Formik>

            <div>
                ...
            </div>

        </div >
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);
