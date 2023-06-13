let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () =>{
    if(textInput === ""){
       console.log("failure");
       msg.innerHTML = "Task cannot be blank" 
    } else {
        console.log("success");
        msg.innerHTML = "" 
    }
};

let data = {}

let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textArea.value;

    colnsole.log(data);
};

