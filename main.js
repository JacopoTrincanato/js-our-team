//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
//(trovate l’array del team all’interno della cartella in allegato)

const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

  //recupero l'elemento con id row
  let rowEl = document.getElementById('row');

//ciclo l'array
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(member);
    
    //desctructuring
    const {name, role, email, img} = member;

    //creo il markup
    const markup = `
    <div class="col-lg-4 col-md-6 col-sm-12 my-4">
        <div class="d-flex bg-dark">
            <img class="w-25" src="${img}" alt="">
            <div class="p-3">
                <h6 class="text-white text-uppercase">${name}</h6>
                <div class="text-white">${role}</div>
                <div class="colored-mail">${email}</div>
            </div>
                        
                        
        </div>
    </div>
    `

    //inserisco il markup nell'HTML
    rowEl.innerHTML += markup;
}

//form
const formEl = document.getElementById('form');
console.log(formEl);

//creo una funzione che mi permetta di aggiungere card
//aggiongi un eventListener al form, con un evento submit
formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    //richiama il valore dell'input image
    let image = document.getElementById('image').value;

    //richiama il valore dell'input name
    let name = document.getElementById('FullName').value;
   
    //richiama il valore dell'input role
    let role = document.getElementById('role').value;
    
   //richiama il valore dell'input email
   let email = document.getElementById('email').value;
   
    //creo una costante che conterrà la nuova carta
    const newCard = {name, role, email, image};
    console.log(newCard);

    //ricopio il markup
    const markup = `
    <div class="col-lg-4 col-md-6 col-sm-12 my-4">
        <div class="d-flex bg-dark">
            <img class="w-25" src="${image}" alt="">
            <div class="p-3">
                <h6 class="text-white text-uppercase">${name}</h6>
                <div class="text-white">${role}</div>
                <div class="colored-mail">${email}</div>
            </div>
                        
                        
        </div>
    </div>
    `
    //inserisco il markup nell'HTML
    rowEl.innerHTML +=markup;
})
