let listForm = document.querySelector(".list_form");
let input = document.querySelector(".input");
let btnAddEnd = document.querySelector(".btnAddEnd");
let btnAddStart = document.querySelector(".btnAddStart");
let btnRmvFirst = document.querySelector(".Btn-rmv-1");
let btnRmvList = document.querySelector(".Btn-rmv-list");
let btnRmvLast = document.querySelector(".Btn-rmv-last");
let list = document.querySelector("#listas");
let guestArray = [];



btnAddEnd.addEventListener("click", addEnd);
btnAddStart.addEventListener("click", addStart);
btnRmvFirst.addEventListener("click", RmvFirst);
btnRmvLast.addEventListener("click", RmvLast);
btnRmvList.addEventListener("click", RmvList);

function addEnd(event) {
  event.preventDefault();
  guestArray.push(input.value);
  renderList();
}

function addStart(event) {
  event.preventDefault();
  guestArray.unshift(input.value);
  renderList();
}

function RmvFirst(event) {
  event.preventDefault();
  guestArray.shift(input.value);
  renderList();
}
function RmvLast(event) {
  event.preventDefault();
  guestArray.pop();
  renderList();
}
function RmvList(event) {
  event.preventDefault();
  guestArray.reverse();
  renderList();
}

function renderList() {
  list.innerHTML = "";
  guestArray.forEach(guest => {
    let div = document.createElement("div");
    div.innerHTML = guest;
    list.appendChild(div);
  });
}

let inputFrom=document.querySelector('.from-input');
let inputTo=document.querySelector('.to-input');
let btnRmvFT=document.querySelector('.btn-rmv-ft')

btnRmvFT.addEventListener('click', removeSelected);

function removeSelected(){
    guestArray.splice(inputFrom.value-1, (inputTo.value? (inputTo.value-inputFrom.value):1))
    renderList();
}


let inputSelect=document.querySelector('.input-select');
let btnAddSelected=document.querySelector('.btnAddSelected');

btnAddSelected.addEventListener('click', insertInSelectedSpot)

function insertInSelectedSpot(){
    guestArray.splice(inputSelect.value-1, 0,input.value);
    renderList();
}


let btnMoveLtoF=document.querySelector('.btnMoveLtoF');

btnMoveLtoF.addEventListener('click', moveLastToFirst)

function moveLastToFirst(){
  
    let selected=guestArray[guestArray.length-1];
    guestArray.unshift(selected);
    guestArray.pop();
    renderList();
}
let btnMoveFtoL=document.querySelector('.btnMoveFtoL');

btnMoveFtoL.addEventListener('click', moveFirstToLast)
function moveFirstToLast(){
  
    let selected=guestArray[0];
    guestArray.push(selected)
    guestArray.shift();
    renderList();
}
