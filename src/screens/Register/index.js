import React from 'react';
import { useFormik } from 'formik';

const Register = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.name){
            errors.name = 'Obrigatório';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '', 
        },
        validate, 
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>
            <h1>Cadrasto de Clientes</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">Nome: </label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            onChange={formik.handleChange} 
                            value={formik.values.name}
                        />
                        {formik.errors.name ? <div>{formik.errors.name}</div> : null }
                    </div>
                    <div>
                        <label htmlFor="email">email: </label>
                        <input 
                            id="email" 
                            name="email" 
                            type="text" 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};  
       
export default Register;                                                            