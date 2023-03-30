var selectedRow = null

Parse.initialize( 
    "SR88mOTb1V4tEj7QZn9yzLDJwjOYyUKtu0hKrHnq",
    "JPSSpkDvxjEGK0BwVtxgZ52Zg8wjqAgPQ1724Le6");
  Parse.serverURL = "https://parseapi.back4app.com/"; 

let user = new Parse.User();
let queryUser = new Parse.Query(User);

function onFormSubmit() {
    createParseUser();
    alert(user.get("objectId"));
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData, user.get("objectId"));
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    
    return formData;
}

function insertNewRecord(data, id) {
    queryUser.data.get("objectId");
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    
    
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = id;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
       // id = document.getElementById("employeeList").getAttribute("id") deleteRow(row.rowIndex);
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

async function createParseUser() {
    alert("Criando usuário");

    // Creates a new Parse "User" object, which is created by default in your Parse app
    
    
    // Set the input values to the new "User" object
    user.set("username", document.getElementById("fullName").value);
    alert(user.get("username"));
    user.set("email", document.getElementById("email").value);
    alert(user.get("email"));
    user.set("password", document.getElementById("salary").value);
    alert(user.get("password"));
    alert("Dados coletados");
    try { 
      // Call the save method, which returns the saved object if successful
      user = await user.save();
      if (user !== null) {
        // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
        alert(
          `New object created with success! ObjectId: ${
            user.id
          }, ${user.get("username")}`
        );
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  