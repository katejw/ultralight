// create a function to update the date and time
function updateDateTime() {
  var date = new Date();
  var current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  var current_date =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  document.getElementById("timeupdate").innerHTML = current_time;
  document.getElementById("dateupdate").innerHTML = current_date;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);

function updateTimeStatus() {
  const now = new Date();
  const hour = now.getHours();

  let status = "";

  if (hour >= 6 && hour < 12) {
    status = "morning";
  } else if (hour >= 12 && hour < 17) {
    status = "afternoon";
  } else if (hour >= 17 && hour < 21) {
    status = "evening";
  } else {
    status = "night";
  }

  document.body.setAttribute("data-status", status);
}

updateTimeStatus(); // Call the function to set initial status

// Update status every second
setInterval(updateTimeStatus, 1000);
