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
                            <td><button onclick='updateP(${jsonData[i].id})'>Update</button> / <button onclick='deleteP(${jsonData[i].id})'>Delete</button></td>
                            </tr>`;
  }
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
    const data = { operation: "search", id: name}; 
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
                            <td><button onclick='updateP(${jsonData[i].id})'>Update</button> / <button onclick='deleteP(${jsonData[i].id})'>Delete</button></td>
                            </tr>`;
  }
}




