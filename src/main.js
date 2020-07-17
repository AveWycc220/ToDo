import {findData, findButton, addTask, confirmTask, showOrCloseTask, deleteTask, load} from './toDo.js';

const data = findData();
const buttonAdd = findButton("#add");
let addInfo = document.querySelector("#addInfo");
let isTaskAdded = true;
let buttonConfirm = undefined;
let buttonShowList = [];
let buttonDeleteList = [];

//window.onload = load(data);
console.log(load(data));

buttonAdd.onclick = () => {
    if (isTaskAdded) {
        addTask(data, isTaskAdded);
        buttonConfirm = findButton("#confirm");
        addInfo.innerHTML = null;
        isTaskAdded = false;
        buttonConfirm.onclick = () => {
            confirmTask(data);
            isTaskAdded = true;
        }
    } else {
        addInfo.innerHTML = "Confirm your task before you will add new";
        buttonConfirm.onclick = () => {
            confirmTask(data);
            isTaskAdded = true;
            let buttonShow = document.querySelector(`#show_${COUNT}`);
            let opened = false;
            buttonShow.addEventListener("click", () => {
                const taskId = parseInt(buttonShow.id.match(/\d+/));
                opened = showOrCloseTask(data, taskId, opened);
            })
            buttonShowList.push(buttonShow);
            let buttonDelete = document.querySelector(`#delete_${COUNT}`);
            buttonDelete.addEventListener("click", () => {
                const taskId = parseInt(buttonDelete.id.match(/\d+/));
                deleteTask(data, taskId);
                buttonShowList.splice(COUNT, 1);
                buttonDeleteList.splice(COUNT, 1);
            })
            buttonDeleteList.push(buttonDelete);
        }
    }
}