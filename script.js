function loginButtonTemp() {
    // document.getElementById("loginButton").onclick = function () {
    //         // location.href = "www.google.com";
    //     };
    var username=document.getElementById("exampleInputEmail1").value;
    var password=document.getElementById("exampleInputPassword1").value;
    console.log("test");

    if(username=="admin"&& password=="user") {
        window.location.replace("menu.html");
        // document.getElementById("userNameWelcome").replace()
    } else {
        alert("Login failed.");
    }


}

function addUserfromForm() {
    var firstName=document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var email = document.getElementById("inputEmail3").value;
    var password = document.getElementById("inputPassword3").value;
    var cc = document.getElementById("creditCardNumber").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var address = document.getElementById("inputAddress").value;
    var isAdmin = document.getElementById("gridRadios2").checked;
    addUser(firstName, lastName, email, password, cc, phoneNumber, address, isAdmin);
    alert("Welcome, " + firstName + ". You may now log in.");
}

function fetchUsers() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users?maxRecords=3&view=Grid%20view";
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      checkIfExists(xhr.responseText, email, password);
   }};

xhr.send();
}

function checkIfExists(response, emailInput, passwordInput) {
    var login = false;
    var sample = `{"records":[{"id":"recH49qI6naHBHYZ2","fields":{"firstname":"John","lastname":"Doe","address":"1234 North Ave","phone":"7735550000","email":"idk@example.com","userid":9,"password":"password","points":0,"creditcard":"1738","isadmin":true},"createdTime":"2021-11-27T20:59:34.000Z"}]}`;
    var inputArray = JSON.parse(response).records;
    var userId = 0;
    for (const element of inputArray) {
        if(element.fields.email == emailInput && element.fields.password == passwordInput) {
            login = true;
            userId = element.fields.userid;
            break;
        }
    }
    if(login) {
        console.log("match found!");
        localStorage.setItem("currentUser",userId);
        localStorage.setItem("currentUserData", response);
        console.log(String(userId) + " is the userID");
        window.location.replace("menu.html");
    } else {
        console.log("match not found");
        alert("We cannot find an account with the information you provided. Please try again.");
    }
}

function getUser() {
    // window.onload = localStorage.getItem("currentUser");
    // window.onload = alert(localStorage.getItem("storageName"));
    return localStorage.getItem("currentUser");
}


function addUser(firstName, lastName, email, password, cc, phoneNumber, address, isAdmin) {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "records": [
    {
      "fields": {
          "firstname": "` + firstName + `",
          "lastname": "`+ lastName +`",
          "address": "` + address + `",
          "phone": "` + phoneNumber + `",
          "email": "` + email + `",
          "password": "` + password+ `",
          "points": 0,
          "creditcard": "` + cc + `",
          "isadmin": ` + isAdmin + `
      }
    }
  ]
}`;

xhr.send(data);
}

function addDummyUser() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "records": [
    {
      "fields": {
          "firstname": "Jane",
          "lastname": "Doe",
          "address": "4321 North Ave",
          "phone": "7735550000",
          "email": "idk@example.com",
          "password": "password",
          "points": 0,
          "creditcard": "1738",
          "isadmin": false
      }
    }
  ]
}`;

xhr.send(data);

}
