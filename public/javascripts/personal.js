var ue = UE.getEditor('editor');

$('.submit-info').on('click', function(){
    var title = $('#arti-title').val();
    var desc = $('#arti-desc').val();
    var content = ue.getContent().replace(/\'/g, "\\'").replace(/"/g, '\"');
    var auth = $('#arti-auth').val();
    var tip = $('.tip-select').val();
    var newTip = $('#arti-tip').val();
    var date = new Date();
    var fullDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    $.ajax({
        type: 'post',
        url: '/admin/upInfo',
        dataType: 'json',
        data: {title: title,desc: desc, content: content, auth: auth, tip: tip, fullDate: fullDate,newTip: newTip},
        success: function (data) {
            location.href = data.url;
        }
    })
})

$('.tip-select').on('change', function(){
    if($(this).val() !== ''){
        $('#arti-tip').attr('disabled', 'true');
        $('#arti-tip').addClass('disable');
    } else {
        $('#arti-tip').removeAttr('disabled');
        $('#arti-tip').removeClass('disable');
    }
})

$('#arti-tip').on('keyup', function(){
    if($(this).val() !== ''){
        $('.tip-select').attr('disabled', 'true');
        $('.tip-select').addClass('disable');
    } else {
        $('.tip-select').removeAttr('disabled');
        $('.tip-select').removeClass('disable');
    }
})

// var weditor = window.wangEditor;
// var editor = new weditor('#editor');
// editor.create();
