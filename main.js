const questions = document.querySelectorAll(".text ul li")

for (let question of questions) {
    console.log(question)
    question.addEventListener("click", () => {
        question.classList.toggle("open")
    })
}