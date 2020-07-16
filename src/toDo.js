"use strict"

let COUNT = 0;
let ANIMATION_SPEED = 20;
let LAST_HEIGHT = [];

// Function for finding data
export function findData() {
    const data = document.querySelector(".container");
    if (data) {
        console.log("Data founded.");
        return data;
    } else {
        console.warn("Data not founded!");
        return null;
    }
}

// Function for finding button.
export function findButton(id) { 
    const button = document.querySelector(`${id}`);
    if (button) {
        console.log(`Button ${id} founded`);
        return button;
    } else {
        console.warn(`Button ${id} not founded`);
        return null;
    }
}

// Function to add new div.
export function addTask(data) {
    COUNT += 1;
    const div = document.createElement("div");
    const divTitle = createInputTitle();
    const divTask = createInputTask();
    const buttonConfirm = createButton("confirm");
    div.className = "task";
    div.id = `task_${COUNT}`;
    div.append(buttonConfirm);
    div.append(divTitle);
    div.append(divTask);
    data.prepend(div);
    console.log(`div task_${COUNT} added`);
}

// Function to confirm task.
export function confirmTask(data) {
    let inputTask = data.querySelector(`#task_${COUNT}`).querySelector(".task-div").querySelector(`.input-task`);
    let inputTaskHeight = getComputedStyle(inputTask).height;
    inputTask.style.height = inputTaskHeight;
    LAST_HEIGHT.push(inputTaskHeight);
    let animation = setInterval(() => {
        if (parseInt(inputTask.style.height.match(/\d+/)) <= ANIMATION_SPEED) {
            clearInterval(animation);
            inputTask.style.display = "none";
        } else {
            inputTask.style.height = (parseInt(inputTask.style.height.match(/\d+/))-ANIMATION_SPEED).toString() + "px";
        }
    }, 30)
    let buttonConfirm = findButton("#confirm");
    buttonConfirm.remove();
    let buttonShow = createButton("show");
    buttonShow .className = buttonShow.className + " show";
    buttonShow.id = `show_${COUNT}`;
    let buttonDelete = createButton("delete");
    buttonDelete.id = `delete_${COUNT}`;
    buttonDelete.className = buttonDelete.className + " delete";
    let task = data.querySelector(`#task_${COUNT}`);
    task.append(buttonDelete);
    task.append(buttonShow);
}

// Function that show/close task.
export function showOrCloseTask(data, taskId, showOrClose) {
    // Close
    if (showOrClose){
        const inputTask = data.querySelector(`#task_${taskId}`).querySelector(".task-div").querySelector(`.input-task`);
        let inputTaskHeight = getComputedStyle(inputTask).height;
        inputTask.style.height = inputTaskHeight;
        LAST_HEIGHT[taskId-1] = inputTaskHeight;
        const buttonShow = findButton(`#show_${taskId}`);
        buttonShow.innerHTML = "Show";
        buttonShow.disabled = true;
        console.log(LAST_HEIGHT[taskId-1]);
        if (typeof animation === "undefined") {
            let animation = setInterval(() => {
                if (parseInt(inputTask.style.height.match(/\d+/)) <= ANIMATION_SPEED) {
                    clearInterval(animation);
                    inputTask.style.display = "none";
                    buttonShow.disabled = false;
                } else {
                    inputTask.style.height = (parseInt(inputTask.style.height.match(/\d+/))-ANIMATION_SPEED).toString() + "px";
                }
            }, 30)
        }
        return false;
    // Open
    } else {
        const inputTask = data.querySelector(`#task_${taskId}`).querySelector(".task-div").querySelector(`.input-task`);
        inputTask.style.display = "block";
        const buttonShow = findButton(`#show_${taskId}`);
        buttonShow.innerHTML = "Close";
        buttonShow.disabled = true;
        if (typeof animation === "undefined"){
            let animation = setInterval(() => {
                if (parseInt(inputTask.style.height.match(/\d+/)) >= parseInt(LAST_HEIGHT[taskId-1].match(/\d+/))) {
                    clearInterval(animation);
                    buttonShow.disabled = false;
                } else {
                    inputTask.style.height = (parseInt(inputTask.style.height.match(/\d+/))+ANIMATION_SPEED).toString() + "px";
                }
            }, 30)
        }
        return true;    
    }
}

// Function for deleting task.
export function deleteTask(data, taskId) {
    const divTask = data.querySelector(`#task_${taskId}`);
    divTask.remove(divTask);
    COUNT -= 1;
    let taskList = data.querySelectorAll('.task');
    changeId(taskList);
}

// Function to create new inputTitleDiv
function createInputTitle() {
    const inputTitleDiv = document.createElement("div");
    const inputTitle = document.createElement("textarea");
    inputTitle.className = "input-title";
    inputTitle.placeholder = "Title";
    inputTitle.maxLength = "80";
    inputTitleDiv.append(inputTitle);
    inputTitleDiv.className = "title-div";
    return inputTitleDiv;
}

// Function to create new inputTaskDiv
function createInputTask() {
    const inputTaskDiv = document.createElement("div");
    const inputTask = document.createElement("textarea");
    inputTask.className = "input-task";
    inputTask.id = `input_task_${COUNT}`;
    inputTask.placeholder = "Task";
    inputTask.maxLength = "700";
    inputTaskDiv.append(inputTask);
    inputTaskDiv.className = "task-div";
    return inputTaskDiv;
}

// Function to create some button. Please, use only lower-case.
function createButton(buttonName) { 
    const button = document.createElement("button");
    button.className = "btn";
    button.id = `${buttonName}`;
    button.innerHTML = buttonName[0].toUpperCase() + buttonName.slice(1);
    return button;
}

function changeId(taskList) {
    taskList.forEach((element, i) => {
        element.id = `task_${COUNT-i}`;
        element.querySelector('.delete').id = `delete_${COUNT-i}`;
        element.querySelector('.show').id = `show_${COUNT-i}`;
    });
}