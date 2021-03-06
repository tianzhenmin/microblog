// var weditor = window.wangEditor;
var ue = UE.getEditor('editor'); //初始化ueditor

// var editor = new weditor('#editor');
// editor.create();

$(function(){
    $('.blog-manage a[href="/admin/articleManage"]').parent('.sublist li').addClass('sub-active').parents('.sublist').slideDown();
    ue.ready(function(){ue.setContent(($('.pre-content').attr('value')));})
})

$('option').each(function(){
    var val = $(this).val();
    var pre_val = $(this).attr('pre-value');
    if(val == pre_val){
        $(this).attr('selected', 'selected');
    }
    $(this).removeAttr('pre-value');
})

$('.tip-select').on('change', function(){
    if($(this).val() !== ''){
        $('#arti-tip').attr('disabled', 'disabled')
    } else {
        $('#arti-tip').removeAttr('disabled')
    }
})

$('.submit-info').on('click', function(){
    var id = $('.arti_id').val();
    var title = $('#arti-title').val();
    var desc = $('#arti-desc').val();
    var content = ue.getContent().replace(/\'/g, "\\'").replace(/"/g, '\"');
    var tip = $('#arti-tip').val() || $('.tip-select').val();
    var date = new Date();
    var fullDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    $.ajax({
        type: 'post',
        url: '/admin/updateArticle',
        dataType: 'json',
        data: {id: id, title: title, desc: desc, content: content, tip: tip, date: fullDate},
        success: function(data){
            location.href = data.url;
        }
    })
})