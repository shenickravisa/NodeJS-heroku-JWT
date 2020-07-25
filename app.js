/*
app guardara las configuracion de express
middleware configuraciones antes de las rutas
morgan -> esucha las peticiones realizadas
cors -> permite hacer peticiones desde otros dominios
express.json -> convierte los request a json
app.use(express.static(path.join(__dirname,'public'))) -> obtiene la ruta de la aplicacion web estatica para cargar la vista grafica
*/
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const path = require('path');
const app = express()

/**
 * Middleware
 */
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/**
 * creacion de ruta principal
 */
app.get('/', function (req, res) {
    res.send('Hola mundo')
})
/**
 * middleware para vue 
 */
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Levantar puerto del servidor
 * y creamos una variable de entorno que tendra y almacenara el puerto
 */
app.set('puerto', process.env.PORT || 3000)
app.listen(app.get('puerto'), function () {
    console.log('Escuchando el puerto 3000 !!!')
})