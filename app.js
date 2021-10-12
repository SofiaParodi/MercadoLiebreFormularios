const express = require('express');
const app = express();
const path = require('path');
const views = path.join(__dirname, 'views');

app.use(express.static('public'));
app.listen(3030, function(){
console.log('El servidor está funcionando en el puerto 3030')
});

app.get('/', (req, res)=> res.sendFile(path.join(__dirname,'./views','home.html')));
app.get('/register', (req, res)=> res.sendFile(path.join(__dirname,'./views','register.html')));
app.get('/login', (req, res)=> res.sendFile(path.join(__dirname,'./views','login.html')));