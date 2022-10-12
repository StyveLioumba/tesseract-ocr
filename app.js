import express from 'express';
import * as environment from 'dotenv';
import bodyParser from 'body-parser';


import appRouter from './routers/app.route.js';
import * as constante from './constantes.js';

const app = express();
const env = environment.config();


app.set('views', './views');
app.set('views engine', "ejs")

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("",appRouter);

app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`server is running in http://${process.env.HOST}:${process.env.PORT}`);
});


