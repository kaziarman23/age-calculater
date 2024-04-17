const inputEl = document.querySelector(".input");
const currentYear = new Date().getFullYear();
const button = document.querySelector(".button");
const messages = document.querySelector(".messages");


function calculateAge() {
    let inputValue = inputEl.value

    if(inputValue === ""){
        alert("please select a dete of barth")
    }else{
        const dateEl = new Date(inputValue)
        const inputYear = dateEl.getFullYear()
        const result = currentYear - inputYear
        messages.innerHTML =`You'r ${result} years old`
    }
    
}

button.addEventListener("click",calculateAge);
