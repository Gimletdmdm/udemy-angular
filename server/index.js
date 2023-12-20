const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db');

const productRouter = require('./routes/products');
const path = require('path');

mongoose.connect(config.MONGODB_URI, {

}).then(
    () => {
        if(process.env.NODE_ENV !== 'production') {
            const fakeDb = new FakeDb();
            // fakeDb.initDb();
        } 
        console.log(config.MONGODB_URI);
    }
).catch(err => console.log(err));

const app = express()

app.use(express.json());

// apiの設定
app.use('/api/v1/products', productRouter);

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