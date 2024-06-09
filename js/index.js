var images = Array.from(document.querySelectorAll(".row img"))
const lightBoxContainer = document.getElementById("lightBoxContainer")
const innerBox = document.getElementById("innerBox")
const closeSlide = document.getElementById("closeSlide")
const prevSlide = document.getElementById("prevSlide")
const nextSlide = document.getElementById("nextSlide")
var currentIndex
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function (e) {
        lightBoxContainer.classList.replace("d-none", "d-flex")
        let currentSrc = e.target.getAttribute("src")
        innerBox.style.backgroundImage = `url(${currentSrc})`
        currentIndex = i
    })
}
function close() {
    lightBoxContainer.classList.replace("d-flex", "d-none")
}
closeSlide.addEventListener("click", close)
function sliderNext() {
    currentIndex++
    if (currentIndex >= images.length) currentIndex = 0
    innerBox.style.backgroundImage = `url(${images[currentIndex].getAttribute("src")})`
}
nextSlide.addEventListener("click", sliderNext)
function sliderPrevious() {
    currentIndex--
    if (currentIndex < 0) currentIndex = (images.length - 1)
    innerBox.style.backgroundImage = `url(${images[currentIndex].getAttribute("src")})`
}
prevSlide.addEventListener("click", sliderPrevious)
document.addEventListener("keyup", function (e) {
    if (e.key == "ArrowRight") {
        sliderNext()
    } else if (e.key == "ArrowLeft") {
        sliderPrevious()
    } else if (e.key == " ") {
        close()
    }

})
// first Method
lightBoxContainer.addEventListener("click", function (e) {
    if (lightBoxContainer == e.target) {
        close()
    }
})


// second Method

// lightBoxContainer.addEventListener("click", function (e) {
//     close()
// })

// innerBox.addEventListener("click", function (e) {
//     e.stopPropagation()
// })
