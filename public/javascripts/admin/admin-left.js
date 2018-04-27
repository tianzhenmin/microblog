
$(function(){
    $('.blog-manage a[href="' + window.location.pathname + '"]').parents('.blog-manage').addClass('active');
    $('.blog-manage a[href="' + window.location.pathname + '"]').parent('.sublist li').addClass('sub-active').parents('.sublist').slideDown();
})


$('.blog-manage').on('click', function(){
    $(this).siblings().find('.sublist').slideUp();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    if($(this).find('.sublist')){
        $(this).find('.sublist').slideToggle();
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
            url: '/admin/upIcon',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                // alert(data.filePath);
                $this.prev().attr('src', '/images/' + data.filePath);
                if($('.show-pannel .user-info')){
                    $('.show-pannel .user-info>img').attr('src', '/images/' + data.filePath);
                }
            },
            error: function (err) {
                console.log(err.message);
            }
        })
    }
}, ".up-icon");