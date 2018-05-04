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

var fontSelectors = [
    '.title-content .iconfont',
    '.title-content .timeline',
    '.title-content .title',
    '.title-content .arti-auth',
    '.arti-desc',
    '.arti-container'
];

$('.font-small').on('click', function(){
    if($(this).hasClass('disabled')){
        return;
    }
    var bodyFontSize = parseInt($('body').css('fontSize')) - 1;
    $('body').css('fontSize', bodyFontSize + 'px');
    fontSelectors.forEach(function (selector) {
        $(selector).css('fontSize', (parseInt($(selector).css('fontSize')) - 1) + 'px');
    });
    if (bodyFontSize <= 12) {
        $(this).addClass('disabled');
    }
    if ($(".font-big").hasClass('disabled')) {
        $(".font-big").removeClass('disabled');
    }
})

$('.font-big').on('click', function(){
    if($(this).hasClass('disabled')){
        return;
    }
    var bodyFontSize = parseInt($('body').css('fontSize')) + 1;
    $('body').css('fontSize', bodyFontSize + 'px');
    fontSelectors.forEach(function (selector) {
        $(selector).css('fontSize', (parseInt($(selector).css('fontSize')) + 1) + 'px');
    });
    if (bodyFontSize >= 24) {
        $(this).addClass('disabled');
    }
    if ($(".font-small").hasClass('disabled')) {
        $(".font-small").removeClass('disabled');
    }
})

$('.icon-chacha').on('click', function(){
    $('.auth-desc').hide()
})

$('.sub-com').on('click', function(){
    var a_id = $('.a_id').val();
    var u_id = $('.u_id').val();
    var content = $('.com-content').val();
    var d= new Date();
    var date = formatDate(d);
    $.ajax({
        type: 'post',
        url: '/commond',
        dataType: 'json',
        data: {a_id: a_id, u_id: u_id, content: content, date: date},
        success: function(data){
            if(data.status == 200){
                $('.com-content').val('');
            }
        }
    })
})

$(function(){
    var a_id = $('.a_id').val();
    $.ajax({
        type: 'post',
        url: '/getCommonts',
        dataType: 'json',
        data: {a_id: a_id},
        success: function(data){
            console.log(data);
            var tpl = ``;
            for(var i = 0 ; i < data.length ; i ++) {
                var dd = formatDate(new Date(data[i].c_time));
                tpl += `<div class="commond-item">
                            <div class="commond-icon">
                                <img src="/images/${data[i].icon}"/>
                            </div>
                            <div class="commond-container">
                                <p class="commond-user">${data[i].username}</p>
                                <p class="commond-time">${dd}</p>
                                <p class="commond-content">${data[i].c_content}</p>
                            </div>
                        </div>`
            }
            $('.commonds-list').append(tpl);
        }
    })
})

var formatDate = function(date) {
    var y = date.getFullYear(),
        M = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    var str = y + '-' + check(M) + '-' + check(d) + ' ' + check(h) + ':' + check(m) + ':' + check(s);
    return str;
}

var check = function(str){
    str=str.toString();
    if(str.length<2){
        str='0'+ str;
    }
    return str;
}