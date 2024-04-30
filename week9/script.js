// create a function to update the date and time
function updateDateTime() {
  var date = new Date();
  const hour = date.getHours();
  let status = "";
  let stat = "";

  var current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  var current_date =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

  if (hour >= 6 && hour < 12) {
    status = "morning";
    document.getElementById("timeupdate-a").innerHTML = current_time;
    document.getElementById("dateupdate-a").innerHTML = current_date;
  } else if (hour >= 12 && hour < 17) {
    status = "afternoon";
    document.getElementById("timeupdate-m").innerHTML = current_time;
    document.getElementById("dateupdate-m").innerHTML = current_date;
  } else if (hour >= 17 && hour < 21) {
    status = "evening";
    document.getElementById("timeupdate-t").innerHTML = current_time;
    document.getElementById("dateupdate-t").innerHTML = current_date;
  } else {
    status = "night";
    document.getElementById("timeupdate-d").innerHTML = current_time;
    document.getElementById("dateupdate-d").innerHTML = current_date;
  }

  if (date.getDate() % 3 == 0) {
    stat = "one";
  } else if (date.getDate() % 3 == 1) {
    stat = "two";
  } else if (date.getDate() % 3 == 2) {
    stat = "three";
  }

  document.body.setAttribute("data-status", status);
  document.body.setAttribute("day-status", stat);
}

updateDateTime();

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);
