/*
 form validated by js, use of checkbox, 
 textarea, radio, dropdown and inputs.
*/

/*gets inputs*/
const getName = document.getElementById("name");
const getMail = document.getElementById("email");
const getAge = document.getElementById("number");
const getMostUsePlataform = document.getElementById("dropdown");
const getComment = document.getElementById("comment");
const result = document.getElementById("result");

/* checkboxes and radio button call */
const checkboxs = document.querySelectorAll('.input-checkbox');
const radioBtn = document.querySelectorAll('.input-radio');

const pushSubmit = document.getElementById("submit");

/*Validation for name,age and email*/
const validation = () => {
    let error = [] ;
    if (getName.value.length < 5) {
        error [0] = true;
        error [1] = "El nombre no puede contener menos de 5 caracteres";
        return error;
    } else if (getName.value.length > 40) {
        error [0] = true;
        error [1] = "El nombre no puede tener mas de 40 caracteres";
        return error;
    } else if (getMail.value.length < 5 ||
               getMail.value.length > 40 || 
               getMail.value.indexOf("@") == -1 ||
               getMail.value.indexOf(".") == -1) {
        error [0] = true;
        error [1] = "Invalid email address";
        return error;            
    } else if (getAge.value < 13 || getAge.value > 99) {
        error [0] = true;
        error [1] = "Age out of range, 13 to 99 years only";
        return error;
    }

    error [0] = false;
    return error; 
}

/*Validation Checkbox and RadioBtn*/

const checkboxAndRadioValue = () => {
    let checkeds = [];
    let selectRadio = '';

    checkboxs.forEach((e) => {
        if(e.checked == true){
            console.log(e.value);
            checkeds.push(e.value);
        };
    });
    
    radioBtn.forEach((e) => {
        if (e.checked == true){
            console.log(e.value);
            selectRadio = e.value;
        }
        
    })
};

/*Confirm action and remove button*/
const confirmAction = () => {
    let confirmAction = confirm("Confirma los datos a Enviar");
    pushSubmit.remove();
};


/*Button action*/

pushSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validation();

    console.log(getName.value);
    console.log(getMail.value);
    console.log(getAge.value);
    console.log(getMostUsePlataform.value);
    console.log(getComment.value);

    checkboxAndRadioValue();

    if (error [0]) {
        result.innerHTML = error[1];
        result.classList.add("red");
    } else {
        result.innerHTML = "Form sent successfully";
        result.classList.add("green");
        result.classList.remove("red");
        confirmAction();
    }

    
})


