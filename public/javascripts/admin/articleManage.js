$('[format-data]').each(function(){
    var data = $(this).find('p').html();
    var date = new Date(data);
    var str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    $(this).find('p').html(str);
})
$('.tab-all input').on('click', function(){
    if($(this).is(':checked')){
        $('.tab input').prop('checked', true);
        $('.tab input').parent().parent().parent().addClass('tabed');
        $('.cal').html('已选中 <b>' + $('.tab').length + '</b> 篇文章');
    } else {
        $('.tab input').prop('checked', false);
        $('.tab input').parent().parent().parent().removeClass('tabed');
        $('.cal').html('');
    }
})
$('.tab input').on('change', function(){
    if($(this).is(':checked')){
        $(this).parent().parent().parent().addClass('tabed');
    } else {
        $(this).parent().parent().parent().removeClass('tabed');
        $('.tab-all input').prop('checked', false);
    }
    if($(':checked').length === ($('input[type="checkbox"]').length - 1)){
        $('.tab-all input').prop('checked', true);
    }
    if($('.tab input[type="checkbox"]:checked').length == 0){
        $('.cal').html('');
    } else {
        $('.cal').html('已选中 <b>' + $('.tab input[type="checkbox"]:checked').length + '</b> 篇文章');
    }
})
$('.del-pannel,.change-pannel').on('click', function(){
    $(this).fadeOut();
})
$('.delete').on('click', function(){
    var arti_id = parseInt($(this).parent().parent().parent().find('.hide_id').val());
    var arti_name = $(this).parent().parent().parent().find('.arti-title p').html();
    $('.del-pannel .del-content .del-info').html('确定删除 ' + arti_name + ' 吗？');
    $('.del-pannel').fadeIn();
    var $this = $(this);
    $('.del-btn').on('click', function(){
        $.ajax({
            type: 'post',
            url: '/admin/delete',
            dataType: 'json',
            data: {id: arti_id},
            success: function(data){
                $this.parent().parent().parent().remove();
            }
        })
    })
})

$('.exchange').on('click', function () {
    var arti_id = parseInt($(this).parent().parent().parent().find('.hide_id').val());
    $.ajax({
        type: "post",
        url: "/admin/editArticle",
        data: {arti_id: arti_id},
        dataType: "json",
        success: function(data){
            alert(data.status);
        }
    })
})