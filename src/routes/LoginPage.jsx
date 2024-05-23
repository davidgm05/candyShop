import React, { useState } from 'react';
import { usersArray } from '../components/listUsers/listUsers';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from '../components/HeaderComponent';


export const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigation = useNavigate()
    const [errorsValidate, setErrorsValidated] = useState([]);

    const formDataHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim() !== "" ? e.target.value : undefined
        });
    };

    const validations = () => {
        const errors = [];
        if (!formData) {
            errors.push({
                name: "form",
                type: "alert",
                description: "Formulario no definido"
            });
        }
        if (formData.email === "") {
            errors.push({
                name: "email",
                type: "text",
                description: "El campo email es requerido"
            });
        }
        if (formData.password === "") {
            errors.push({
                name: "password",
                type: "text",
                description: "El campo password es requerido"
            });
        }
        return errors.length != 0? errors : [];;
    };

    const sendFormLoginHandler = () => {
        const errors = validations();
        if (errors.length > 0) {
            const alertErrors = errors.filter(e => e.type === "alert");
            alertErrors.forEach(alert => alert(alert.description));
            setErrorsValidated(errors.filter(e => e.type === "text"));
        } else {
            usersArray.forEach((user) => {
                if (user.email === formData.email && user.password === formData.password) {
                    alert("email y password validos");
                    navigation("/");

                }
                
            });
        }
    };

    return (
        <>
            <div className='login-container'>
            <div className='bubble-login-container'>
                <h2 className='login-title'>Login</h2>
            {errorsValidate.map((error, index) => (
                <span key={index} style={{ color: "red" }}>{error.description}</span>
            ))}
                <div className='container-form-login'>
                 <div>
                <label className='label-form'><b>Email :  </b></label>
                <input type="email" name="email" onChange={(e) => formDataHandler(e)} />
                    </div>
                    <div>
                <label className='label-form'><b>Password :  </b></label>
                <input type="password" name="password" onChange={(e) => formDataHandler(e)} />
                    </div>
                <button onClick={(e) => sendFormLoginHandler()}>Enviar</button>
            </div>
            </div>
            <div className='palo-piruleta'></div>
                </div>
        </>
    );
};
