const User = require("../models/User");
const Comment = require("../models/Comment");
const jwt = require("jsonwebtoken");

async function comment(req, res) {
    const {comment} = req.body;
    const token = req.headers["x-access-token"];
    
    if(comment == null) {
        res.send({ msg: "Sintaxe incorreta.", status: "error" });
        return;
    }

    /*const findUser = await User.findOne({ where: {user} });
    if(!findUser) {
        res.send({ msg: "Usuário não cadastrado", status: "error"});
        return;
    }*/

    try{
        const findToken = jwt.verify(token, "TEQUILAXBR");
        console.log(findToken);
        const data = await Comment.create({ user: findToken.name, comment});
        res.send(data.toJSON());
    }catch(ex){
        console.log(ex);
        res.send({ msg: "Você precisa estar logado para comentar.", status: "error"});
        return;
    }
}

module.exports = {comment}
