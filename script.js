// Keeps form from default
var ul = document.querySelector('ul');
var span = document.querySelector('span');
var form = document.querySelector('form');
var button = document.querySelector('button');

form.addEventListener('submit', function(e){
  e.preventDefault();
})

// adds event listener to Button which allows new items to be added
button.addEventListener('click', addItem);

ul.addEventListener('click', function(e){
  var li = document.querySelector('li');
  console.log(e.target.innerText)
  if (e.target.innerText === 'Delete') {
    deleteItem (e, li);
  } else {
    crossedOut(e, li);
  }
  
});

// add an item to the list, reset input value
function addItem (){
  var input = document.querySelector('input');
  var ul = document.querySelector('ul');
  var newItem = document.createElement('li');
  if (!input.value){
    alert('Please enter a todo')
  } else {
    newItem.innerHTML = input.value + '<span>Delete</span>';
    ul.appendChild(newItem);
    input.value = null;
  }
};

// crosses out a list item
function crossedOut (e, li){
  if (li.className === 'completed') {
    e.target.setAttribute('class', '');
  } else {
    e.target.setAttribute('class', 'completed');
  }
};

// Delete a list item
function deleteItem (e, li){
 ul.removeChild(li);
};




