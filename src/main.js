import {findData, findButton, addTask, confirmTask, showOrCloseTask, deleteTask} from './toDo.js';

let COUNT = 0;

const data = findData();
const buttonAdd = findButton("#add");
let addInfo = document.querySelector("#addInfo");
let isTaskAdded = true;
let buttonConfirm = undefined;
let buttonShowList = [];
let buttonShowDelete = [];

buttonAdd.onclick = () => {
    if (isTaskAdded) {
        addTask(data, isTaskAdded);
        addInfo.innerHTML = null;
        buttonConfirm = findButton("#confirm");
        isTaskAdded = false;
        buttonConfirm.onclick = () => {
            confirmTask(data);
            COUNT += 1;
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
                const taskId = parseInt(buttonShow.id.match(/\d+/));
                deleteTask(data, taskId);
                COUNT -= 1;
            })
            buttonShowDelete.push(buttonDelete);
        }
    } else {
        addInfo.innerHTML = "Confirm your task before you will add new";
        buttonConfirm.onclick = () => {
            confirmTask(data);
            COUNT += 1;
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
                const taskId = parseInt(buttonShow.id.match(/\d+/));
                deleteTask(data, taskId);
                COUNT -= 1;
            })
            buttonShowDelete.push(buttonDelete);
        }
    }
}