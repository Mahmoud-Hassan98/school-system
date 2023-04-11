let array = JSON.parse(localStorage.getItem("info")) || [];
// localStorage.clear();

render();

let form = document.getElementById("student");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fullName = event.target.fullName.value;
  let birth = event.target.dateOfBirth.value;
  let gender = event.target.name1.value;
  let grade = event.target.Major.value;
  let phone = event.target.phoneNumber.value;
  let userimage = event.target.userimage.value;

  let newStudent = new Student(
    fullName,
    birth,
    gender,
    phone,
    grade,
    userimage
  );
  array.push(newStudent);
  let JSONarray = JSON.stringify(array);
  localStorage.setItem("info", JSONarray);

  form.reset();
  render();
});

function Student(name, birth, gender, phone, grade, userimage) {
  this.fullName = name;
  this.birth= birth;
  this.gender = gender;
  this.phone = phone;
  this.grade = grade;
  this.userimage = userimage;
}

function render() {

  console.log(previousCards);
  for (let i = 0; i < array.length; i++) {
    let cardContainer = document.getElementById("studentInfo");
    let card = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = `${array[i].userimage}`;
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.textContent = `Name: ${array[i].fullName}`;
    let li2 = document.createElement("li");
    li2.textContent = `Gender: ${array[i].gender}`;
    let li3 = document.createElement("li");
    li3.textContent = `Number: ${array[i].phone}`;
    let li4 = document.createElement("li");
    li4.textContent = `Major: ${array[i].grade}`;
    let li5 = document.createElement("li");
    li5.textContent = `date of birth: ${array[i]. birth}`;
    
    card.classList.add("singleCard");
    cardContainer.appendChild(card);
    card.appendChild(img1);
    card.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    cardContainer.style.display = "flex";
    cardContainer.style.marginLeft = "5rem";
    cardContainer.style.width = "50rem";
    card.style.backgroundColor = "#48dd85";
    card.style.borderRadius = "20px";
    card.style.padding = "5px";
    card.style.margin = "10px";

    
    img1.style.marginBottom = "20px";
    img1.style.marginleft = "300px";

    img1.style.marginTop = "10px";
    img1.style.borderRadius="100px"
    img1.style.height="150px"
    img1.style.width="250px"
  }
}
localStorage.clear;
