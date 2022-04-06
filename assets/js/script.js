
let tasks = {};

let textObj = {};

let now = moment();

let currentHour = now.hour();



// display current day at the top of the app
var timeDisplayEl = moment().format("dddd[, ] MMMM Mo YYYY");
$("#currentDay").text(timeDisplayEl);

// setting the object for future saving through save button
$(".row").on("keypress", "textarea", function (event) {
    var getParent = $(this).parent().attr('id');
    textObj[getParent] = $(this).val() + String.fromCharCode(event.keyCode);

});

// save to local storage after save button click
$(".saveBtn").on("click", function () {
    localStorage.setItem("scheduleData", JSON.stringify(textObj));
});

// apon reload, get object key and value from local storage on load
$(window).on("load", function (event) {
    textObj = JSON.parse(localStorage.getItem("scheduleData"));
    console.log(textObj);
    // check if the there are empty values in local storage
    if (textObj !== null) {
        for (var key in textObj) {
            $("#" + key).find("textarea").text(textObj[key]);
        }
    }
    // if the local storage value is null
    else {
        textObj = {};
    }
    checkHour();
});

// variable to check time
var checkHour = function () {
    $(".row").each(function () {
        var id = $(this).attr('id');
        var splitId = id.split("-");
        var elementHour = parseInt(splitId[1]);

        if (elementHour < currentHour) {
            $(this).children("textarea").addClass("past");

        } else if (elementHour === currentHour) {
            $(this).children("textarea").addClass("present");

        } else if (elementHour > currentHour) {
            $(this).children("textarea").addClass("future");
        }
    });
}
