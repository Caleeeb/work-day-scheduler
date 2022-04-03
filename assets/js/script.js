
let tasks = {};

let textObj = {
    box: [],
    text: [],
}

// display current day at the top of the app
var timeDisplayEl = moment().format("dddd[, ] MMMM Mo YYYY");
$('#currentDay').text(timeDisplayEl);



//text modification
// when row is clicked the p is edited
$(".row").on("click", "p", function () {
    var tasks = $(this)
        .text().trim();
    // p is turned into a textarea
    var textInput = $("<textarea>")
        .addClass("w-100 h-50")
        .val(tasks);
    $(this).replaceWith(textInput);
})
// save button puts to local storage

// display any text that 
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
            toDo: [],
            inProgress: [],
            inReview: [],
            done: []
        };
    }

    // loop over object properties
    $.each(tasks, function (list, arr) {
        // then loop over sub-array
        arr.forEach(function (task) {
            createTask(task.text, task.date, list);
        });
    });
};

var saveTasks = function () {
    localStorage.setItem("tasks", textInput);
};


//