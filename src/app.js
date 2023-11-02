import express from 'express'
import {Server} from 'socket.io'
import __dirname from './utils.js'
const app = express()

app.use(express.static(__dirname + '/public'))

const httpServer = app.listen (8080, () => console.log('Running'))
const socketServer = new Server(httpServer)



socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    //le decimos al socket que va a recibir un msj que va a venir del front
    socket.on('message', data => {
        console.log(data)
    })
})