$(document).ready(function () {
    // display current date using moment
    var clock = function () {
        // format header date var
        var currentHeaderDate = moment().format('LLL')
        // display headerDate over currentDay
        $("#currentDay").text(currentHeaderDate)
        console.log(currentHeaderDate)
    }

    saveTasks = function () {  
        localStorage.setItem(".task-title", JSON.stringify("<textarea>"))
    }

    loadTasks = function () {  
        tasks = JSON.parse(localStorage.getItem(".task-title"))

    
        
    }

    $("#task1 save-btn1").click(function () {  
        // get form values
        var taskTitle = $("#task-title2").val()
        var taskTime = $("#taskHour1").val()

        saveTasks()
        console.log(taskTitle, taskTime)
    })

    /* commenting out to work on something else
    $(".saveBtn").on("click", function (event) {  
        event.preventDefault()
        var savedTask = $(this).siblings(".task-title").attr("id")
        console.log(savedTask)
        saveTasks()
        loadTasks()
    })
    */

    var updateDayColor = function () {
        var currentHour = moment().hours()
        var taskHour = $("")

        $(".taskHour").each(function () {
            var taskHour = $(".taskHour").val()
            console.log(this)
                if (taskHour == currentHour) {
                $(".list-group-item").addClass("bg-warning")
                } else if (taskHour < currentHour) {
                $(".list-group-item").addClass("bg-danger")
                } else (taskHour > currentHour)
                $(".list-group-item").addClass("bg-light")
            })
        }

    updateDayColor()
    clock()
})