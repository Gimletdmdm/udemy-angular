const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../model/user');

function notAuthorized(res) {
    return res.status(401).send({error: [{title: 'Not Authorized', detail: 'You need to login!'}]})
}

exports.authMiddleware = function(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return notAuthorized(res);
    }

    jwt.verify(token.split(' ')[1], config.SECRET, async (err, decodedToken) => {
        if (err) {
            return res.status(401).send({error: [{title: 'Not Authorized', detail: 'Invalid token!'}]})
        }
        
        try {
            foundUser = await User.findById(decodedToken.userId);
            
            if (!foundUser) {
                return res.status(401).send({error: [{title: 'Not Authorized', detail: 'User is not found!'}]})
            }
            
            next();
        } catch(err) {
            return res.status(401).send({error: [{title: 'Not Authorized', detail: 'Invalid token!!!'}]})
        }
    });
}