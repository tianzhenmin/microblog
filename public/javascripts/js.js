fitScreen();

// 让内容元素正好在中间, 为了不让footer下面还有空格
function fitScreen(){
    let windowHeight =  $(window).height();
    let headerHeight = $("header").height();
    let footerHeight = $("footer").height();
    $('.content').css('min-height',`${windowHeight - headerHeight - footerHeight}px`)
}