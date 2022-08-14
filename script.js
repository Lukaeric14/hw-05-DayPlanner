var now = moment().hour();
console.log(now);

$(document).ready(function(){

$("textarea").each(function() {
    var hourTime = parseInt($(this).attr("name"));
if ( hourTime<now) {
    $(this).addClass("past");
} else if (hourTime=now) {
    $(this).addClass("present");
} else {
    $(this).addClass("future");
}})

$(".saveBtn").on("click", function () {
    let time = $(this).parent().attr('data-time');
    let text = $(this).prev().val();
    localStorage.setItem(time, text);
})


});  