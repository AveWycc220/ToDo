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
        }
    }
}