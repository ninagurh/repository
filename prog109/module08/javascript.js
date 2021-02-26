var errorMessages;

function validateForm() {
// First Name

var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("FirstName").value;
//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20 || !firstname.match(/^[A-Za-z]+$/)) {
   errorMessages += "<p>Invalid Entry First Name is required" +
   "/ Maximum 20 characters</p>";
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;
}
  else {
validFirstname = true;
//5) return status of each field
  return (validFirstname);
  }

// Last Name

var validLastname=false;
//2) read value from HTML
var lastname = document.getElementById("LastName").value;
//3) Do validation
if (lastname==="null" || lastname==="" || lastname.length > 50 || !lastname.match(/^[A-Za-z]+$/)){
    errorMessages += "<p>Invalid Entry / Last Name is required" +
      "/ Maximum 50 characters</p>";
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;
}
else {
validLastname = true;
//5) return status of each field
return (validLastname);
}

// Email

var validEmail=false;
var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length){
    errorMessages = "<p>Invalid Email</p>";
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;
}
else {
  validEmail=true;
  return (validEmail);
}

// Phone
var validPhone=false;
var phone = document.getElementById("Phone").value;
if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
 errorMessages = "<p>Invalid Entry / Phone is required " +
   "/ Maximum 15 digits</p>";
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;
}
else {
  validPhone=true;
  return (validPhone);
}

// Username

var validUsername =false;
//2) read value from HTML
var username = document.getElementById("Username").value;
//3) Do validation
if (username==="null" || username==="" || username.length > 12) {
    errorMessages += "<p>Invalid Entry /" +
    "Username is required / Maximum 12 characters</p>";
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;
}
  else {
   validFirstname = true;
//5) return status of each field
  return (validFirstname);
  }

// Zipcode
var validZipcode=false;
var country = document.getElementById("Country").value;
var zipcode = document.getElementById("Zipcode").value;
if (country === "USA" &&
    (zipcode ==="null" || zipcode==="" || zipcode.length > 5)) {
// validate Zipcode according to the rules
    errorMessages += "<p>Invalid Entry / Zip is required" +
      "/ Maximum 5 digits</p>";
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;
}
else {
  validZipcode = true;
//5) return status of each field
return (validZipcode);
}
}
