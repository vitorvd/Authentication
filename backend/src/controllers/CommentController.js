import Comment from "../models/Comment.js";
import jwt from "jsonwebtoken";

import authConfig from '../config/auth.js';

async function comment(req, res) {
    const { user_id } = req.params;
    const { comment } = req.body;
    const token = req.headers["x-access-token"];
    
    if(comment == null) {
        res.status(400).send({ msg: 'Sintaxe incorreta.' });
        return;
    }

    try{
        const user = jwt.verify(token, authConfig.secret); //retorna um User
        if(!user) {
            return res.status(400).send({ msg: 'Você precisa estar autenticado para comentar.' });
        }
        const data = await Comment.create({ 
            comment,
            user_id,
        });
        res.send(data.toJSON());
    }catch(ex){
        res.status(400).send({ msg: 'Você precisa estar autenticado para comentar.' });
    }
}

export default {comment};
