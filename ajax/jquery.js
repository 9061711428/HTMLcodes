$(document).ready(function(){
$("#content").load("casestudy21.html");
$('a').on('click',function(e){
    e.preventDefault();
    var url=this.href;

    $('.link a').removeClass('current');
    $(this).addClass('current');
    
    $('#container').remove();
    $('#content').load(url+' #container').hide().fadeIn('slow');

});
});