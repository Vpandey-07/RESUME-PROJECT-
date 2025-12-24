function addNewWEfield(){
   // console.log("Adding new field")

let newNode=document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('wefield')
newNode.classList.add('mt-2')
newNode.setAttribute('rows',3)
newNode.setAttribute('placeholder', 'Enter here')

let weOb = document.getElementById("we")
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQfield(){

let newNode=document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('aqfield')
newNode.classList.add('mt-2')
newNode.setAttribute('rows',3)
newNode.setAttribute('placeholder', 'Enter here')

let aqOb = document.getElementById("aq")
let aqAddButtonOb = document.getElementById("aqAddButton");

aqOb.insertBefore(newNode,aqAddButtonOb);

}

//generating cv

function generateCV(){
  // console.log("generating CV")

  let Namefield=document.getElementById('Namefield').value;

  let nameT1=document.getElementById('nameT1')

nameT1.innerHTML = Namefield;

//direct

document.getElementById('nameT2').innerHTML = Namefield;

//contact

document.getElementById('contactT').innerHTML = document.getElementById('Contactfield').value;

//address
document.getElementById('addressT').innerHTML = document.getElementById('Addressfield').value;

document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;
document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;
document.getElementById('linkedT').innerHTML = document.getElementById('linkedfield').value;

//objective

document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;

//we

let wes=document.getElementsByClassName('wefield')

let str=''

for(let e of wes)
{
   str=str+`<li> ${e.value} </li>`;
}

document.getElementById('weT').innerHTML = str;

//aq

let aqs=document.getElementsByClassName('aqfield')

let str1=''

for(let e of aqs)
{
   str1+=`<li> ${e.value} </li>`;
}

document.getElementById('aqT').innerHTML = str1;

// code for setting image

let file=document.getElementById('imgfield').files[0]

console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

// set the image to template

reader.onloadend = function() {
   document.getElementById('imgTemplate').src = reader.result;
};

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

}

//print cv

function printCV() {
   window.print();
}