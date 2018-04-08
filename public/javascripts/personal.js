$('.submit-info').on('click', function(){
    var title = $('#arti-title').val();
    var desc = $('#arti-desc').val();
    var content = $('#arti-content').val();
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