$(function(){
    $("#devour").on("click", function(event){
        var id = $(this).data("id");
        

        var newConsumedState = {
            devoured: true
        };

        $.ajax("/burger/update/" + id,{
            type: "PUT",
            data: newConsumedState
        }).then(
            function(){
                console.log("burger was devoured");
                location.reload();
            }
        );
    });

    //create burger POST
    $("#addBurger").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            name: $("#addBurger").val().trim(),
            devoured: false
        };
    
    $.ajax("/burger/create/", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("added new burger");
            location.reload();
            }
        );  
    });
 
});