// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
   const saveBtnEl = document.querySelector("saveBtn");

    // EVENT LISTENER
  // Event listener for saveBtn click
  $('.saveBtn').on('click', function (e) {
    e.preventDefault();
    // get nearby values of the description in jQuery
    var events = $(this).siblings('.description').val();
    // get the id attribute of the parent div element
    var currentHour = $(this).parent().attr('id');

    // save in local storage
    localStorage.setItem(currentHour, events);
  });

  clearBtn = document.querySelector("#clear-btn");

  //clears local storage and high score pages
  clearBtn.addEventListener("click",function(e) {
    e.preventDefault();
    $(".description").val("");
    localStorage.clear();
    
  });


  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  var today = dayjs();
  var currentHour = dayjs().format('HH');
  timeBlock = document.querySelector("time-block");

  //Past, present, and future functionality -
    //Compare timeblock time with current time to determine whether
    //activity is in the past, present, or future 
    $(".time-block").each(function() {
      var timeBlock = $(this).attr("id").split("-")[1];

      if (currentHour == timeBlock) {
          $(this).addClass("present");
          $(this).children(".description").addClass("present");
 
      } else if (currentHour < timeBlock) {
          $(this).removeClass("present");
          $(this).addClass("future");

      } else if (currentHour > timeBlock) {
          $(this).removeClass("future");
          $(this).addClass("past");
      }
  });



  

  // Get item from local storage if any
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


  // TODO: Add code to display the current date in the header of the page.

  function currentDateAndTime() {
    //start timer
    setInterval(function () {
        const timeIs = dayjs().format('hh:mm:ss');
         const today = dayjs();
        $('#currentDay').text(today, timeIs);
    }, 1000)
  };
  currentDateAndTime();





});

