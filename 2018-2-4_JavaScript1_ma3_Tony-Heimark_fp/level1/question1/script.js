//Use RegEx to validate form


document.getElementById("submit-btn").addEventListener("click", function(){
    let inputFields = document.getElementsByTagName("input");

    for(let i = 0; i < inputFields.length; i++){
        let inputValue = inputFields[i].value;
        let validation = new RegExp(inputFields[i].pattern);
        
    }
})

function displayPopUp(){
    let popUpp = document.getElementById("popUp");
            popUpp.style.display = "block";
}