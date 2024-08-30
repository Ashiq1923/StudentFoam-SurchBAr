var arr = [];
var model = {};

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var cnic = document.getElementById("cnic");
var phone = document.getElementById("phone");
var tableBody = document.getElementById("tableBody");
var searchInp = document.getElementById("searchInp");
var searchKey = document.getElementById("searchKey");
var surchbox= document.getElementById("table-box");
function searchTable() {
var searchVal = searchInp.value;
var searchEntety = searchKey.value;

// Remove previous highlighted row
renderTable();

for (var i = 0; i < arr.length; i++) {
var x = arr[i];
if (x[searchEntety] == searchVal) {
    // Insert the matching row at the top
    surchbox.innerHTML = `
        <tr class="highlight">
        <td>${x.firstName}</td>
        <td>${x.lastName}</td>
        <td>${x.age}</td>
        <td>${x.cnic}</td>
        <td>${x.phone}</td>
        </tr>
    ` + surchbox.innerHTML;
    break; // Stop after finding the first match
}
}
}

function renderTable() {
    tableBody.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var x = arr[i];
        tableBody.innerHTML += `
        <tr>
        <td>${x.firstName}</td>
        <td>${x.lastName}</td>
        <td>${x.age}</td>
        <td>${x.cnic}</td>
        <td>${x.phone}</td>
        </tr>
        `;
    }
}

function btnClick() {
    model.firstName = firstName.value;
    model.lastName = lastName.value;
    model.age = age.value;
    model.cnic = cnic.value;
    model.phone = phone.value;

    // Validate inputs
    if (model.firstName && model.lastName && model.age.length == 2 && model.cnic.length == 13 && model.phone.length == 11) {
        arr.push({ ...model });

        firstName.value = "";
        lastName.value = "";
        age.value = "";
        cnic.value = "";
        phone.value = "";

        console.log(arr);
        renderTable();
    } else {
        alert("Please fill in all required fields correctly.");
    }
}