"use strict"

let COUNT = 0

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
export function findButton(id) { 
    const button = document.querySelector(`${id}`)
    if (button) {
        console.log(`Button ${id} founded`)
        return button
    } else {
        console.warn(`Button ${id} not founded`)
        return null
    }
}

// Function to add new div.
export function addTask(data) {
    COUNT += 1
    const div = document.createElement("div")
    const divTitle = createInputTitle()
    const divTask = createInputTask()
    const buttonConfirm = createButton("confirm")
    div.className = "task"
    div.id = `task_${COUNT}`
    div.append(buttonConfirm)
    div.append(divTitle)
    div.append(divTask)
    data.prepend(div)
    console.log(`div task_${COUNT} added`)
}

// Function to create new inputTitleDiv
function createInputTitle() {
    const inputTitleDiv = document.createElement("div")
    const inputTitle = document.createElement("textarea")
    inputTitle.className = "input-title"
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
    inputTask.maxLength = "700"
    inputTaskDiv.append(inputTask)
    inputTaskDiv.className = "task-div"
    return inputTaskDiv
}

// Function to create some button. Please, use only lower-case.
function createButton(buttonName) { 
    const button = document.createElement("button")
    button.className = "btn"
    button.id = `${buttonName}`
    button.innerHTML = buttonName[0].toUpperCase() + buttonName.slice(1);
    return button
}