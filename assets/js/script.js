

// display current day at the top of the app
var timeDisplayEl = moment().format("dddd[, ] MMMM Mo YYYY");
$('#currentDay').text(timeDisplayEl);



//text modification
// when row is clicked the p is edited
$(".row").on("click", "p", function () {
    var text = $(this)
        .text().trim();
    // p is turned into a textarea
    var textInput = $("<textarea>")
        .addClass("w-100 h-50")
        .val(text);
    $(this).replaceWith(textInput);
})

// save button puts to local storage

var saveTasks = function () {
    localStorage.setItem("tasks", textInput);
};


//