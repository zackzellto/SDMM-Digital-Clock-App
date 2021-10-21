function clockTicker() {
    var today = new Date();
    var inHour = today.getHours();
    var inMin = today.getMinutes();
    var inSec = today.getSeconds();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentWeekDay = days[today.getDay()];
    var currentDay = ordinalSuffix(today.getDate());
    var currentMonth = months[today.getMonth()];
    var currentYear = today.getFullYear();
    var currentDate = currentWeekDay+", "+currentMonth+" "+currentDay+" "+currentYear;


    //increment function
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
            }

    //Ordinal addition to dates
    function ordinalSuffix(currentDay) {
        if (currentDay === 1 || currentDay === 21 || currentDay === 31) {
          return currentDay + "st";
        } else if (currentDay === 2 || currentDay === 22) {
          return currentDay + "nd";
        } else if (currentDay === 3 || currentDay === 23) {
          return currentDay + "rd";
        } else {
          return currentDay + "th";
        }
      }

    //Formulate whether its AM or PM
    var inAMorPM = (inHour < 12) ? "AM" : "PM";
        inHour = (inHour == 0) ? 12 : inHour;
        inHour = (inHour > 12) ? inHour - 12 : inHour;

    //format a 0 in front of single digits
        inHour = checkTime(inHour);
        inMin = checkTime(inMin);
        inSec = checkTime(inSec);

    //after formulating time, send it to HTML
        document.getElementById("clockTime").innerHTML = inHour + ":" + inMin + ":" + inSec + " " + inAMorPM;

    //send date to HTML
        document.getElementById("clockDate").innerHTML = currentDate;

    setTimeout(function(){ clockTicker() }, 1000);
}