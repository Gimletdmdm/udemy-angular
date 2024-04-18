const express = require('express');
const router = express.Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

// find()はコールバックを引数に取れなくなったので注意⇒非同期処理で対応する
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if(!email) {
        return res.status(422)
        .send({errors: [{title: 'User error', detail: 'Please fill email!'}]})
    } else if(!password) {
        return res.status(422)
        .send({errors: [{title: 'User error', detail: 'Please fill password!'}]})
    }

    try {
        foundUsers = await User.findOne({email});
        if(!foundUsers) {
            return res.status(422)
            .send({errors: [{title: 'User error', detail: 'User is not exist!'}]})
        } else if(!foundUsers.hasSamePassword(password)) {
            return res.status(422)
            .send({errors: [{title: 'User error', detail: 'Incorrect password!'}]})
        }
        const token = jwt.sign({
            userId: foundUsers.id,
            username: foundUsers.username
          }, config.SECRET, { expiresIn: '1h' });;
        return res.json(token);

    } catch(err) {
        res.status(422).send({error: [{title: 'user error', detail: 'Something went wrong!'}]});
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if(!username) {
        return res.status(422)
        .send({errors: [{title: 'User error', detail: 'Please fill username!'}]})
    } else if(!email) {
        return res.status(422)
        .send({errors: [{title: 'User error', detail: 'Please fill email!'}]})
    } else if(!password) {
        return res.status(422)
        .send({errors: [{title: 'User error', detail: 'Please fill password!'}]})
    } else if(password !== confirmPassword) {
        return res.status(422)
        .send({errors: [{title: 'User error', detail: 'Please check passwords!'}]})
    }

    try {
        foundUsers = await User.findOne({email});
        if(foundUsers) {
            return res.status(422)
            .send({errors: [{title: 'User error', detail: 'User already exist!'}]})
        }
        try {
            const user = new User({username, email, password});
            saveUsers = await user.save();
            return res.json({"registerd": true});
        } catch(err) {
            return res.status(422)
            .send({errors: [{title: 'User error', detail: 'Something went wrong!'}]});
        }
    } catch(err) {
        res.status(422).send({error: [{title: 'user error', detail: 'Something went wrong!'}]});
    }
});

module.exports = router;