
var globalData = [];
var page_size = 5;
var custom_page = 0;
var page_num;
var item = [];
$.ajax({
    type:'get',
    url:"/ajax",
    success:function(data){
        globalData = data;
        renderPageNum();
        renderTable();
    }
});

function renderPageNum(){
    $('.search-box').append('<input class="search-text"/><span class="search-btn">搜索</span><select class="select-box"><option class="option">编号</option><option class="option">名字</option><option class="option">生源地</option></select>');
    $('.search-btn').on('click', function(){
        searchD();
    });
    $('.search-text').on('keydown', function(){
        if(event.keyCode == 13){
            searchD();
        }
    })
}
function searchD(){
    item = [];
        var juge = $('.search-text').val();
        if(juge === ''){
            $(".table tr:gt(0)").remove();
            custom_page = 0;
            renderTable();
        }else{
            for(var i = 0 ; i < globalData.length ; i++){
                if($('.select-box').find('option:selected').text() === '生源地'){
                    if(globalData[i].address.indexOf(juge) > -1){
                        item.push(globalData[i]);
                    }
                }else if($('.select-box').find('option:selected').text() === '名字'){
                    if(globalData[i].name.indexOf(juge) > -1){
                        item.push(globalData[i]);
                    }
                }else{
                    if((globalData[i].id).toString().indexOf(juge) > -1){
                        item.push(globalData[i]);
                    }
                }
            }
            custom_page = 0;
            $(".table tr:gt(0)").remove();
            renderTableWithItem(item);
        }
}
//上一页
function pre(){
    custom_page--;
    if(custom_page < 0){
        $('.pageSign').html('已没有上一页');
        $('.pageSign').fadeIn();
        setTimeout(function(){
            $('.pageSign').fadeOut();
        },2000);
        custom_page++;
    }
    $(".table tr:gt(0)").remove();
    if($('.search-text').val() === ''){
        renderTable();
    }else{
        renderTableWithItem(item);
    }
}

//下一页
function next(){
    custom_page++;
    if(custom_page > (page_num-1)){
        $('.pageSign').html('已没有下一页');
        $('.pageSign').fadeIn();
        setTimeout(function(){
            $('.pageSign').fadeOut();
        },2000);
        custom_page--;
    }
    $(".table tr:gt(0)").remove();
    if($('.search-text').val() === ''){
        renderTable();
    }else{
        renderTableWithItem(item);
    }
}

function renderTable(){
    page_num = Math.ceil(globalData.length / page_size);
    var div_page = '<a href="javascript:void(0)" class="pre_page" onClick="pre()">上一页</a>';
    for(var i = 0 ; i < page_num ; i++){
        div_page += `<a href="javascript:void(0)" class="num_page" value="${i}">${i + 1}</a>`;
    }
    div_page += '<a href="javascript:void(0)" class="next_page" onClick="next()">下一页</a>';
    $('.btn-box').empty();
    $('.btn-box').append(div_page);
    
    $('.num_page').click(function(){
        custom_page = $(this).text()-1;
        $(".table tr:gt(0)").remove();
        renderTable();
    });
    //custom_page = 0;
    var begin = custom_page * page_size + page_size;
    var end = (custom_page * page_size + page_size) > globalData.length ? globalData.length : custom_page * page_size+page_size;
    for(var i=custom_page * page_size ; i < end ; i++){
        $('.table').append(`<tr>
                    <td class="td" title="${globalData[i].name}"> ${globalData[i].name} </td>
                    <td class="td" title="${globalData[i].address}"> ${globalData[i].address} </td>
                    <td class="td" style="color:red"><a href="/del/${globalData[i].id}" onclick="javascript:if(confirm('确定要删除此信息吗？')){alert('删除成功！');return true;}return false;">删除</a><a href="/toUpdate/${globalData[i].id}">修改</a></td>
                </tr>`);
    }
}
function renderTableWithItem(data){
    if(data.length === 0){
        $('.table').append(`<tr><td class="td" colspan="3">哎哟，没有客官要的东西呢!!</td></tr>`)
    }else{
        page_num = Math.ceil(data.length / page_size);
        var div_page = '<a href="javascript:void(0)" class="pre_page" onClick="pre()">上一页</a>';
        for(var i = 0 ; i < page_num ; i++){
            div_page += `<a href="javascript:void(0)" class="num_page" value="${i}">${i + 1}</a>`;
        }
        div_page += '<a href="javascript:void(0)" class="next_page" onClick="next()">下一页</a>';
        $('.btn-box').empty();
        $('.btn-box').append(div_page);
        $('.num_page').click(function(){
            custom_page = $(this).text()-1;
            $(".table tr:gt(0)").remove();
            renderTableWithItem(data);
        });
        
        var begin = custom_page * page_size + page_size;
        var end = (custom_page * page_size + page_size) > data.length ? data.length : custom_page * page_size+page_size;
        for(var i=custom_page * page_size ; i < end ; i++){
            $('.table').append(`<tr>
                        <td class="td" title="${data[i].name}"> ${data[i].name} </td>
                        <td class="td" title="${data[i].address}"> ${data[i].address} </td>
                        <td class="td" style="color:red"><a href="/del/${data[i].id}" onclick="javascript:if(confirm('确定要删除此信息吗？')){alert('删除成功！');return true;}return false;">删除</a><a href="/users/toUpdate/${data[i].id}">修改</a></td>
                    </tr>`);
        }
    }
}