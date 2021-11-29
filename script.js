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

// function replaceUserWelcome() {
//     document.body.innerHTML = document.body.innerHTML.replace(/User!/g, localStorage.getItem("currentUserName"));
// }

function addMenuData() {
    document.body.innerHTML = document.body.innerHTML.replace(/User!/g, localStorage.getItem("currentUserName"));

    var inventoryData = localStorage.getItem("inventoryData");
    var inputArrayData = JSON.parse(inventoryData).records;
    document.body.innerHTML = document.body.innerHTML.replace(/User!/g, localStorage.getItem("currentUserName"));

    document.body.innerHTML = document.body.innerHTML.replace(/C1PR/g, inputArrayData[0].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/C1PT/g, inputArrayData[0].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/C2PR/g, inputArrayData[1].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/C2PT/g, inputArrayData[1].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/C3PR/g, inputArrayData[2].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/C3PT/g, inputArrayData[2].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/D1PR/g, inputArrayData[3].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/D1PT/g, inputArrayData[3].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/D2PR/g, inputArrayData[4].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/D2PT/g, inputArrayData[4].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/D3PR/g, inputArrayData[5].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/D3PT/g, inputArrayData[5].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/B1PR/g, inputArrayData[6].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/B1PT/g, inputArrayData[6].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/B2PR/g, inputArrayData[7].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/B2PT/g, inputArrayData[7].fields.pointvalue);
    document.body.innerHTML = document.body.innerHTML.replace(/B3PR/g, inputArrayData[8].fields.price);
    document.body.innerHTML = document.body.innerHTML.replace(/B3PT/g, inputArrayData[8].fields.pointvalue);

    document.getElementById("coffee1cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("coffee1");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Hot Coffee added to cart.");
    }, false);

    document.getElementById("coffee2cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("coffee2");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Iced Tea added to cart.");
    }, false);

    document.getElementById("coffee3cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("coffee3");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Iced Coffee added to cart.");
    }, false);

    document.getElementById("donut1cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("donut1");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Vanilla Donut added to cart.");
    }, false);

    document.getElementById("donut2cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("donut2");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Strawberry Donut added to cart.");
    }, false);

    document.getElementById("donut3cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("donut3");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Chocolate Donut added to cart.");
    }, false);

    document.getElementById("bagel1cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("bagel1");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Bagel added to cart.");
    }, false);

    document.getElementById("bagel2cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("bagel2");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("English muffin added to cart.");
    }, false);

    document.getElementById("bagel3cart").addEventListener("click", function() {
        arrJson = localStorage.getItem("cart");
        arr = JSON.parse(arrJson);
        arr.push("bagel3");
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Croissant added to cart.");
    }, false);
}

function clearCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    location.reload();
}

function getPricesOfItems() {
    var dct = {};
    var inventoryData = localStorage.getItem("inventoryData");
    var inputArrayData = JSON.parse(inventoryData).records;
    for (const element of inputArrayData) {
        dct[element.fields.item] = element.fields.price
    }
    return dct;
}

function getPointValueOfItems() {
    var dct = {};
    var inventoryData = localStorage.getItem("inventoryData");
    var inputArrayData = JSON.parse(inventoryData).records;
    for (const element of inputArrayData) {
        dct[element.fields.item] = element.fields.pointvalue;
    }
    return dct;
}

function numberToCurrency(num) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(num);
}


function addCartData() {
    var totalPrice = 0;
    var totalPoints = 0;
    var pointsDct = getPointValueOfItems();
    var pricesDct = getPricesOfItems();
    var cartArrayJson = localStorage.getItem("cart");
    var cartArray = JSON.parse(cartArrayJson);
    var dct = {
        "coffee1" : "Hot Coffee",
        "coffee2" : "Iced Tea" ,
        "coffee3" : "Iced Coffee",
        "donut1" : "Vanilla Donut",
        "donut2" : "Strawberry Donut",
        "donut3" : "Chocolate Donut",
        "bagel1" : "Bagel",
        "bagel2" : "English Muffin",
        "bagel3" : "Croissant"
    };

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    var cartDiv = document.getElementById("cartList");
    var list = document.createElement("ul");
    if (cartArray.length == 0) {
        var anchor = document.createElement("a");
        anchor.innerText = "(empty)";
        var elem = document.createElement("li");
        elem.appendChild(anchor);
        list.appendChild(elem);
    }
    for (var i in cartArray) {
        var anchor = document.createElement("a");
        // anchor.href = "#";
        var currentItem = cartArray[i]; //internal name
        var currentPriceAsStr = pricesDct[currentItem];
        var currentPriceAsNum = Number(currentPriceAsStr.replace(/[^0-9.-]+/g,""));
        totalPrice += currentPriceAsNum;
        totalPoints += pointsDct[currentItem];
        anchor.innerText =dct[currentItem]; //converting from internal to normal name
        var elem = document.createElement("li");
        elem.appendChild(anchor);
        list.appendChild(elem);
    }
    cartDiv.appendChild(list);

    //adding totals to page
    var totalPointsHTML = document.getElementById('totalPoints');
    totalPointsHTML.innerHTML += String(totalPoints);

    var totalCostHTML = document.getElementById('totalCost');
    totalCostHTML.innerHTML += formatter.format(totalPrice);

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
    localStorage.setItem("cart", JSON.stringify([]));
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
            localStorage.setItem("currentUserName", element.fields.firstname);
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
