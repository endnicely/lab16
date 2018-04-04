/*eslint-env brower*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
    
};

var calculateDays = function(){
    "use strict";
    var event, dt, year, date, today, oneDay, days;
    event = $("event").value;
    dt = $("date").value;
    
    //validate event and date text boxes
    if(event.length === 0 || dt.length === 0) {
        $("message").innerHTML = "Please enter both an event name and a date";
        return;
    }
    //Make sure date has slashes and 4-digit year
    if(dt.indexOf("/") == -1) {
        $("message").innerHTML = "Please enter date in MM/DD/YYYY format";
        return;    
    }
    //Make sure date has 4-digit year
    year = dt.substring(dt.length -4);
    if(isNaN(year)) {
        $("message").innerHTML = "Please enter date in MM/DD/YYYY format";
        return;
    }
    //convert date string to date object and make sure it's valid
    date = new Date(dt);
    //calculate days
    today = new Date();
    //HOURS * MINUTES * SECONDS * MILLISECONDS
    oneDay = 24 * 60 * 60 * 1000;
    //EVENT DATE - TODAY'S DATE
    days = (date.getTime() - today.getTime()) /oneDay;
    days = Math.ceil(days);
    //CREATE AND DISPLAY MESSAGE
    if(days === 0) {
        $("message").innerHTML = "Today is ".concat(event.toLowerCase()) + "!" + date.toDateString();
    }
    
    if (days < 0){
        $("message").innerHTML = "Event ".concat(event.toLowerCase()) + "happened " + Math.abs(days) + " days in the past!";
    }
    
    if (days > 0){
       // $("message").innerHTML = Math.abs(days) + " days until".concat(event.toLowerCase()) + " happened " + Math.abs(days) + ;
    }
};

window.addEventListener("load", function() {
    "use strict";
    $("countdown").addEventListener("click",  calculateDays);
    $("event").focus();
});

