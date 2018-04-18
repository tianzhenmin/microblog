$('.submit-info').on('click', function(){
    var title = $('#arti-title').val();
    var desc = $('#arti-desc').val();
    var content = $('.w-e-text').html();
    var auth = $('#arti-auth').val();
    var tip = $('.tip-select').val();
    var newTip = $('#arti-tip').val();
    var date = new Date();
    var fullDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    $.ajax({
        type: 'post',
        url: '/upInfo',
        dataType: 'json',
        data: {title: title,desc: desc, content: content, auth: auth, tip: tip, fullDate: fullDate,newTip: newTip},
        success: function (data) {
            location.href = data.url;
        }
    })
})

$('.tip-select').on('mouseout', function(){
    if($(this).val() !== ''){
        $('#arti-tip').attr('disabled', 'true');
        $('#arti-tip').addClass('disable');
    } else {
        $('#arti-tip').removeAttr('disabled');
        $('#arti-tip').removeClass('disable');
    }
})

$('#arti-tip').on('mouseout', function(){
    if($(this).val() !== ''){
        $('.tip-select').attr('disabled', 'true');
        $('.tip-select').addClass('disable');
    } else {
        $('.tip-select').removeAttr('disabled');
        $('.tip-select').removeClass('disable');
    }
})

$(document).on({
    change: function(){
        let file = $(this).prop('files')[0];
        let formData = new FormData();
        formData.append("avatar", file);
        var $this = $(this);
        $.ajax({
            type: 'POST',
            url: '/upIcon',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                // alert(data.filePath);
                $this.prev().attr('src', '/images/' + data.filePath);
                console.log(data.filePath);
            },
            error: function (err) {
                console.log(err.message);
            }
        })
    }
}, ".up-icon");

var weditor = window.wangEditor;
var editor = new weditor('#editor');
editor.create();