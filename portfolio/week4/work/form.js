const word = document.getElementById("word")
const password = document.getElementById("password")
const errorElement = document.getElementById("error")
const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{
    let messages = []
    if(word.value === '' || word.value == null){
        messages.push("message is required")
    }
    if (password.value.length <= 6){
        messages.push("Password must be longer than 6 characters")
    }
    if (messages.length > 0)
    e.preventDefault()
    errorElement.innerText = join(', ')
})