var myName = false;

var socket = io('http://localhost:3000');
socket.on('open', function () {
    $('#messages').append($('<li>').text('已连接至服务器，请输入昵称'));
})

//监听system事件,判断welcome或者disconnect，打印消息
socket.on('system', function (json) {
    var sep = '';
    var onlinehtml = '';
    var onlineUsers = json.onlineUsers;
    for (key in onlineUser) {
        if (onlineUser.hasOwnProperty(key)) {
            onlinehtml += sep + onlineUsers[key];
            sep = '、';
        }
    }
    if (json.type === 'welcome') {
        $('#messages').append($('<li>').text('Sys(' + json.time + ')welcome ' + json.text));
        $('#onlineUser').text('在线人数：' + json.onlineUserCount + '。在线列表：' + onlinehtml);
    }
});

//监听服务端的chat message事件，接收每一条消息
socket.on('chat message', function (json) {
    $('#messages').append($('<li>').text(json.author + '(' + json.time + ')' + ':' + json.text));
});

$('#m').keydown(function (e) {
    if (e.keyCode === 13) {
        socket.emit('chat message', $('#m').val());

        //socket.send($('#m')).val();
        $('#m').val('');
        if (myName === false) {
            myName = $('#m').val();
        }
    }
})

$('.friend-item').on('click', function(){
    $('.message-pannel .friend-name').html($(this).find('.friend-n').html());
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).find('.new').hasClass('red-point')){
        $(this).find('.new').removeClass('red-point');
    }
})
$(function(){
    $('.message-pannel .friend-name').html($('.friend-item.active').find('.friend-n').html());
})