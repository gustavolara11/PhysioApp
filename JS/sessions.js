function sessions(id_patient){
    let showId = id_patient;
openBdata();
patientData(showId);
sessionData(showId);
};
// Display Patient Data
async function patientData(id){
    const data = { operation: "search_byId", id: id};
    const response = await fetch("API/endpoint.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    
    let showName = document.getElementById('nameData');
    showName.innerText = jsonData[0].name;
    let showBirthday = document.getElementById('birthdayData');
    showBirthday.innerText = jsonData[0].birthday;
    let showAdress = document.getElementById('adressData');
    showAdress.innerText = jsonData[0].adress;
    let showCity = document.getElementById('cityData');
    showCity.innerText = jsonData[0].city;
    let showPhone = document.getElementById('phoneData');
    showPhone.innerText = jsonData[0].phone;
    let showButtons = document.getElementById('upDeleteButtons');
    showButtons.innerHTML = `<button onclick="updateP('${jsonData[0].id}', '${jsonData[0].name}', '${jsonData[0].birthday}', '${jsonData[0].adress}', '${jsonData[0].city}', '${jsonData[0].phone}')">Atualizar</button><button onclick="deleteP('${jsonData[0].id}')">Deletar</button>`
}
//Display Sessions Data
async function sessionData(id){
    const data = { operation: "read", id: id};
    const response = await fetch("API/sessions.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    
    var list = document.querySelector('.sessions_list');
    list.innerHTML = "";
    for (i = 0; i < jsonData.length; i++) {
        list.innerHTML += `<tr>
                            <td>${jsonData[i].date}</td>                    
                            <td>${jsonData[i].hour}</td>                    
                           </tr>`;
        
    }

}
//close Patient sessions data
function closeBdata(){
    let section = document.querySelector('.patient_data');
    section.style.display = "none";
}
function openBdata(){
    let section = document.querySelector('.patient_data');
    section.style.display = "flex";
}
// new Appointment
async function newAppoint(event){
    event.preventDefault();
    let date = document.querySelector("#newDate").value;
    let hour = document.querySelector("#newHour").value;

    const data = { operation: "create", id: id, date: date, hour: hour}; // falta implementar o id pra mandar pra api
    const response = await fetch("API/sessions.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    
}