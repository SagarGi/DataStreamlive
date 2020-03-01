const socket = io('http://localhost:3000')

const inputCode = document.getElementById('interviewee')

function passFunction() {

    const inputCodeMessage = inputCode.value
    console.log('Your message :' + inputCodeMessage)
    socket.emit('code-message', inputCodeMessage)
}

