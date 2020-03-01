console.log('Server listening to port 3000....')

const io = require('socket.io')(3000)


io.on('connection', socket => {
    socket.on('code-message', code => {
        console.log(code)
        socket.broadcast.emit('code-stream', code)
    })
})