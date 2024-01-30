const menu = document.querySelector("#menu")
const openIcon = document.querySelector("#openIcon")
const closeIcon = document.querySelector("#closeIcon")
const mobileAnchor = document.querySelectorAll(".mobileAnchor")

openIcon.addEventListener("click" , () => {
    menu.style.display = "flex"
    openIcon.classList.add("active")
})

closeIcon.addEventListener("click" , () => {
    menu.style.display = "none"
    openIcon.classList.remove("active")
})


mobileAnchor.forEach(anchor => {
    anchor.addEventListener("click" , () => {
        menu.style.display = "none"
        openIcon.classList.remove("active")
    })
})

document.addEventListener("click" , event => {
    if(!menu.contains(event.target) && event.target != openIcon) {
        menu.style.display = "none"
        openIcon.classList.remove("active")
    }
})
