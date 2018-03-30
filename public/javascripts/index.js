$('.left-content .divide li').on('click', function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var category = $(this).attr('category');
    $.ajax({
        type: 'post',
        url: '/getPost',
        dataType: 'json',
        data: {category: category},
        success: function(data) {
            $('.center-content').empty();
            var tpl = ``;
            var result = data.result;
            for (var j = 0, len1 = result.length; j < len1; j++){
                for (var i = 0, len = result[j].articals.length; i < len; i++) {
                    tpl += `<div class="item">
                            <p class="title">${result[j].articals[i]}</p>
                            <p class="tip"><i class="iconfont icon-biaoqian-"></i><span>${result[j].category}</span><p>
                          </div>`
                }
            }
            $('.center-content').append(tpl);
        }
    })
})

$(function(){
    $('.left-content .divide li:first-child').trigger('click');
})