const cars = [
    {
      model: 'alto',
      color: 'blue',
      carRegistration: '2014',
       price: "150000",
      company: 'suzuki',
    },
    {
      price: "250000",
      model: 'civic',
      color: 'yellow',
      carRegistration: '2012',
      company: 'honda',
    },
    {
        price: "550000",
        model: 'corolla',
        color: 'gray',
        carRegistration: '2017',
        company: 'toyota',
    },
    {
        price: "850000",
        model: 'safari',
        color: 'black',
        carRegistration: '2018',
        company: 'nissan',
    },
    {
        price: "550000",
      model: 'safari',
      color: 'black',
      carRegistration: '2019',
      company: 'nissan',
    },
    {
        price: "850000",
        model: 'safari',
        color: 'black',
        carRegistration: '2018',
        company: 'nissan',
    },
    {
        price: "850000",
        model: 'safari',
        color: 'black',
        carRegistration: '2018',
        company: 'suzuki',
    },
    {
        price: "850000",
        model: 'safari',
        color: 'black',
        carRegistration: '2018',
        company: 'suzuki',
    },
    {
        price: "850000",
      model: 'safari',
      color: 'black',
      carRegistration: '2018',
      company: 'honda',
    },
]


let carCompany = document.getElementById("carCompany");
let carModel = document.getElementById("carModel");

function option() {
    const campanies = cars.map((i) => i.company)
    const uniqCom = [...new Set(campanies)]
    console.log({ campanies, uniqCom })
    var carCompany = [];

    for (i = 0; i < uniqCom.length; i++) {
        carCompany += `<option value=${uniqCom[i]}>${uniqCom[i]}</option>`;
    }
    document.getElementById(`carCompany`).innerHTML = carCompany
}
option()

var mob = "";
var mod = "";
function search() {
    const findMob = cars.find((i) => i.model.includes(mod))
    console.log(findMob);
}

function myfunction(value) {
    mob = value;
    console.log(value, mob)
    const company = cars.filter((i) => i.company.includes(value))
    let model = [];
    for (i = 0; i < company.length; i++) {
        model += `<option>${company[i].model}</option>`;
    }
    document.getElementById(`carModel`).innerHTML = model;
}
function onMobileNameChange(e) {
    mob = e.value;
    myfunction(e.value)
}

console.log(mob, mod)

function onModelChange(e) {
    mod = e.value
    console.log(mod)
}
