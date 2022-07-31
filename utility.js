let countDownDate = new Date("April 23, 2023 01:01:01").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for weeks, days, hours, minutes and seconds
  let weeks = Math.floor((Math.floor(distance / (1000 * 60 * 60 * 24))) / 7);
  let days = (Math.floor(distance / (1000 * 60 * 60 * 24))) % 7;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countweeks = weeks.toString();
  countdays = days.toString();
  counthours = hours.toString();
  countminutes = minutes.toString();
  countseconds = seconds.toString();


  // Output the result in an element with id's
  document.getElementById("weeks").innerHTML = countweeks.padStart(2, '0');
  document.getElementById("days").innerHTML = countdays.padStart(2, '0');
  document.getElementById("hours").innerHTML = counthours.padStart(2, '0');
  document.getElementById("minutes").innerHTML = countminutes.padStart(2, '0');
  document.getElementById("seconds").innerHTML = countseconds.padStart(2, '0');

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);