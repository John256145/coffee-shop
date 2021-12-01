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
        if (getQuantityOfItem("coffee1") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("coffee1");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Hot Coffee added to cart.");
        } else {
            alert("Sorry, we are out of Hot Coffee.");
        }

    }, false);

    document.getElementById("coffee2cart").addEventListener("click", function() {
        if (getQuantityOfItem("coffee2") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("coffee2");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Iced Tea added to cart.");
        } else {
            alert("Sorry, we are out of Iced Tea.");
        }

    }, false);

    document.getElementById("coffee3cart").addEventListener("click", function() {
        if (getQuantityOfItem("coffee3") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("coffee3");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Iced Coffee added to cart.");
        } else {
            alert("Sorry, we are out of Iced Coffee.");
        }

    }, false);

    document.getElementById("donut1cart").addEventListener("click", function() {
        if (getQuantityOfItem("donut1") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("donut1");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Vanilla Donut added to cart.");
        } else {
            alert("Sorry, we are out of Vanilla Donuts.");
        }

    }, false);

    document.getElementById("donut2cart").addEventListener("click", function() {
        if (getQuantityOfItem("donut2") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("donut2");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Strawberry Donut added to cart.");
        } else {
            alert("Sorry, we are out of Strawberry Donuts");
        }

    }, false);

    document.getElementById("donut3cart").addEventListener("click", function() {
        if (getQuantityOfItem("donut3") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("donut3");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Chocolate Donut added to cart.");
        } else {
            alert("Sorry, we are out of Chocolate Donuts");
        }

    }, false);

    document.getElementById("bagel1cart").addEventListener("click", function() {
        if (getQuantityOfItem("bagel1") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("bagel1");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Bagel added to cart.");
        } else {
            alert("Sorry, we are out of Bagels");
        }

    }, false);

    document.getElementById("bagel2cart").addEventListener("click", function() {
        if (getQuantityOfItem("bagel2") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("bagel2");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("English muffin added to cart.");
        } else {
            alert("Sorry, we are out of English muffins.");
        }

    }, false);

    document.getElementById("bagel3cart").addEventListener("click", function() {
        if (getQuantityOfItem("bagel3") > 0) {
            arrJson = localStorage.getItem("cart");
            arr = JSON.parse(arrJson);
            arr.push("bagel3");
            localStorage.setItem("cart", JSON.stringify(arr))
            alert("Croissant added to cart.");
        } else {
            alert("Sorry, we are out of Croissants");
        }

    }, false);

    document.getElementById("coffee1star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "coffee1");
        window.location.replace("review.html");
    }, false);

    document.getElementById("coffee2star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "coffee2");
        window.location.replace("review.html");
    }, false);

    document.getElementById("coffee3star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "coffee3");
        window.location.replace("review.html");
    }, false);

    document.getElementById("donut1star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "donut1");
        window.location.replace("review.html");
    }, false);

    document.getElementById("donut2star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "donut2");
        window.location.replace("review.html");
    }, false);

    document.getElementById("donut3star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "donut3");
        window.location.replace("review.html");
    }, false);

    document.getElementById("bagel1star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "bagel1");
        window.location.replace("review.html");
    }, false);

    document.getElementById("bagel2star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "bagel2");
        window.location.replace("review.html");
    }, false);

    document.getElementById("bagel3star").addEventListener("click", function() {
        localStorage.setItem("reviewSelection", "bagel3");
        window.location.replace("review.html");
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

function getUserPoints() {
    var arr = JSON.parse(localStorage.getItem("currentUserData")).records;
    var userID = localStorage.getItem("currentUser");
    for (const element of arr) {
        if (element.fields.userid == userID) {
            return element.fields.points;
        }
    }
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
    localStorage.setItem("currentPointCost", totalPoints);
    //if user has enough points, make points text green
    if(totalPoints <= getUserPoints() && totalPoints > 0) {
        totalPointsHTML.style.color = "#00ff00";
    }

    var totalCostHTML = document.getElementById('totalCost');
    totalCostHTML.innerHTML += formatter.format(totalPrice);
    localStorage.setItem("currentTotalCost", totalPrice);

    var userPointsHTML = document.getElementById('userPoints');
    userPointsHTML.innerHTML += getUserPoints();


}

function itemNameToInternalId() {
    var dct = {
            "coffee1" : "recoqIPWGwb6nQvuc",
            "coffee2" : "recyvLZO2NaEjFYXM",
            "coffee3" : "rec4O7jv0OWI03B8r",
            "donut1" : "recSIhpldB6zjai9W",
            "donut2" : "recXE48LUVJe73U0Y",
            "donut3" : "recx2cQFrvlI71W1V",
            "bagel1" : "recGIQwAIEs0dNYmK",
            "bagel2" : "recVWrQmU4M7PBpNu",
            "bagel3" : "recV957czTp5DXzfX"
    };
    return dct;
}

function orderPlaced() {
    var itemNameToId = itemNameToInternalId();
    var data = { "records" : [] }; //will be sent to api
    var cartArrayJson = localStorage.getItem("cart");
    var cartArray = JSON.parse(cartArrayJson);
    var cartDct = cartToDct(cartArray);
    var purchases = JSON.parse(localStorage.getItem("purchases"));
    var waitTime = 0;
    if(cartArray.length == 0) {
        alert("Your cart is empty.");
        return;
    }

    var earnedPoints = Math.floor(localStorage.getItem("currentTotalCost"));
    console.log("User will earn " + String(earnedPoints) + " points on this purchase");
    localStorage.setItem("earnedPoints", earnedPoints);
    var usingPoints = document.getElementById("willUsePoints").checked;
    if(usingPoints) {
        var pointCost = localStorage.getItem("currentPointCost");
        if (pointCost <= getUserPoints()) {
            console.log("user will use their points to purchase");
            setUserPoints( (getUserPoints() - pointCost) + earnedPoints )
        } else {
            alert("You do not have enough points to make this purchase.");
            return;
        }
    } else {
        setUserPoints(getUserPoints() + earnedPoints);
    }

    var arr = Object.entries(cartDct);
    for(var i in arr) {
        var item = arr[i][0];
        var count = arr[i][1];
        var newRecord = {
            "id" : itemNameToId[item],
            "fields" : {
                "quantity" : getQuantityOfItem(item) - count
            }
        };
        data["records"].push(newRecord);
        purchases.push(item);
        waitTime += itemToTime(item) * count;
    }
    console.log(data);
    localStorage.setItem("purchases", JSON.stringify(purchases));
    localStorage.setItem("waitTime", waitTime);
    updateInventory(JSON.stringify(data));

}

function itemToTime(item) {
    var inventoryData = localStorage.getItem("inventoryData");
    var inputArrayData = JSON.parse(inventoryData).records;
    //inputArrayData[0].fields.quantity
    for(const element of inputArrayData) {
        if(element.fields.item == item) {
            return element.fields.waittime;
        }
    }
}

function getQuantityOfItem(itemName) {
    var inventoryData = localStorage.getItem("inventoryData");
    var inputArrayData = JSON.parse(inventoryData).records;
    //inputArrayData[0].fields.quantity
    for(const element of inputArrayData) {
        if(element.fields.item == itemName) {
            return element.fields.quantity;
        }
    }
}

function setUserPoints(points) {
    //points will rewrite current user pointSelection
    //first get user's internal id

    var currentUser = localStorage.getItem("currentUser");
    var userData = localStorage.getItem("currentUserData");
    var internalUserID = "";
    var inputArray = JSON.parse(userData).records;
    for (const element of inputArray) {
        if(element.fields.userid == currentUser) {
            internalUserID = element.id;
            break;
        }
    }
    var data = JSON.stringify({"fields" : {"points" : points}});

    //api work
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users/" + internalUserID;

    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            refreshUserData();
        }};


    xhr.send(data);
}

function refreshUserData() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users?maxRecords=100&view=Grid%20view";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            console.log("user data refreshed");
            localStorage.setItem("currentUserData", xhr.responseText);
    }};

    xhr.send();
}

function cartToDct(cartArray) {
    dct = {};
    for (var i in cartArray) {
        item = cartArray[i];
        if (item in dct) {
            dct[item] += 1;
        } else {
            dct[item] = 1;
        }
    }
    return dct;
}

function updateInventory(data) {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Inventory";
    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // console.log(xhr.status);
            console.log(xhr.responseText);
            fetchInventoryCartUpdate();
        }};
    xhr.send(data);
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
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users?maxRecords=100&view=Grid%20view";
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
    localStorage.setItem("purchases", JSON.stringify([]));
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

function fetchInventoryCartUpdate() {
    localStorage.setItem("cart", JSON.stringify([]));

    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Inventory?maxRecords=9&view=Grid%20view";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            localStorage.setItem("inventoryData",xhr.responseText);
            var tip = Number(document.getElementById("inputTip").value);
            var total = 0;
            if(document.getElementById("willUsePoints").checked) {
                total = tip; //user is using points, so will be charged just for tipping if they do
            } else {
                total = Number(localStorage.getItem("currentTotalCost")) + tip; //user is not using points.
            }
            var extraChargeText = "";
            if(document.getElementById("deliveryOption").checked) {
                total += 3; //extra charge for delivery
                extraChargeText = " You have been charged an extra $3 for delivery.";
            }

            alert("Your order has been placed! Total: $" + String(total) + ". You earned " + String(localStorage.getItem("earnedPoints")) + " points. Wait time is " + String(localStorage.getItem("waitTime")) + " minutes." + extraChargeText);
            localStorage.setItem("currentPointCost", 0);
            localStorage.setItem("currentTotalCost", 0);
            localStorage.setItem("earnedPoints", 0);
            recordSale(total);

   }};

   xhr.send();
}

//runs after fetchInventoryCartUpdate
function recordSale(total) {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Sales";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          // window.location.replace("menu.html");
          fetchSales(); //will get sales data and then send user to menu, just as in last step of login
       }};

    var data = `{
      "fields": {
        "userid": ` + Number(localStorage.getItem("currentUser")) + `,
        "price": ` + total + `
      }
    }`;

    xhr.send(data);
}

//called after fetchReviews(), last step before entering the menu at login
function fetchSales() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Sales?maxRecords=100&view=Grid%20view";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          localStorage.setItem("sales", xhr.responseText);
          window.location.replace("menu.html");
       }};

    xhr.send();

}

function fetchInventoryUpdate() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Inventory?maxRecords=9&view=Grid%20view";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            localStorage.setItem("inventoryData",xhr.responseText);
            location.reload();
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
            if (element.fields.isblocked) {
                alert("You are blocked from using the application.");
                return;
            } else {
                login = true;
                userId = element.fields.userid;
                localStorage.setItem("currentUserName", element.fields.firstname);
                break;
            }

        }
    }
    if(login) {
        console.log("match found!");
        localStorage.setItem("currentUser",userId);
        localStorage.setItem("currentUserData", response);
        console.log(String(userId) + " is the userID");
        fetchReviews();

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

function loadReviewPage() {
    var reviewDiv = document.getElementById("reviewList");
    var list = document.createElement("ul");
    var itemSelection = localStorage.getItem("reviewSelection");
    document.getElementById("itemImage").src = itemSelection+".png"
    var reviewArray = JSON.parse(localStorage.getItem("reviews")).records;
    for (const element of reviewArray) {
        if(element.fields.item == itemSelection) { //only consider reviews of the current selection
            var review = element.fields.review;
            var name = element.fields.firstname;
            var anchor = document.createElement("a");
            anchor.innerText = name + `: "`  + review + `"`;
            var elem = document.createElement("li");
            elem.appendChild(anchor);
            list.appendChild(elem);
        }

    }
    reviewDiv.appendChild(list);

    //allow user to make a review if they bought the item
    var purchases = JSON.parse(localStorage.getItem("purchases"));
    if(purchases.includes(itemSelection)) {
        var reviewInput = document.getElementById("reviewInput");
        reviewInput.style.display = "block";
    }
}

function fetchReviews() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Reviews?maxRecords=100&view=Grid%20view";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            localStorage.setItem("reviews", xhr.responseText);
            // window.location.replace("menu.html");
            fetchSales();
    }};

    xhr.send();
}

function addReview() {
    if(!document.getElementById("reviewText").value) { //if no review text
        alert("The text box is empty.");
        return;
    }

    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Reviews";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      alert("Your review has been sent.");
      fetchReviews(); //gets the latest reviews AND sends user to menu page, same as when logging in.
    }};

    var data = `{
        "fields": {
            "userid": ` + localStorage.getItem("currentUser") + `,
            "firstname": "` + localStorage.getItem("currentUserName") + `",
            "review": "` + document.getElementById("reviewText").value + `",
            "item": "` + localStorage.getItem("reviewSelection") + `"
        }
    }`;
    xhr.send(data);
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
            document.body.innerHTML = document.body.innerHTML.replace(/XPW/g, String(element.fields.password));
            document.body.innerHTML = document.body.innerHTML.replace(/XCC/g, String(element.fields.creditcard));
            document.body.innerHTML = document.body.innerHTML.replace(/XPT/g, String(element.fields.points));
            if (!isAdmin) {
                var adminData = document.getElementById("adminInfo");
                adminData.style.display = "none";
                document.getElementById("pointsInput").readOnly = true;
                document.getElementById("saveButtonInventory").style.display = "none"
                document.getElementById("createUserButton").style.display = "none"
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

                var salesData = localStorage.getItem("sales");
                var salesDataArray = JSON.parse(salesData).records;
                totalPrice = 0;
                for (const element of salesDataArray) {
                     totalPrice += element.fields.price;
                }
                totalPrice = Math.round(totalPrice * 100) / 100;
                document.getElementById("totalSales").innerText += " $" + totalPrice;
                document.getElementById("totalPurchases").innerText += " " + salesDataArray.length;
                document.getElementById("totalUsers").innerText += " " + inputArray.length;

                var reviewArray = JSON.parse(localStorage.getItem("reviews")).records;
                document.getElementById("totalReviews").innerText += " " + reviewArray.length;
            }

        }
    }

}

function togglePW() {
    if(document.getElementById("passwordInput").type == "password") {
        document.getElementById("passwordInput").type = "text";
    } else {
        document.getElementById("passwordInput").type = "password";
    }
}

function toggleCC() {
    if(document.getElementById("ccInput").type == "password") {
        document.getElementById("ccInput").type = "text";
    } else {
        document.getElementById("ccInput").type = "password";
    }
}

function editInventory() {
    var coffee1 = document.getElementById("bvg1input").value;
    var coffee2 = document.getElementById("bvg2input").value;
    var coffee3 = document.getElementById("bvg3input").value;
    var donut1 = document.getElementById("dnt1input").value;
    var donut2 = document.getElementById("dnt2input").value;
    var donut3 = document.getElementById("dnt3input").value;
    var bagel1 = document.getElementById("bgl1input").value;
    var bagel2 = document.getElementById("bgl2input").value;
    var bagel3 = document.getElementById("bgl3input").value;

    var itemNameToId = itemNameToInternalId();

    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Inventory";

    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          alert("Inventory Updated");
          fetchInventoryUpdate();
       }};

    var data = `{
      "records": [
        {
          "id": "` + itemNameToId["coffee1"] + `",
          "fields": {
            "item": "coffee1",
            "quantity": ` + Number(coffee1) + `
          }
        },
        {
           "id": "` + itemNameToId["coffee2"] + `",
          "fields": {
            "item": "coffee2",
            "quantity": ` + Number(coffee2) + `
          }
        },
        {
          "id": "` + itemNameToId["coffee3"] + `",
          "fields": {
            "item": "coffee3",
            "quantity": ` + Number(coffee3) + `
          }
        },
        {
          "id": "` + itemNameToId["donut1"] + `",
          "fields": {
            "item": "donut1",
            "quantity": ` + Number(donut1) + `
          }
        },
        {
          "id": "` + itemNameToId["donut2"] + `",
          "fields": {
            "item": "donut2",
            "quantity": ` + Number(donut2) + `
          }
        },
        {
          "id": "` + itemNameToId["donut3"] + `",
          "fields": {
            "item": "donut3",
            "quantity": ` + Number(donut3) + `
          }
        },
        {
          "id": "` + itemNameToId["bagel1"] + `",
          "fields": {
            "item": "bagel1",
            "quantity": ` + Number(bagel1) + `
          }
        },
        {
          "id": "` + itemNameToId["bagel2"] + `",
          "fields": {
            "item": "bagel2",
            "quantity": ` + Number(bagel2) + `
          }
        },
        {
          "id": "` + itemNameToId["bagel3"] + `",
          "fields": {
            "item": "bagel3",
            "quantity": ` + Number(bagel3) + `
          }
        }
      ]
    }`;

    xhr.send(data);


}

function editUser() {
    var fname = document.getElementById("fnameInput").value;
    var lname = document.getElementById("lnameInput").value;
    var address = document.getElementById("addressInput").value;
    var phone = document.getElementById("phoneInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var cc = document.getElementById("ccInput").value;
    var points = Number(document.getElementById("pointsInput").value);

    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users/" + getInternalUserId();

    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert("Saved your changes.");
            refreshUsers();
        }};

    var data = `{
        "fields": {
            "firstname": "` + fname + `",
            "lastname": "` + lname + `",
            "address": "` + address + `",
            "phone": "` + phone + `",
            "email": "` + email + `",
            "password": "` + password + `",
            "creditcard": "` + cc + `",
            "points": ` + points + `
        }
    }`;

    xhr.send(data);
}

function getInternalUserId() {
    var arr = JSON.parse(localStorage.getItem("currentUserData")).records;
    var userID = localStorage.getItem("currentUser");
    for (const element of arr) {
        if (element.fields.userid == userID) {
            return element.id;
        }
    }
}

function refreshUsers() {
    var url = "https://api.airtable.com/v0/appO1nRBNkCmnuuCB/Users?maxRecords=100&view=Grid%20view";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "Bearer " + airtableApiKey);

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          localStorage.setItem("currentUserData", xhr.responseText);
          location.reload();
       }};

    xhr.send();
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
      if(localStorage.length == 0) {
          //no user exists
          window.location.replace("index.html");
      }
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

function signUpPage() {
    if(localStorage.length == 0) {
        //user is not an admin
        document.getElementById("userCreationType").style.display = "none";
    }
}

function backPressed() {
    if(localStorage.length == 0) {
        //no user
        window.location.replace("index.html");
    } else {
        window.location.replace("profile.html");
    }
}
