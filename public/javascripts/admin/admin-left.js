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
                console.log(data.filePath);
            },
            error: function (err) {
                console.log(err.message);
            }
        })
    }
}, ".up-icon");