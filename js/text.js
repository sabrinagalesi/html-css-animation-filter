$(document).ready(function(){
    $(".mouse").mousedown(function(){
        $(this).addClass("active");
    })
    $(".mouse").mouseup(function(){
        $(this).removeClass("active");
    })
    $(".click").mousedown(function(){
        $(this).addClass("smaller");
    })
    $(".click").mouseup(function(){
        $(this).removeClass("smaller")
    })
    
})