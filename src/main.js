import {findData, findButton, addTask} from './toDo.js'

const data = findData()
const buttonAdd = findButton("#add")
let addInfo = document.querySelector("#addInfo")
let isTaskAdded = true
let buttonConfirm = undefined

buttonAdd.onclick = () => {
    if (isTaskAdded) {
        addTask(data, isTaskAdded)
        addInfo.innerHTML = null
        buttonConfirm = findButton("#confirm")
        isTaskAdded = false
    } else {
        addInfo.innerHTML = "Confirm your task before you will add new"
        buttonConfirm.onclick = () => {
            isTaskAdded = true
        }
    }
}