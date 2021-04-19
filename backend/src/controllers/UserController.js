import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import authConfig from '../config/auth.js';

async function register(req, res) {
    const {name, email, password} = req.body;
    
    if((name == null) || (email == null) || (password == null) || (name.length < 3) || (password.length < 5)) {
        res.status(400).send({ msg: 'Sintaxe incorreta.' });
        return;
    }

    try {
        const findUser = await User.findOne({ where: {name} });
        if(findUser) {
            res.status(400).send({ msg: 'Usuário já cadastrado' });
            return;
        }
    
        const passwordHash = await bcrypt.hash(password, 10);
    
        const data = await User.create({ name, email, password: passwordHash });

        res.status(201).send({ msg: 'Cadastro realizado com sucesso, aproveite!' });
    } catch (error) {
        res.status(400).send({ msg: 'Algum problema ocorreu ao realizar o seu registro.' });
    }

}

async function login(req, res) {
    const {name, password} = req.body;

    if((name == null) || (password == null) || (name.length < 3) || (password.length < 5)){
        res.status(400).send({ msg: 'Sintaxe incorreta.' });
        return;
    }
    
    try {
        const findUser = await User.findOne({ where: { name } });
        if(findUser) {
            if(!await bcrypt.compare(password, findUser.password)){
                return res.status(400).send({ msg: 'Senha incorreta.' });
            }
            const token = jwt.sign({ name }, authConfig.secret, {
                expiresIn: 86400 //expirar em um dia
            });
            console.log(token);
            res.status(200).send({ msg: 'Você foi autenticado!' });
        }else{
            res.status(400).send({ msg: 'Usuário incorreto.' });
        }        
    } catch (error) {
        res.status(400).send({ msg: 'Algum problema ocorreu ao realizar a sua autenticação.' });
    }

}

export default {register, login}
