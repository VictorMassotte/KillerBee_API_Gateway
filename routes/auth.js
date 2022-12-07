require('dotenv').config();

const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const logs = require('../utils/logs.utils');
const { checkTokenMiddleware, extractBearerToken  } = require('../middleware/auth');
const handlerUser = require('../utils/handler.auth');
const { encrypt, decrypt } = require('../utils/aesEncryption');

const users = [];

router.post('/login', async (req, res) => {

    try {
    
        await verificationDb();

        console.log(users);

        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'Error. Please enter the correct email and password' })
        }
    
        const user = users.find(user => user.email === req.body.email)
    
        if(!user){
            return res.status(400).json({ message: 'User is not present or delete !' })
        }
        
        //const encryptpassword = encrypt(user.password, "process.env.PASSWORD_KEY");

        //console.log(encryptpassword);
        //const decryptpassword = decrypt(encryptpassword, "process.env.PASSWORD_KEY");

        const decryptpassword = decrypt(user.password, process.env.PASSWORD_KEY);
    
        if (!user || decryptpassword !== req.body.password) {
            logs.info("User : " + req.body.email + " tried to connect from " + req.ip);
            return res.status(400).json({ message: 'Error. Wrong email or password' })
        }
    
        const token = jwt.sign({
            id: user.ID,
            email: user.email,
            role: user.role,
            user: user.user
        }, process.env.SECRET_TOKEN, { expiresIn: '3 hours' })
    
        const refreshToken = jwt.sign({
            id: user.ID,
            email: user.email,
            role: user.role,
            user: user.user
        }, process.env.SECRET_REFRESH_TOKEN, { expiresIn: '7d'})
    
        logs.info('User : ' + req.body.email + ' connected, from IP : ' + req.ip + ' with role: ' + user.role);
        return res.json({ access_token: token, refresh_token: refreshToken, role: user.role, id: user.ID, email: user.email, user: user.user });
    
        } catch (error) {
            console.log(error);
            res.status(400).send("An error occured");
        }
    });

    router.get('/ckeckToken', checkTokenMiddleware, (req, res) => {
        // Récupération du token
        const token = req.headers.authorization && extractBearerToken(req.headers.authorization)
        // Décodage du token
        const decoded = jwt.decode(token, { complete: false })
    
        return res.json({ content: decoded })
    })
    

    async function verificationDb(){
        const userPromise = axios.get(`${handlerUser()}`);
        console.log(userPromise);
        const userResponse = await userPromise;
        const userJson = await userResponse.data;
        console.log(userJson);
        
        for(var i in userJson){
            users.push(userJson[i]);
        }
    
        console.log(users);
        return users;
    }

module.exports = router;