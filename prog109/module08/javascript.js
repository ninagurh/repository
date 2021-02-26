var errorMessages;

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
   errorMessages += "<p>Invalid Entry First Name is required" +
   "/ Maximum 20 characters</p>";
}
else {
validFirstname = true;
return (validFirstname);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (lastname==="null" || lastname==="" || lastname.length > 50 || !lastname.match(/^[A-Za-z]+$/)){
    errorMessages += "<p>Invalid Entry / Last Name is required" +
      "/ Maximum 50 characters</p>";
}
else {
validLastname = true;
return (validLastname);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");

if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length){
    errorMessages = "<p>Invalid Email</p>";
}
else {
validEmail = true;
return (validEmail);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
  errorMessages = "<p>Invalid Entry / Phone is required " +
   "/ Maximum 15 digits</p>";
}
else {
validPhone = true;
return (validPhone);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (username==="null" || username==="" || username.length > 12) {
  errorMessages += "<p>Invalid Entry /" +
    "Username is required / Maximum 12 characters</p>";
}
else {
validUsername = true;
return (validUsername);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (password==="null" || password.length< 7){
  errorMessages += "<p>Invalid Entry /" +
    "Password is required / Maximum 7 characters</p>";
}
else {
validPassword = true;
return (validPassword);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (address==="null" || address==="") {
  errorMessages += "<p>Invalid Entry /" +
    "Address is required</p>";
}
else {
validAddress = true;
return (validAddress);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (city==="null" || city==="") {
  errorMessages += "<p>Invalid Entry /" +
    "City is required</p>";
}
else {
validCity = true;
return (validCity);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (state==="null" || state==="") {
  errorMessages += "<p>Invalid Entry /" +
    "State is required</p>";
}
else {
validState = true;
return (validState);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (country==="null" || country==="") {
  errorMessages += "<p>Invalid Entry /" +
    "Country is required</p>";
}
else {
validCountry = true;
return (validCountry);
}

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

if (country === "USA" &&
    (zipcode ==="null" || zipcode==="" || zipcode.length > 5)) {
// validate Zipcode according to the rules
  errorMessages += "<p>Invalid Entry / Zip is required for USA" +
      "/ Maximum 5 digits</p>";
}
else {
validZipcode = true;
return (validZipcode);
}
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

}
