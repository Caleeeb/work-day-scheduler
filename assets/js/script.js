
let tasks = {};

let textObj = {};

var now = moment();


// display current day at the top of the app
var timeDisplayEl = moment().format("dddd[, ] MMMM Mo YYYY");
$("#currentDay").text(timeDisplayEl);



//text modification
// when row is clicked the p is edited
$(".row").on("click", "p", function () {
    var tasks = $(this)
        .text()
    // p is turned into a textarea
    var textInput = $("<textarea>")
        .addClass("w-100 h-50")
        .val(tasks);
    $(this).replaceWith(textInput);

});

// setting the object for future saving through save button
$(".row").on("keypress", "textarea", function (event) {
    var getParent = $(this).parent().parent().attr('id');
    textObj[getParent] = $(this).val() + String.fromCharCode(event.keyCode);
});

// save to local storage after save button click
$(".saveBtn").on("click", function () {
    console.log("shooot");
    localStorage.setItem("scheduleData", JSON.stringify(textObj));
});

// apon reload, get object key and value from local storage on load
$(window).on("load", function () {
    textObj = JSON.parse(localStorage.getItem("scheduleData"));
    for (var key in textObj) {
        $("#" + key).find("textarea").text(textObj[key]);
    }
});



//variable to check time 
var checkHour = function () {
    $(".row").each(function () {
        var id = $(this).attr('id');
        var splitId = id.split("-");
        var elementHour = parseInt(splitId[1]);

        if (elementHour < currentHour) {
            $(this).addClass(".past");

        } else if (elementHour === currentHour) {
            $(this).addClass(".present");

        } else if (elementHour > currentHour) {
            $(this)

        }

    });
}

// display any text that 
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};