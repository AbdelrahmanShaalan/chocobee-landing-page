const buttons = document.querySelectorAll(".barButton")
const bars = document.querySelectorAll(".bar")

buttons.forEach((button) => {
    button.addEventListener("click" , (event) => {
        if(event.target.classList.contains("active")) {
            event.target.classList.remove("active")
            event.target.children[0].classList.replace("bi-arrow-bar-up" , "bi-arrow-bar-down")
            event.target.nextElementSibling.style.display = "none"
        } else {
            buttons.forEach(button => button.classList.remove("active"))
            bars.forEach(bar => bar.style.display = "none")
            event.target.classList.add("active")
            event.target.children[0].classList.replace("bi-arrow-bar-down" , "bi-arrow-bar-up")
            event.target.nextElementSibling.style.display = "block"
        }
    })
})
