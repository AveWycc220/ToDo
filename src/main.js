import {findData, findButton} from './toDo.js'

const data = findData()
const button = findButton()
console.log(data, button)
button.onclick = () => {
    console.log("click")
}