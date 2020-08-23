$(document).ready(function() {

    //Displaying current date and time on webpage
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    //Have button listen for when clicked
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text= $(this).siblings(".description").val();
        var time =$(this).parent().attr("id");
   
    //Set tasks in local storage
        localStorage.setItem(time, text);
    })


    //To load data saved from LocalStorage
    $("#9th-hour .description").val(localStorage.getItem("9th-hour"));
    $("#10th-hour .description").val(localStorage.getItem("10th-hour"));
    $("#11th-hour .description").val(localStorage.getItem("11th-hour"));
    $("#12th-hour .description").val(localStorage.getItem("12th-hour"));
    $("#13th-hour .description").val(localStorage.getItem("13th-hour"));
    $("#14th-hour .description").val(localStorage.getItem("14th-hour"));
    $("#15th-hour .description").val(localStorage.getItem("15th-hour"));
    $("#16th-hour .description").val(localStorage.getItem("16th-hour"));
    $("#17th-hour .description").val(localStorage.getItem("17th-hour"));



    function hourTracker() {
    
        var currenthour = moment().hour();

    //time block loop
        $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour,currenthour)

    //Condition checking if task has moved past this current time
        if(blockHour < currenthour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
            }
    
        
        else if (blockHour === currenthour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            }
    
    
        else {
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
            }
        })
    }


    hourTracker();

})