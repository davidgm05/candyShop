import React, { useState } from 'react';
import { addUserToList } from '../components/listUsers/listUsers';

export const LoginPage = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: ""
    });
    const [errorsValidate, setErrorsValidate] = useState([]);

    const formdataHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim() !== "" ? value : ""
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
            addUserToList(formData)
            setErrorsValidate([]);
        }
    };

    return (
        <>
            <div>
                {errorsValidate.map((error, index) => (
                    <span key={index} style={{ color: "red" }}>{error.description}</span>
                ))}
                <input type="text" name="nombre" onChange={(e) => formdataHandler(e)} />
                <input type="email" name="email" onChange={(e) => formdataHandler(e)} />
                <input type="password" name="password" onChange={(e) => formdataHandler(e)} />
                <button onClick={registerHandler}>Enviar</button>
            </div>
        </>
    );
};
