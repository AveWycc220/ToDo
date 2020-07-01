var COUNT = 0

// Function for finding data
export function findData() {
    const data = document.querySelector(".container")
    if (data) {
        console.log("Data founded.")
        return data
    } else {
        console.warn("Data not founded!")
        return null
    }
}

// Function for finding button.
export function findButton() { 
    const button = document.querySelector("#add")
    if (button) {
        console.log("Button founded.")
        return button
    } else {
        console.warn("Button not founded!")
        return null
    }
}

// Function to add new div.
export function addTask(data) {
    COUNT += 1
    const div = document.createElement("div")
    const divTitle = createInputTitle()
    const divTask = createInputTask()
    div.className = "task"
    div.id = `task_${COUNT}`
    div.append(divTitle)
    div.append(divTask)
    data.after(div)
    console.log(`div task_${COUNT} added`)
}

// Function to create new inputTitleDiv
function createInputTitle() {
    const inputTitleDiv = document.createElement("div")
    const inputTitle = document.createElement("input")
    inputTitle.className = "input-title"
    inputTitle.type = "text"
    inputTitle.placeholder = "Title"
    inputTitle.maxLength = "80"
    inputTitleDiv.append(inputTitle)
    inputTitleDiv.className = "title-div"
    return inputTitleDiv
}

// Function to create new inputTaskDiv
function createInputTask() {
    const inputTaskDiv = document.createElement("div")
    const inputTask = document.createElement("textarea")
    inputTask.className = "input-task"
    inputTask.placeholder = "Task"
    inputTaskDiv.append(inputTask)
    inputTaskDiv.className = "task-div"
    return inputTaskDiv
}