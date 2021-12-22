// var regexname = /^[A-z]+$/
var firstname = document.querySelector("#fname");
var submit = document.querySelector(".su");

submit.addEventListener('click', function() {
  inputs();
});


function inputs() {
    var input = document.getElementsByName("form");
    console.log(input);
   
//Enter all input values in array for comparision.
    for (var i = 0; i < input.length; i++) {
        var a = input[i].value;
        console.log(a);
    }

  

//function of first name and last name validation.
function name(j) {
  
    var regexName = /^[a-zA-Z]+$/;
    var regexAdd = /^(.{8,})$/
    var regexDis = /^[A-z]+$/;
    var regexState = /^\w+(\s)?(\w)*$/;
    var regexDob = /^\d+\/\d+\/d+$/
    var regexEmail = /^[a-z0-9.-_]+@[a-zA-Z]+\.(com|org)$/;
    var regexPhone = /^(\+\d{1,2}\s)?\(?\d{4}\)?[\s.-]*\d{2}[\s.-]*\d{4}$/;
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var regexphoto = 45
  //array of alerts 
  var alerts = ["First Name is required ", "Last Name is required", "Address: Is required", "","Please Fill the District", "Please Select State", "Please select Date of Birth", "Fill Email ID", "Please Enter Mobile No.", "Please choose any Password", "Please confirm Password" ]
  var alert1 = ["First name only Contains only alphabets", "Last name only Contains only alphabets", "Address Contains only these special character (Contains Atleast 8 Characters)", "",  "District contains only Alphabets (no special character)", "","","Enter valid email (abc@gmail.com)", "Enter Valid Phone No. (only 10 digit and contains only numbers)", "Password must contain 8 characters or more, Contains one caps Alphabet, one digit and atleast one special character","Confirm Password Not Matched"]
  // console.log(alert1.length);
  //array of regexp
  var regex = [regexName, regexName, regexAdd, regexAdd, regexDis, regexState, regexDob, regexEmail, regexPhone, regexPass ,regexPass] 
  // console.log(regex[j]);


    if (!regex[j].test(input[j].value) && input[j].value != "")
    {
      console.log(input[j].value);
      alert(alert1[j]);
      console.log(5);
    }
    else if(input[j].value == ""){
      console.log(input[j]);
      console.log(a);
      alert(alerts[j]);
    }
    else if (input[9].value != input[10].value && input[10].value != ""){
      alert(alert1[10])
    }
    
  }
    var fname = 0;
    var lname = 1;
    var add1 = 2;
    //add2 is not Neccessary
    var district =4;
    // var state = 5;
    // var dob =6;
    var email = 7;
    var mob = 8;
    var pass = 9;
    var confirmPass =10;

    name(fname);
    name(lname);
    name(add1);
    name(district);
    // name(state);
    // name(dob);
    name(email);
    name(mob);
    name(pass);
    name(confirmPass);
    


};

