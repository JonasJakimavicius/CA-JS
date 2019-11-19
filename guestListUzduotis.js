let input = document.querySelector(".input");
let btnAddEnd = document.querySelector(".btnAddEnd");
let btnAddStart = document.querySelector(".btnAddStart");
let btnRmvFirst = document.querySelector(".Btn-rmv-1");
let btnRmvList = document.querySelector(".Btn-rmv-list");
let btnRmvLast = document.querySelector(".Btn-rmv-last");
let inputFrom = document.querySelector(".from-input");
let inputTo = document.querySelector(".to-input");
let btnRmvFT = document.querySelector(".btn-rmv-ft");
let list = document.querySelector("#listas");
let inputSelect = document.querySelector(".input-select");
let btnAddSelected = document.querySelector(".btnAddSelected");
let btnMoveLtoF = document.querySelector(".btnMoveLtoF");
let btnMoveFtoL = document.querySelector(".btnMoveFtoL");
let btnSortAZ=document.querySelector('.sortAZ');
let btnSortZA=document.querySelector('.sortZA');
let guestArray = [];

btnAddEnd.addEventListener("click", addEnd);
btnAddStart.addEventListener("click", addStart);
btnRmvFirst.addEventListener("click", rmvFirst);
btnRmvLast.addEventListener("click", rmvLast);
btnRmvList.addEventListener("click", rmvList);
btnRmvFT.addEventListener("click", removeSelected);
btnAddSelected.addEventListener("click", insertInSelectedSpot);
btnMoveLtoF.addEventListener("click", moveLastToFirst);
btnMoveFtoL.addEventListener("click", moveFirstToLast);
btnSortAZ.addEventListener("click", sortAZ);
btnSortZA.addEventListener("click", sortZA);


/**
 * Add element to the end of list
 * @param event
 */
function addEnd(event) {
  event.preventDefault();
  guestArray.push(input.value);
  renderList();
}

/**
 * Add element to the start of list
 * @param event
 */
function addStart(event) {
  event.preventDefault();
  guestArray.unshift(input.value);
  renderList();
}

/**
 * Remove first element
 * @param event
 * @constructor
 */
function rmvFirst(event) {
  event.preventDefault();
  guestArray.shift(input.value);
  renderList();
}

/**
 * Remove last element
 * @param event
 * @constructor
 */
function rmvLast(event) {
  event.preventDefault();
  guestArray.pop();
  renderList();
}

/**
 * Delete list
 * @param event
 * @constructor
 */
function rmvList(event) {
  event.preventDefault();
  guestArray.reverse();
  renderList();
}

/**
 * Print list
 */
function renderList() {
    list.innerHTML = "";
  let ol = document.createElement("ol");

  list.appendChild(ol);
  guestArray.forEach(guest => {
    let li = document.createElement("li");
    li.innerHTML = guest;
    ol.appendChild(li);
  });
}

/**
 * remove selected elements
 */
function removeSelected() {
  guestArray.splice(
    inputFrom.value - 1,
    inputTo.value ? inputTo.value - inputFrom.value + 1 : 1
  );
  renderList();
}

/**
 * Insert element into selected place
 */
function insertInSelectedSpot() {
  guestArray.splice(inputSelect.value - 1, 0, input.value);
  renderList();
}

/**
 * Move last element to the start
 */
function moveLastToFirst() {
  let selected = guestArray[guestArray.length - 1];
  guestArray.unshift(selected);
  guestArray.pop();
  renderList();
}

/**
 * Move first element to end of the list
 */
function moveFirstToLast() {
  let selected = guestArray[0];
  guestArray.push(selected);
  guestArray.shift();
  renderList();
};

/**
 * Sort list from A to Z
 */
function sortAZ (){
  guestArray.sort();
  renderList();
}

/**
 * Sort list from Z to A
 */
function sortZA (){
  guestArray.sort().reverse();
  renderList();
}