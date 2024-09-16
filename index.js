const express = require('express');
const bodyParser = require('body-parser');


const taskroutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/task',taskroutes);

const PORT =  3002;

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})