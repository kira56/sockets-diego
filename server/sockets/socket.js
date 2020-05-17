const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje', data)
        // // console.log(message);
        // if (message.usuario) {
        //     callback({
        //         respuesta: 'TODO SALIO BIEN'
        //     })
        // } else {
        //     callback('TODO SALIO MAL!!!!!!!!!!!!');
        // }
    })
})
