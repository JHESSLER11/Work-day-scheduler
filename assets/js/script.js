const times = ['8am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a")


// displays current time to top of page
var displayTime = function() {
    $("#currentDay").html(currentTime)
}
displayTime()

//displays background colors based on current time
function hourTracker() {
    //call to current hour
    var now = moment().hours();
    //for loop to go through each hour attribute
    $(".time-block").each(function(){
        var eachHour = parseInt($(this).attr('id'));

        if (eachHour > now) {
            $(this).addClass("future");

        } else if (eachHour === now) {
            $(this).addClass("present");

        } else { 
            $(this).addClass("past");
        }
        
    })
};

$('.saveBtn').on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(value, time);
});

$('#9 .description').val(localStorage.getItem("9"));

hourTracker();
    
//loop to check for hours 
