import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import '../Register/styles.css';
import api from '../../services/api'

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault();

        const data = {
            name,
            password
        }

        try {
            alert(`Olá ${name}, seja bem-vindo!`);
            setName('');
            setPassword('');
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
                <form onSubmit={handleLogin}>
                    <input
                        placeholder="Nome de Usuário"
                        value={name}
                        required
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />

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