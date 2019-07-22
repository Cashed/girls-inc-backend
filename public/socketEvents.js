$(function () {
    const socket = io();

    socket.on('public board message', function(msg) {
        const user = $('<div class="username">').text(msg.username + ":");
        const text = $('<p class="message-text">').text(msg.message); 
        const message = $('<li class="message">').append(user).append(text);
        $('#messages').append(message);
    });
  });