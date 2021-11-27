function loginButton() {
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

function fetchUsers() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users?maxRecords=3&view=Grid%20view";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
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
