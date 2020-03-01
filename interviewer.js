const socket = io('http://localhost:3000')
socket.on('code-stream', codeStream => {
    console.log(codeStream)
    document.getElementById("interviewer").innerHTML = codeStream;
})