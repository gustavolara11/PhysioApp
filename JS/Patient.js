document.addEventListener("DOMContentLoaded", displayTable);

// Display Patients Table
async function displayTable() {
    const data = { operation: "read"};
    const response = await fetch("API/endpoint.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const jsonData = await response.json();
      
    var list = document.querySelector(".patients_list");
        list.innerHTML = "";
    for (i = 0; i < jsonData.length; i++) {
        list.innerHTML += `<tr>
                            <td>${jsonData[i].name}</td>
                            <td>${jsonData[i].birthday}</td>
                            <td>${jsonData[i].adress}</td>
                            <td>${jsonData[i].city}</td>
                            <td>${jsonData[i].phone}</td>
                            <td>
                                <button onclick="updateP(${jsonData[i].id}, '${jsonData[i].name}', '${jsonData[i].birthday}', '${jsonData[i].adress}', '${jsonData[i].city}', '${jsonData[i].phone}')">Update</button> / <button onclick='deleteP(${jsonData[i].id})'>Delete</button>
                            </td>
                            </tr>`;
  }
}
// Open new patient form
function openCadForm(){
    openForm();
    let formTittle = document.getElementById('form_tittle');
    formTittle.innerText = "Novo Paciente";
    let nBut = document.getElementById('createButton');
    let uBut = document.getElementById('updateButton');
    nBut.style.display = 'flex';
    uBut.style.display = 'none';
    // após clickar em update, e clickar em cadastrar, os dados permaneciam nos inputs
    document.getElementById("name").value = '';
    document.getElementById("birthday").value = '';
    document.getElementById("adress").value = '';
    document.getElementById("city").value = '';
    document.getElementById("phone").value = '';
}
async function create(){
     let newName = document.getElementById("name").value;
     let newBirthday = document.getElementById("birthday").value;
     let newAdress = document.getElementById("adress").value;
     let newCity = document.getElementById("city").value;
     let newPhone = document.getElementById("phone").value;
     const data = { operation: "create", id: id, name: newName, birthday: newBirthday, adress: newAdress, city: newCity, phone: newPhone };
     let response = await fetch("API/endpoint.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
     });
     location.reload();
}

// Search Patient Form
document.getElementById("btnSearch").addEventListener("click", function(){
    const name = document.getElementById("search").value;
    searchPatient(name);
});
document.getElementById("search").addEventListener("keydown", function (event){
    if(event.key === "Enter"){
         event.preventDefault();
        const name = document.getElementById("search").value;
        searchPatient(name);
    }
})

async function searchPatient(name){
    const data = { operation: "search", name: name}; 
    console.log(data);
    const response = await fetch("API/endpoint.php",{
        method: "POST",
        headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    
    var list = document.querySelector(".patients_list");
        list.innerHTML = "";
    for (i = 0; i < jsonData.length; i++) {
        list.innerHTML += `<tr>
                            <td>${jsonData[i].name}</td>
                            <td>${jsonData[i].birthday}</td>
                            <td>${jsonData[i].adress}</td>
                            <td>${jsonData[i].city}</td>
                            <td>${jsonData[i].phone}</td>
                            <td><button onclick='updateP(${jsonData[i].id, jsonData[i].name,  jsonData[i].birthday, jsonData[i].adress, jsonData[i].city, jsonData[i].phone})'>Update</button> / <button onclick='deleteP(${jsonData[i].id})'>Delete</button></td>
                            </tr>`;
  }
}
// Update Patient
function updateP(id, name, birthday, adress, city, phone) {
    openForm();
    let nBut = document.getElementById('createButton');
    let uBut = document.getElementById('updateButton');
    nBut.style.display = 'none';
    uBut.style.display = 'flex';
    document.getElementById("id").value = id;
    document.getElementById("name").value = name;
    document.getElementById("birthday").value = birthday;
    document.getElementById("adress").value = adress;
    document.getElementById("city").value = city;
    document.getElementById("phone").value = phone;
}
async function update(){
        var id = document.getElementById("id").value;
        var newName = document.getElementById("name").value;
        var newBirthday = document.getElementById("birthday").value;
        var newAdress = document.getElementById("adress").value;
        var newCity = document.getElementById("city").value;
        var newPhone = document.getElementById("phone").value;
        
        const data = { operation: "update", id: id, name: newName, birthday: newBirthday, adress: newAdress, city: newCity, phone: newPhone };
        const response = await fetch("api/endpoint.php",{
        method: "POST",
        headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
               
    });
    location.reload();
}
// Delete Patient
async function deleteP(id){
    const data = { operation: "delete", id: id };
    const response = await fetch("api/endpoint.php",{
        method: "POST",
        headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    location.reload();
}
//open Update form
function openForm(){
let form = document.getElementById('form_container');
form.style.display = "flex";
};
//close Update form
function closeForm(){
let form = document.getElementById('form_container');
form.style.display = "none";
};



