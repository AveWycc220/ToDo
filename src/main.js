import {findData, findButton, addTask} from './toDo.js'

const data = findData()
const button = findButton()
button.onclick = () => {
    addTask(data)
}