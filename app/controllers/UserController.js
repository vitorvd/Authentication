const User = require("../models/User");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

async function register(req, res) {
    const {name, email, password} = req.body;
    
    if((name == null) || (email == null) || (password == null)) {
        res.send({ msg: "Sintaxe incorreta.", status: "error" });
        return;
    }

    const findUser = await User.findOne({ where: {name} });
    if(findUser) {
        res.send({ msg: "Usuário já cadastrado", status: "error"});
        return;
    }

    const data = await User.create({ name, email, password: md5(password) });
    res.send(data.toJSON());
}

async function login(req, res) {
    const {name, password} = req.body;

    if((name == null) || (password == null)){
        res.send({ msg: "Preencha todos os campos!", status: "error" });
        return;
    }
    
    const findUser = await User.findOne({ where: {name, password: md5(password) } });
    if(findUser) {
        const token = jwt.sign({name}, "TEQUILAXBR");
        res.send({ msg: "Você realizou o login com sucesso.", status: "ok", token});
    }else{
        res.send({ msg: "Usuário ou senha incorretos.", status: "ok"});
    }
}

module.exports = {register, login}
