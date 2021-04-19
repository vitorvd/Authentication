import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './styles.css';
import api from '../../services/api'

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const history = useHistory();

    const onSubmit = async ({name, email, password}) => {
        const data = {
            name,
            email,
            password
        }
        
        try {
            const response = await api.post('/users/register', data);
            history.push('/users/auth');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>
                        » Olá, seja bem-vindo ao sistema de autenticação do Vitor Versiani. Desenvolvido para fins de estudo! 
                        <br/>
                        » Nesta página é onde você realizará o Cadastro.
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
                        type="email"
                        placeholder="E-mail"
                        {...register("email", { 
                            required: true 
                        })}
                    />
                    {errors?.email && <p className="error">» Você esqueceu de informar o e-mail.</p>}

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
                        <button className="button" type="submit">Cadastrar</button>
                        <Link className="link" to="/users/auth">
                            Já tenho cadastro
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );

}