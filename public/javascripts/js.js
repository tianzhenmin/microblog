
function fitScreen(){
    var windowHeight =  $(window).height();
    var headerHeight = $("header").height();
    var footerHeight = $("footer").height();
    var bodyHeight = windowHeight - headerHeight - footerHeight;
    $('.container').css('min-height', bodyHeight + 'px')
}

fitScreen();

$('.pop').on('click', function(){
    $('.mask').show();
})

$('.login').on('click', function(){
    $('.pop-login').fadeIn();
    $('.log-message').empty();
})

$('.regist').on('click', function(){
    $('.pop-reg').fadeIn();
    $('.log-message').empty();
})

if($('.mask')){
    $('.mask').on('click', function(){
        $('.pop-login').fadeOut();
        $('.pop-reg').fadeOut();
        $('.mask').hide();
    })
}

var postInfo = function(){
    var username = $('.pop-login #username').val();
    var psd = $('.pop-login #password').val();
    $.ajax({
        type:'post',
        url:"/login",
        dataType: 'json',
        data: {"username" : username, "password" : psd},
        success: function(data){
            if(data.status===200){
                window.location.href = data.url;
            }else{
                $('.error').fadeIn();
                setTimeout(function(){
                    $('.error').fadeOut();
                },2500)
                $('.pop-login #username').val('');
                $('.pop-login #password').val('');
            }
        }
    });
}

$('.login-btn').on('click', postInfo)

$(document).keyup(function (e) {//捕获文档对象的按键弹起事件
    if (e.keyCode == 13) {//按键信息对象以参数的形式传递进来了
        //此处编写用户敲回车后的代码
        postInfo();
    }
});
