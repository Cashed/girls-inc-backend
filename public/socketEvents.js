$(function () {
    const socket = io();

    const body = $('<body');
    let background;

    socket.on('public board message', function(msg) {
        const avatar = $('<img class="avatar">').attr('src', msg.pic);
        const user = $('<div class="username">').text(msg.username + ":");
        const text = $('<p class="message-text">').text(msg.message); 
        const message = $('<li class="message">').append(avatar).append(user).append(text);
        $('#messages').append(message);
        $('#messages')[0].scrollTop = $('#messages')[0].scrollHeight;
    });

    socket.on('background change', function(newBackground) {
        $('<body>').css("background-image", `url(${newBackground})`); 
    });
});