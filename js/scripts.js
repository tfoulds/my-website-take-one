
const button = document.querySelector("button")
const body = document.querySelector("body")

const colors = ["brown", "grey", "pink", "teal", "emerald"]
//               0         1        2       3       4
//colours[2]

body.style.backgroundColor = "maroon"

button.addEventListener("click", changeBackground)

function changeBackground() {
const colorIndex = Math.floor(Math.random() * colors.length)
body.style.backgroundColor = colors[colorIndex]
}
