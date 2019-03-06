// $(".del-icon").css("display", "none");

$("#add-icon").on("click",function(){
    $("#new-todo-input").slideToggle();
});

$("#new-todo-input").keypress(function(keyCode){
    if(keyCode.which===13){
        var task = $("#new-todo-input").val();
        if(task===""){
            alert("Cant Be empty");
        }else{
            $("#list-ul").append('<li class="todo-item"><i class="del-icon fa-trash-alt"></i><span class="item-txt">'+task+'</li>');
            $("#new-todo-input").val("")
        }
    }
})


$("#list-ul").on("mouseenter", ".todo-item", function(){
    $(this).find(".del-icon").toggle(400);
})
$("#list-ul").on("mouseleave", ".todo-item", function(){
    $(this).find(".del-icon").toggle(400);
})

$("#list-ul").on("click", ".todo-item", function(){
    $(this).find(".item-txt").toggleClass("cut");
    
})

$("#list-ul").on("click", ".del-icon", function(){
    $(this).parent().fadeOut("slow", function(){
        $(this).remove();
    });
})



// $(".todo-item").mouseout(function(){
//     $(this).find("#del-icon").toggle("slide");
// })