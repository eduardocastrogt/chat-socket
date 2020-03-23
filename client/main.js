var socket = io.connect('http://192.168.1.10:4455',{'forceNew':true});

socket.on('message', function(data){
    console.log(data[0].text);
    render(data);
});

function render(data)
{
    var html = data.map(function(message, index){
        return (
            `
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
            `
        );
    }).join(' ');

    document.getElementById('message').innerHTML = html;
}

function addMessage(e){
    var mensaje = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    document.getElementById('text').innerHTML = '';
    socket.emit('add-message', mensaje);
    return false;
}