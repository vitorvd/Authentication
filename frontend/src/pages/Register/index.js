import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';
import api from '../../services/api'

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        }

        try {
            const response = await api.post('/register', data);
            setName('');
            setEmail('');
            setPassword('');
            history.push('/');
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
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome de Usuário"
                        value={name}
                        required
                        onChange = {e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        required
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        required
                        onChange = {e => setPassword(e.target.value)}
                    />

                    <div className="button-group">
                        <button className="button" type="submit">Cadastrar</button>
                        <Link className="link" to="/">
                            Já tenho cadastro
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );

}