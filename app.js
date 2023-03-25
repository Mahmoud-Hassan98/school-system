
const form = document.getElementById("student");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let Full_Name = event.target.fullName.value
    let dateOf_Birth = event.target.dateOfBirth.value
    let Gender = event.target.name1.value
    let phone_Number = event.target.phoneNumber.value
    let grade = event.target.grade.value
    console.log(Full_Name,dateOf_Birth,Gender,phone_Number,grade);
     render(Full_Name,dateOf_Birth,Gender,phone_Number,grade);
    form.reset();
})

function render(Full_Name,dateOf_Birth,Gender,phone_Number,grade)
{
    let table = document.getElementById("table")
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td1.textContent = ` ${Full_Name}`;
    td2.textContent= ` ${dateOf_Birth} `;
    td3.textContent= ` ${Gender}`;
    td4.textContent= ` ${phone_Number}`;
    td5.textContent= ` ${grade}`;


}
