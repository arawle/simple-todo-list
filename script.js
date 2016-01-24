var ul = document.querySelector('ul');
// var span = document.querySelector('span');
var form = document.querySelector('form');
var button = document.querySelector('button');

form.addEventListener('submit', function(e){
  e.preventDefault();
});

button.addEventListener('click', addItem);

ul.addEventListener('click', function(e){
  var li = document.querySelector('li');
  if (e.target.innerText === 'Delete') {
    deleteItem (e, li);
  } else {
    crossedOut(e, li);
  }
});

function addItem (){
  var input = document.querySelector('input');
  var ul = document.querySelector('ul');
  var newItem = document.createElement('li');
  if (!input.value){
    alert('Please enter a todo');
  } else {
    newItem.innerHTML = input.value + '<span>Delete</span>';
    ul.appendChild(newItem);
    input.value = null;
  }
}

function crossedOut (e, li){
  if (li.className === 'completed') {
    e.target.setAttribute('class', '');
  } else {
    e.target.setAttribute('class', 'completed');
  }
}

function deleteItem (e, li){
 ul.removeChild(li);
}