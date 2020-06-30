// Function for finding data
export function findData() {
    let data = document.querySelector(".container")
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
    let button = document.querySelector("#add")
    if (button) {
        console.log("Button founded.")
        return button
    } else {
        console.warn("Button not founded!")
        return null
    }
}
