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
            $('.auth-desc .user-info').append(`<img style="width: 50%;" src="/images/${data.result.icon}"/>`);
            $('.auth-desc').show();
        }
    })


})

$('.icon-chacha').on('click', function(){
    $('.auth-desc').hide()
})