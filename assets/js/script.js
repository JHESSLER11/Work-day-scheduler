const times = ['8am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a")


// displays current time to top of page
var displayTime = function() {
    $("#currentDay").html(currentTime)
}
displayTime()

var hourTracker = function() {
    $('time.block').each(function(){
        var eachHour = parseInt($('time.block').attr('id').split('hour')[1])
        
    })
}
    
//loop to check for hours 
