$('[format-data]').each(function(){
    var data = $(this).html();
    var date = new Date(data);
    var str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    $(this).html(str);
})
$(function() {
    $('.content').css('min-height',$(window).height() - $('header').height() - 21);
    $('.arti-container').each(function() {
        $(this).append($(this).attr('value'));
    })
})

$('.arti-auth').on('click', function(){
    var auth = $(this).text();
    console.log(auth);
    $.ajax({
        type: 'post',
        url: '/showauth',
        dataType: 'json',
        data: {auth: auth},
        success: function(data){
            $('.auth-desc .user-info').empty();
            if(data.status == 200){
                $('.auth-desc .user-info').append(`<p><img style="width: 50%;" src="/images/${data.result.icon}"/></p>
                                                    <p style="padding-top:10px">${data.result.username}</p>
                                                `);
            } else {
                $('.auth-desc .user-info').append(`<p><img style="width: 50%;" src="/images/male.png"/></p>
                                                    <p style="padding-top:10px">未注册用户(游客发布)</p>
                                                `);
            }
            $('.auth-desc').show();
        }
    })


})

$('.icon-chacha').on('click', function(){
    $('.auth-desc').hide()
})