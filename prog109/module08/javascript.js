var errorMessages="";
var errorMessage="Error! Unable to submit form. Please check entries.";

function validateForm() {

// create variables

var validFirstname=false;
var validLastname=false;
var validEmail=false;
var validPhone=false;
var validUsername=false;
var validPassword=false;
var validAddress=false;
var validCity=false;
var validState=false;
var validCountry=false;
var validZipcode=false;

//2) read value from HTML

var firstname = document.getElementById("FirstName").value;
var lastname = document.getElementById("LastName").value;
var userEmail = document.getElementById("Email").value;
var phone = document.getElementById("Phone").value;
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
var address = document.getElementById("Address").value;
var city = document.getElementById("City").value;
var state = document.getElementById("State").value;
var country = document.getElementById("Country").value;
var zipcode = document.getElementById("Zipcode").value;


//3) Do validation


if (firstname==="null" || firstname==="" || firstname.length > 20 || !firstname.match(/^[A-Za-z]+$/)) {
   errorMessages = "Invalid Entry First Name is required" +
   "/ Maximum 20 characters";
}
else {
validFirstname = true;
return (validFirstname);
}

//4) Send error message to HTML
document.getElementById("errorMessagesFN").innerHTML = errorMessages;

if (lastname==="null" || lastname==="" || lastname.length > 50 || !lastname.match(/^[A-Za-z]+$/)){
    errorMessages = "Invalid Entry / Last Name is required" +
      "/ Maximum 50 characters";
}
else {
validLastname = true;
return (validLastname);
}

//4) Send error message to HTML
document.getElementById("errorMessagesLN").innerHTML = errorMessages;

var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");

if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length){
    errorMessages = "Invalid Email";
}
else {
validEmail = true;
return (validEmail);
}

//4) Send error message to HTML
document.getElementById("errorMessagesEM").innerHTML = errorMessages;

if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
  errorMessages = "Invalid Entry / Phone is required " +
   "/ Maximum 15 digits";
}
else {
validPhone = true;
return (validPhone);
}

//4) Send error message to HTML
document.getElementById("errorMessagesPH").innerHTML = errorMessages;

if (username==="null" || username==="" || username.length > 12) {
  errorMessages = "Invalid Entry /" +
    "Username is required / Maximum 12 characters";
}
else {
validUsername = true;
return (validUsername);
}

//4) Send error message to HTML
document.getElementById("errorMessagesUN").innerHTML = errorMessages;

if (password==="null" || password.length< 7){
  errorMessages = "Invalid Entry /" +
    "Password is required / Maximum 7 characters";
}
else {
validPassword = true;
return (validPassword);
}

//4) Send error message to HTML
document.getElementById("errorMessagesPW").innerHTML = errorMessages;

if (address==="null" || address==="") {
  errorMessages = "Invalid Entry /" +
    "Address is required";
}
else {
validAddress = true;
return (validAddress);
}

//4) Send error message to HTML
document.getElementById("errorMessagesAD").innerHTML = errorMessages;

if (city==="null" || city==="") {
  errorMessages = "Invalid Entry /" +
    "City is required";
}
else {
validCity = true;
return (validCity);
}

//4) Send error message to HTML
document.getElementById("errorMessagesCT").innerHTML = errorMessages;

if (state==="null" || state==="") {
  errorMessages = "Invalid Entry /" +
    "State is required";
}
else {
validState = true;
return (validState);
}

//4) Send error message to HTML
document.getElementById("errorMessagesST").innerHTML = errorMessages;

if (country==="null" || country==="") {
  errorMessages = "Invalid Entry /" +
    "Country is required";
}
else {
validCountry = true;
return (validCountry);
}

//4) Send error message to HTML
document.getElementById("errorMessagesCY").innerHTML = errorMessages;

if (country === "USA" &&
    (zipcode ==="null" || zipcode==="" || zipcode.length > 5)) {
// validate Zipcode according to the rules
  errorMessages = "Invalid Entry / Zip is required for USA" +
      "/ Maximum 5 digits";
}
else {
validZipcode = true;
return (validZipcode);
}
//4) Send error message to HTML
document.getElementById("errorMessagesZC").innerHTML = errorMessages;

}
