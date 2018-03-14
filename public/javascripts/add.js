$('#ok_btn').on('click',function(){
    var name = $.trim($('#name').val()),
        address = $.trim($('#address').val())
        data = {name : name,address : address};
    $.ajax({
        type : 'POST',
        async : false,
        url : 'http://localhost:1337/',
        data : data,
        success : function(data){
            console.log(data);
        }
    })
    window.location.href="/home";
})