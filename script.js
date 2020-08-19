




//Load saved data from LocalStorage
$("#9am.description").val(localStorage.getItem("9am"));
$("#10am.description").val(localStorage.getItem("10am"));
$("#11am.description").val(localStorage.getItem("11am"));
$("#12pm.description").val(localStorage.getItem("12pm"));
$("#1pm.description").val(localStorage.getItem("1pm"));
$("#2pm.description").val(localStorage.getItem("2pm"));
$("#3pm.description").val(localStorage.getItem("3pm"));
$("#4pm.description").val(localStorage.getItem("4pm"));
$("#5pm.description").val(localStorage.getItem("5pm"));

function hourTracker () {

    var currenthour = moment().hour();




    if(blockHour<currenthour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        }

    else if (blockHour===currenthour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        }


    else {
        $(this).removeClass("past");
        $(this).addClass("future");
        $(this).removeClass("present");
        }
    }
}