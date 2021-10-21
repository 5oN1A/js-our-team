//1. creazione array di oggetti contenete i dati del team
let team = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Chief Editor",
        "image": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    }
];

//2.creare una funzione che per ogni elemento dell'array prende ciascun valore delle proprietà degli oggetti;  

const cardContainer = document.querySelector(".team-container");

const formContainer = document.querySelector("form-container");
const newMemberBtn = document.getElementById("add-btn");
let newName = document.getElementById("name");
let newRole = document.getElementById("role");
let newImg = document.getElementById("image");

console.log(newName);





cardContainer.innerHTML = "";

for (let i = 0; i < team.length; i++) {

    let memberInfo = team[i]; //--> nome degli oggetti
    console.log(memberInfo);
    printCard(memberInfo);
    /*    for (let data in memberInfo) {
            console.log(`${data}: ${memberInfo[data]}`);
    
        }*/
}

function printCard(user) {

    cardContainer.innerHTML += `<div class="team-card">
            <div class="card-image">
              <img
                src="img/${user.image}"
                alt="${user.name}"
              />
            </div>
            <div class="card-text">
              <h3>${user.name}</h3>
              <p>${user.role}</p>
            </div>
          </div>`
}


newMemberBtn.addEventListener("click", function() {
   

    let newCard

    const cardName = newName.value;
    const cardRole = newRole.value;
    const cardImg = newImg.value;

    newCard = {
        "name": cardName,
        "role": cardRole,
        "image": cardImg
    }
   
    console.log(newCard);
   team.push(newCard);
   console.log(team);
   printCard(newCard);


})

