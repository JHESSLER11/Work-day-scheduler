
// displays current time to top of page
var displayTime = function() {
    var currentTime = moment().format("MMM Do YY")
    $("#currentDay").html(currentTime)
}
displayTime()



//loop to check for hours 
