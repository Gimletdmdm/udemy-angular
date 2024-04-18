const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const config = require('./config');
const FakeDb = require('./fake-db');

const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const path = require('path');

mongoose.connect(config.MONGODB_URI, {
}).then(
    () => {
        if(process.env.NODE_ENV !== 'production') {
            const fakeDb = new FakeDb();
            // fakeDb.initDb();
        } 
    }
).catch(err => console.log(err));

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// apiの設定
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

if(process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist', 'udemy-angular');
    app.use(express.static(appPath));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(appPath, 'index.html'));
    })
}


const PORT = process.env.PORT || '3001';

app.listen(PORT, function() {
    console.log('I am running!');
})