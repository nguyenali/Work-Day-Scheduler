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


    //Load saved data from LocalStorage
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm.description").val(localStorage.getItem("1pm"));
    $("#2pm.description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));



    function hourTracker() {
    //Get current hour numbers
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