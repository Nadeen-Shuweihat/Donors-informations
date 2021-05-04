'use strict';

let form = document.getElementById('form');
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);

let donerName = '';
let amount = '';
let age = 0;
let arr = [];
let td = null;


/*********************contructer function *****************************/

function Donate(name, age, amount) {
    this.name = name;
    this.age = 0;
    this.amount = amount;

    Donate.allDonation.push(this);
    save();
}

Donate.allDonation = [];

/***************************random age************************************/
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Donate.age.push(randomAge(18, 30));

/*********************************************************************/
form.addEventListener('submit', function(e) {
    e.preventDefault();

    donerName = e.target.name.value;
    // age = e.target.age.value;
    amount = e.target.amount.value;
    save();
    getData();
    new Donate(donerName, age, amount).render();

    // location.reload();
})



function headRow() {
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);

    arr = ['Donor Name', 'Donor Age', 'Amount'];
    let th = null;
    for (let i = 0; i < arr.lenght; i++) {
        th = document.createElement('th');
        tr1.appendChild(th);
        th.textContent = arr[i];
    }
}

headRow();


Donate.prototype.render = function() {

    let tr2 = document.createElement('tr');
    table.appendChild(tr2)

    td = document.createElement('td');
    tr2.appendChild(td);
    td.textContent = this.name;


    td = document.createElement('td');
    tr2.appendChild(td);
    td.textContent = this.age;


    td = document.createElement('td');
    tr2.appendChild(td);
    td.textContent = this.amount;
    save();
    // location.reload();

}


function callRender() {
    getData();
    for (let i = 0; i < Donate.allDonation.length; i++) {
        Donate.allDonation[i].render();
    }
}

callRender();


function save() {
    localStorage.setItem('users', JSON.stringify(Donate.allDonation));
}

function getData() {
    let data = JSON.parse(localStorage.getItem('users'));

    if (data) {
        Donate.allDonation = [];
        for (let i = 0; i < data.lenght; i++) {
            new Donate(data[i].name, data[i].age, data[i].amount).render();
        }
    }
}
getData();