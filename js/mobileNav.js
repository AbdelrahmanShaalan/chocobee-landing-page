const menu = document.querySelector("#menu")
const openIcon = document.querySelector("#openIcon")
const closeIcon = document.querySelector("#closeIcon")

openIcon.addEventListener("click" , () => {
    menu.style.display = "flex"
})

closeIcon.addEventListener("click" , () => {
    menu.style.display = "none"
})

