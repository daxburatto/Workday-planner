$(document).ready(function () {
    // display current date using moment
    var clock = function () {
        // format header date var
        var currentHeaderDate = moment().format('MMMM Do YYYY')
        // display headerDate over currentDay
        $("#currentDay").text(currentHeaderDate)
        console.log(currentHeaderDate)
    }

    getTasks = function (taskHour, taskTitle) {  
        var dayTask = $("#task-title").val()
        var dayHour = $("#taskHour").val()

        $("<textarea>").text("Enter a task")
        console.log(dayTask, dayHour)
            

    }
    
    saveTasks = function () {  
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    loadTasks = function () {  
        tasks = JSON.parse(localStorage.getItem("tasks"))
    
        if (!tasks) {
            tasks = {
                taskTitle: [],
            }
        }

        $.each(tasks, function (list, arr) {  
            console.log(list, arr)
            arr.forEach(function (task) {
                setTasks(taskTitle)
                console.log(taskTitle)
            })
        })
    }

    var updateDayColor = function () {
        var currentHour = moment().hours()

        $(".list-group").each(function () {
            var taskHour = $(this)
                if (taskHour == currentHour) {
                $(".list-group-item").addClass("bg-warning")
                } else if (taskHour < currentHour) {
                $(".list-group-item").addClass("bg-danger")
                } else {
                $(".list-group-item").addClass("bg-light")
                }
        })
        
    }

    updateDayColor()
    clock()
    getTasks()
})


// function to update row color
var updateRowColor = function ($hourRow, hour) {
    if (test) {console.log("rowcolor", nowHour24, hour)}
    if (hour < nowHour24) {
        if (test) {console.log("lessThan")}
        $hourRow.css("background-color", "lightgrey")
    } else if (hour > nowHour24) {
        if (test) {console.log("greaterThan")}
        $hourRow.css("background-color", "list-group-item-danger")
    } else {
        if (test) {console.log("equal")}
        $hourRow.css("background-color", "list-group-item-warning")
    }
}

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
