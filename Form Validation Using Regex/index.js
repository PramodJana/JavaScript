let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessages = document.querySelectorAll(".empty-field");
let showPasswordbtn = document.querySelector(".btn");


let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let fnFlag, lnFlag, emailFlag, pwdFlag;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for (let errorMessage of errorMessages) {
    errorMessage.classList.add("d-none");
}

for (let emptyFieldMessage of emptyFieldMessages) {
    emptyFieldMessage.classList.add("d-none");
}

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch (field) {
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            //console.log(firstName);
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            //console.log(lastName);
            break;
        case "email":
            email = event.target.value;
            emailTarget = event.target;
            //console.log(email);
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            //console.log(password);
            break;
        default:
            firstName = lastName = email = password = "";
    }
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(firstName + " " + lastName + " " + email + " " + password);
    if (firstName) {
        emptyFieldMessages[0].classList.add("d-none");
        if (!nameRegex.test(firstName)) {
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            console.log("Name must contain only alphabets");
            fnFlag = false;
        }
        else {
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            console.log("good to go");
            fnFlag = true;
        }
    }
    else {
        emptyFieldMessages[0].classList.remove("d-none");
        console.log("please fill the field");
        fnFlag = false;
    }
    if (lastName) {
        emptyFieldMessages[1].classList.add("d-none");
        if (!nameRegex.test(lastName)) {
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            console.log("Name must contain only alphabets");
            lnFlag = false;
        }
        else {
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            console.log("good to go");
            lnFlag = true;
        }
    }
    else {
        emptyFieldMessages[1].classList.remove("d-none");
        console.log("please fill the field");
    lnFlag = false;
    }
    if (email) {
        emptyFieldMessages[2].classList.add("d-none");
        if (!emailRegex.test(email)) {
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            console.log("Invalid Email ID");
        emailFlag = false;
        }
        else {
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            console.log("good to go");
            emailFlag = true;
        }
    }
    else {
        emptyFieldMessages[2].classList.remove("d-none");
        console.log("please fill the field");
    emailFlag = false;
    }
    if (password) {
        emptyFieldMessages[3].classList.add("d-none");
        if (!passwordRegex.test(password)) {
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            console.log("Password Invalid");
        pwdFlag = false;
        }
        else {
            pwdTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
            console.log("good to go");
            pwdFlag = true;
        }
    }
    else {
        emptyFieldMessages[3].classList.remove("d-none");
        console.log("please fill the field");
    pwdFlag = false;
    }

    if(fnFlag && lnFlag && emailFlag && pwdFlag){
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href = "/success.html";
    }
});


showPasswordbtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (pwdTarget.getAttribute("type") === "text") {
        pwdTarget.setAttribute("type", "password");
    }
    else {
        pwdTarget.setAttribute("type", "text");
    }
});