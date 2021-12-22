var regexName = /^[a-zA-Z]+$/;
var regexEmail = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.(com|org)$/;
var regexPhone = /^[0-9]+$/;

// var regexPass = /^([a-zA-Z0-9@*#!$&^]*[A-Z]+([@*!#$%^]*)+[a-zA-Z0-9@*#!$&^]*)+$/
var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
// var regexpass = /^(.{0-7}|[^0-9]*/




var firstNameWarning = document.querySelector("#firstNameWarning");
// console.log(firstNameWarning);
var lastNameWarning = document.getElementById("lastNameWarning");

var emailWarning = document.getElementById("emailWarning");
var addressWarning = document.getElementById("addressWarning")
var dobWarning = document.getElementById("dobWarning");

var phoneWarning = document.getElementById("phoneWarning");
var password = document.getElementById("passwordWarning");
var confirmPsw = document.getElementById("confirmPswWarning");





var submit = document.querySelector('.su');
submit.addEventListener('click', onClick);

function onClick() {
    var firstName = document.getElementById("fname").value;

    // debugger!regexname.test(firstName)

    if (!regexName.test(firstName) && firstName != "") {
        console.log(firstName, firstNameWarning);
        firstNameWarning.classList.remove("icon-hide");
        firstNameWarning.setAttribute('title', "Only Alphabet are allowed");
    } else if (regexName.test(firstName)) {
        firstNameWarning.classList.add("icon-hide");
    } else if (firstName == "") {
        firstNameWarning.classList.remove("icon-hide");
        firstNameWarning.setAttribute('title', "Enter First name");

    }

    //Last name validation

    var lastName = document.getElementById("lname").value;

    if (!regexName.test(lastName) && lastName != "") {
        console.log(lastName, lastNameWarning);
        lastNameWarning.classList.remove("icon-hide");
        lastNameWarning.setAttribute('title', "Only Alphabet are allowed");
    } else if (regexName.test(lastName)) {
        lastNameWarning.classList.add("icon-hide");
    } else if (lastName == "") {
        lastNameWarning.classList.remove("icon-hide");
        lastNameWarning.setAttribute('title', "Enter Last name");
    }

    //Address validation

    var address = document.getElementById("add1").value;

    if (address == "") {
        console.log(address);
        addressWarning.classList.remove("icon-hide");
        addressWarning.setAttribute('title', "Enter Address");
    } else {
        addressWarning.classList.add("icon-hide");
    }

    //dob validatiion

    var dob = document.getElementById("dob").value;

    if (dob == "") {
        console.log(dob);
        dobWarning.classList.remove("icon-hide");
        dobWarning.setAttribute('title', "Enter Date of birth");
    } else {
        dobWarning.classList.add("icon-hide");
    }



    // phone number validation
    var phone = document.getElementById('mob').value
    if ((!regexPhone.test(phone) && phone.length < 10 && phone.length != 0) || (!regexPhone.test(phone) && phone.length != 0)) {
        phoneWarning.classList.remove("icon-hide");
        phoneWarning.setAttribute('title', 'Enter Valid phone number');
    } else if (regexPhone.phone && phone.length == 10) {
        phoneWarning.classList.add("icon-hide");
    } else if (phone.length == 0) {
        phoneWarning.classList.remove("icon-hide");
        phoneWarning.setAttribute("title", 'Phone number can\'t be blank');
    }



    // Email validation 

    var email = document.getElementById("email").value;

    if (!regexEmail.test(email) && email != "") {
        console.log(email)
        emailWarning.classList.remove("icon-hide");
        emailWarning.setAttribute('title', 'Enter valid email address');
    } else if (regexEmail.test(email)) {
        emailWarning.classList.add("icon-hide");
    } else if (email == "") {
        emailWarning.classList.remove("icon-hide");
        emailWarning.setAttribute('title', 'Enter email address');
    }


    // create password validation

    var pswd = document.getElementById("cp").value;

    if (pswd == "") {
        password.classList.remove("icon-hide");
        password.setAttribute('title', 'Password can\'t be blank');
    } else if (pswd.length < 8) {
        password.classList.remove("icon-hide");
        password.setAttribute('title', 'Password less than 8 characters');
    } else if (!regexPass.test(pswd)) {
        password.classList.remove("icon-hide");
        password.setAttribute('title', 'password must contain first letter capital, a special character, more than 8 character and not include first name in password');

    } else if ((pswd.toUpperCase()).match((firstName.toUpperCase()))) {
        password.classList.remove("icon-hide");
        password.setAttribute('title', 'Password cannot contain first name');

    }





}