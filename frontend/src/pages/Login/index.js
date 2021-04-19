import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';

import '../Register/styles.css';
import api from '../../services/api'

export default function Login() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

    const onSubmit = async ({name, password}) => {
        const data = {
            name,
            password
        }

        try {
            alert(`Olá ${name}, seja bem-vindo!`);
            setValue('name','');
            setValue('password','');
        } catch (error) {
            alert('Falha para realização do Login!');
            console.error(error);
        }
    }

    return(
        <div className="container">
            <div className="content">
                <section>
                    <h1>Login</h1>
                    <p>
                        » Olá, seja bem-vindo ao sistema de Autenticação desenvolvido por Vitor Versiani!
                        <br/>
                        » Nesta página é onde você realizará o Login!
                    </p>
                </section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className= {errors?.name ? "border-red" : ""}
                        placeholder="Nome de Usuário"
                        {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                          })}
                    />
                    {errors?.name && <p className="error">» O usuário deve ter entre 3 à 20 letras.</p>}

                    <input
                        className= {errors?.name ? "border-red" : ""}
                        type="password"
                        placeholder="Senha"
                        {...register("password", { 
                            required: true,
                            minLength: 5,
                            maxLength: 20,
                        })}
                    />
                    {errors?.password && <p className="error">» A senha deve ter entre 5 à 20 caracters.</p>}

                    <div className="button-group">
                        <Link className="link" to="/users/register">
                            Preciso cadastrar
                        </Link>
                        <button className="button" type="submit">Logar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}