jQuery(function($){
    $(".phone").mask("+375 (99) 999-99-99");
    $("input").blur(function() {
        $("#info").html("Unmasked value: " + $(this).mask());
    }).dblclick(function() {
        $(this).unmask();
    });
 });
