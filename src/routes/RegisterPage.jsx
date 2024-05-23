import React, { useState } from 'react';
import { addUserToList } from '../components/listUsers/listUsers';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: ""
});
    const [errorsValidate, setErrorsValidate] = useState([]);

    const formdataHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim() !== ""? e.target.value : undefined
        });
    };

    const validations = () => {
        const errors = [];
        if (!formData) {
            errors.push({
                name: "formData",
                type: "alert",
                description: "Formulario no definido"
            });
        } else {
            if (formData.nombre === "") {
                errors.push({
                    name: "nombre",
                    type: "text",
                    description: "Campo nombre requerido"
                });
            }
            if (formData.email === "") {
                errors.push({
                    name: "email",
                    type: "text",
                    description: "Campo email requerido"
                });
            }
            if (formData.password === "") {
                errors.push({
                    name: "password",
                    type: "text",
                    description: "Campo password requerido"
                });
            }
        }
        return errors.length > 0 ? errors : undefined;
    };

    const registerHandler = () => {
        const errors = validations();
        if (errors) {
            const alertErrors = errors.filter(e => e.type === "alert");
            alertErrors.forEach(a => alert(a.description));
            setErrorsValidate(errors.filter(e => e.type === "text"));
        } else {
            alert("Los datos han sido enviados");
            addUserToList(formData);
            setErrorsValidate([]);
            navigate("/login")
        }
    };

    return (
        <>
            <div className='register-container'>
            <div className='bubble-regiter-container'>
                <h2 className='register-title'>Register</h2>
                {errorsValidate.map((error, index) => (
                    <span key={index} style={{ color: "red" }}>{error.description}</span>
                ))}
                <div className='container-form-register'>
                    <div>
                <label className='label-form'><b>Nombre :  </b></label>
                <input type="text" name="nombre" onChange={(e) => formdataHandler(e)} />
                    </div>
                    <div>
                <label className='label-form'><b>Email :  </b></label>
                <input type="email" name="email" onChange={(e) => formdataHandler(e)} />
                    </div>
                    <div>
                <label className='label-form'><b>Password :  </b></label>
                <input type="password" name="password" onChange={(e) => formdataHandler(e)} />
                    </div>
                <button onClick={registerHandler}>Enviar</button>
                </div>
            </div>
            <div className='palo-piruleta'></div>
            </div>
        </>
    );
};
