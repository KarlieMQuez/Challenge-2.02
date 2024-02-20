//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

$("#secret-box").hide();

$("#box-button").click( function() {
    $("#secret-box").toggle();

});

$("#secret-box").click( function(){
    $("#secret-box").addClass("animate-boxy");
    
    setTimeout(function (){
        $("#secret-box").removeClass
        ("animate-boxy");
    },5000);

});

$("#my-name").click( function(){
    $("#secret-box").css("border-radius","20px");
    $("#secret-box").css("background-color","purple");
});

$("#redo").click(function(){
    $("#secret-box").hide();
    $("#secret-box").css("background-color","rosybrown");
    $("secret-box").css("border-radius","0px");

})



});