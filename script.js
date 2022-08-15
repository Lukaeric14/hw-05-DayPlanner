var now = moment().hour();
console.log(now);

$(document).ready(function(){

$("textarea").each(function() {
    var hourTime = parseInt($(this).attr("hour"));
if ( hourTime<now) {
    $(this).addClass("past");
} else if (hourTime==now) {
    $(this).addClass("present");
} else {
    $(this).addClass("future");
}

$('.saveBtn').on('click', function() {
    var text=$(this).parent().siblings(".txta").children(".txtb").val();
    var time=$(this).parent().siblings(".txta").children(".txtb").attr('id');
    localStorage.setItem(time, text);
})});

$('#8t').val(localStorage.getItem('8t'));
$('#9t').val(localStorage.getItem('9t'));
$('#10t').val(localStorage.getItem('10t'));
$('#11t').val(localStorage.getItem('11t'));
$('#12t').val(localStorage.getItem('12t'));
$('#13t').val(localStorage.getItem('13t'));
$('#14t').val(localStorage.getItem('14t'));
$('#15t').val(localStorage.getItem('15t'));
$('#16t').val(localStorage.getItem('16t'));
$('#17t').val(localStorage.getItem('17t'));
$('#18t').val(localStorage.getItem('18t'));
$('#19t').val(localStorage.getItem('19t'));
$('#20t').val(localStorage.getItem('20t'));


});  