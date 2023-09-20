$(".toggleSwitchOn").on("click", function() {
    $(".toggleSwitchOn").addClass("toggleSwitchOnClick");
    $(".toggleSwitchOff").removeClass("toggleSwitchOffClick");
    $("div.buttonInfoContainer > p").html("Lorem Lipsum for Case 1");
})


$(".toggleSwitchOff").on("click", function() {
    $(".toggleSwitchOn").removeClass("toggleSwitchOnClick");
    $(".toggleSwitchOff").addClass("toggleSwitchOffClick");
    $("div.buttonInfoContainer > p").html("Lorem Lipsum for Case 2");
})

$(".toggle1SwitchOn").on("click", function() {
    $(".toggle1SwitchOn").addClass("toggle1SwitchOnClick");
    $(".toggle1SwitchOff").removeClass("toggle1SwitchOffClick");
    $("div.button2InfoContainer > p").html("Lorem Lipsum for Case 1");
})


$(".toggle1SwitchOff").on("click", function() {
    $(".toggle1SwitchOn").removeClass("toggle1SwitchOnClick");
    $(".toggle1SwitchOff").addClass("toggle1SwitchOffClick");
    $("div.button2InfoContainer > p").html("Lorem Lipsum for Case 2");
})


$(".toggle3SwitchOn").on("click", function() {
    $(".toggle3SwitchOn").addClass("toggle3SwitchOnClick");
    $(".toggle3SwitchOff").removeClass("toggle3SwitchOffClick");
    $("div.button3InfoContainer > p").html("Lorem Lipsum for Case 1");
})


$(".toggle3SwitchOff").on("click", function() {
    $(".toggle3SwitchOn").removeClass("toggle3SwitchOnClick");
    $(".toggle3SwitchOff").addClass("toggle3SwitchOffClick");
    $("div.button3InfoContainer > p").html("Lorem Lipsum for Case 2");
})


$(".toggle4SwitchOn").on("click", function() {
    $(".toggle4SwitchOn").addClass("toggle4SwitchOnClick");
    $(".toggle4SwitchOff").removeClass("toggle4SwitchOffClick");
    $("div.button4InfoContainer > p").html("Lorem Lipsum for Case 1");
})


$(".toggle4SwitchOff").on("click", function() {
    $(".toggle4SwitchOn").removeClass("toggle4SwitchOnClick");
    $(".toggle4SwitchOff").addClass("toggle4SwitchOffClick");
    $("div.button4InfoContainer > p").html("Lorem Lipsum for Case 2");
})


$(".circleContainer").on("click", function() {
    $(".circleContainer").toggleClass("circleContainerOn");
    $(".circleContainer").toggleClass("circleContainerOff");
    $(".horizontalContainer").toggleClass("horizontalContainerOff");
})
