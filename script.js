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

function fetchInventory() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Inventory?maxRecords=9&view=Grid%20view";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            localStorage.setItem("inventoryData",xhr.responseText);
            fetchUsers();
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

function signOut() {
    localStorage.clear();
}

function addProfileData() {
    var currentUser = localStorage.getItem("currentUser");
    var userData = localStorage.getItem("currentUserData");
    var isAdmin = false;
    var inputArray = JSON.parse(userData).records;
    for (const element of inputArray) {
        if(element.fields.userid == currentUser) {
            isAdmin = element.fields.isadmin;
            document.body.innerHTML = document.body.innerHTML.replace(/XFN/g, String(element.fields.firstname));
            document.body.innerHTML = document.body.innerHTML.replace(/XLN/g, String(element.fields.lastname));
            document.body.innerHTML = document.body.innerHTML.replace(/XAD/g, String(element.fields.address));
            document.body.innerHTML = document.body.innerHTML.replace(/XPN/g, String(element.fields.phone));
            document.body.innerHTML = document.body.innerHTML.replace(/XEM/g, String(element.fields.email));
            document.body.innerHTML = document.body.innerHTML.replace(/XPT/g, String(element.fields.points));
            if (!isAdmin) {
                var adminData = document.getElementById("adminInfo");
                adminData.style.display = "none";
            } else {
                var inventoryData = localStorage.getItem("inventoryData");
                var inputArrayData = JSON.parse(inventoryData).records;
                document.body.innerHTML = document.body.innerHTML.replace(/XBVG1/g, String(inputArrayData[0].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XBVG2/g, String(inputArrayData[1].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XBVG3/g, String(inputArrayData[2].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XDNT1/g, String(inputArrayData[3].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XDNT2/g, String(inputArrayData[4].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XDNT3/g, String(inputArrayData[5].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XBGL1/g, String(inputArrayData[6].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XBGL2/g, String(inputArrayData[7].fields.quantity));
                document.body.innerHTML = document.body.innerHTML.replace(/XBGL3/g, String(inputArrayData[8].fields.quantity));
            }

        }
    }
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
