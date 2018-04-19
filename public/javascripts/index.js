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
            for (var i = 0, len = result.length; i < len; i++) {
                var edit_area = '';
                var auth = $('.personal-page>a>span').text();
                if(auth && auth === result[i].auth){
                    edit_area = `<p class="delete">删除</p>`;
                }
                tpl += `<div class="item">
                            <a href="javascript:void(0)" class="appear-right"></a>
                            <input class="article_id" type="hidden" value="${result[i].id}">
                            <p class="title">${result[i].name}</p>
                            <p class="tip"><i class="iconfont icon-biaoqian-"></i><span>${result[i].tip}</span><span class="auth">发布人: ${result[i].auth}</span><span format="date">发布时间: ${format_date(result[i].article_upDate)}</span><p>
                            <p class="arti_desc">${result[i].article_desc}</p>` + edit_area + `</div>`
            }
            $('.center-content').append(tpl);
            appearRight();
        }
    })
})

$(function(){
    $('.left-content .divide li:first-child').trigger('click');
})

var appearRight = function(){
    $('.appear-right').on('click', function(){
        var id = $(this).parent().find('.article_id').val();
        $.ajax({
            type: 'post',
            url: '/right',
            dataType: 'json',
            data: {id: id},
            success: function(data){
                var rightTpl = `<h1>${data.name}</h1><p>${data.content}</p>`;
                $('.right-content').append(rightTpl);
            }
        })
        $('.right-mask').show();
        $('.right-content').css('right','0');
    });
    $('.right-mask').on('click', function(){
        $('.right-content').css('right','-60%');
        $('.right-content').empty();
        $('.right-mask').fadeOut();
    })
    $('.delete').on('click', function(){
        let $this = $(this);
        let article_id = $this.parent().find('.article_id').val();
        $('.review-edit .edit-tip').text('确定删除' + $this.parent().find('.title').text() + '么?');
        $('.review-edit').fadeIn();
        $('.mask').show();
        $('.sure').on('click', function(){
            $.ajax({
                type: 'post',
                url: '/deleteOwnArticle',
                dataType: 'json',
                data: {del_id: article_id},
                success: function(data){
                    console.log(data.status);
                }
            })
            $this.parent().remove();
            $(this).parent().parent().fadeOut();
        })
        $('.no').on('click', function(){
            $('.mask').hide();
            $(this).parent().parent().fadeOut();
        })
    })
}



function format_date(date) {
    var date = new Date(date);
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
}
