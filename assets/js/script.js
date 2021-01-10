$(document).ready(function () {  
    const test = false

    var now = moment().format('MMMM Do YYYY')

    let nowHour24 = moment().format('H')
    let nowHour12 = moment().format('h')

    if (test) {
        nowHour24 = 13,
        nowHour12 = 1
    }

    let $dateHeading = $('#currentDay')
    $dateHeading.text(now)
})

var tasks = {}

var loadTasks = function () {  
    tasks = JSON.parse(localStorage.getItem("tasks"))

    if (!tasks) {
        tasks = {
            taskTitle: [],
            taskDesc: []
        }
    }


}

var saveTasks = function () {  
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

$("#currentDay").

// task text was clicked
$(".list-group-item").on("click", "p", "small", function () {  
    var text = $(this).text().trim()

    // replace p eleement with a new text area
    var textInput = $("<textarea>").addClass("form-control").val(text)
    $(this).replaceWith(textInput)

    // auto focus new element
    textInput.trigger("focus")
})

// editable field was un-focused
$(".list-group-item").on("click", ".save-btn", function () {  
    // get current value of textarea
    var text = $(this).val()

    // get status type and position in the list
    var status = $(this)
        .closest(".list-group-item")
        .attr("id")
        .replace("list-", "")
    var index = $(this)
        .closest(".list-group-item")
        .index()

    // update task in array and resave to local storage

    // recreate p element
    var taskP = $("<p>")
        .addClass("mb-1")
        .text(text)
    
    // replace textarea with new content
    $(this).replaceWith(taskP)

})
