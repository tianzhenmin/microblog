
function fitScreen(){
    var windowHeight =  $(window).height();
    var headerHeight = $("header").height();
    var footerHeight = $("footer").height();
    var bodyHeight = windowHeight - headerHeight - footerHeight;
    $('.container,.content').css('min-height', bodyHeight + 'px')
}

fitScreen();
var isLogin;
$('.pop').on('click', function(){
    $('.mask').show();
})

$('.login').on('click', function(){
    $('.pop-reg').hide();
    $('.pop-login').fadeIn();
    $('.log-message').empty();
})

$('.regist').on('click', function(){
    $('.pop-login').hide();
    $('.pop-reg').fadeIn();
    $('.log-message').empty();
})

if($('.mask')){
    $('.mask').on('click', function(){
        $('.pop-login').hide();
        $('.pop-reg').hide();
        $('.mask').hide();
    })
}

var postLoginInfo = function(){
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
                $('.error').html(data.message);
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

var postRegInfo = function(){
    var username = $('.pop-reg #username').val();
    var psd = $('.pop-reg #password').val();
    $.ajax({
        type:'post',
        url:"/regist",
        dataType: 'json',
        data: {"username" : username, "password" : psd},
        success: function(data){
            if(data.status===200){
                //location.href = '/';
                $('.error').html('注册成功，正在为您跳转登录界面...');
                $('.error').fadeIn();
                setTimeout(function(){
                    $('.error').fadeOut();
                    $('.login').trigger('click');
                },2500)

            }else{
                $('.error').html(data.message);
                $('.error').fadeIn();
                setTimeout(function(){
                    $('.error').fadeOut();
                },2500)
                $('.pop-reg #username').val('');
                $('.pop-reg #password').val('');
            }
        }
    });
}

var logout = function(){
    $.ajax({
        type: 'get',
        url: "/logout",
        success: function(data){
            window.location.href = data.url;
        }
    })
}

$('.login-btn').on('click', postLoginInfo)
$('.reg-btn').on('click', postRegInfo)
$('.logout').on('click', logout)
$(document).keyup(function (e) {//捕获文档对象的按键弹起事件
    if (e.keyCode == 13) {//按键信息对象以参数的形式传递进来了
        //此处编写用户敲回车后的代码
        if($('.pop-reg').css('display') !== 'none'){postRegInfo();}
        if($('.pop-login').css('display') !== 'none'){postLoginInfo();}
    }
});