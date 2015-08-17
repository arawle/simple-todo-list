// Keeps form from default
var form = document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault();
})


// add an item to the list
function addItem (){
  var input = document.querySelector('input');
  var ul = document.querySelector('ul');
  var newItem = document.createElement('li');
  newItem.innerHTML = input.value;
  ul.appendChild(newItem);
};

// adds event listener to Button which allows new items to be added
var button = document.querySelector('button')
button.addEventListener('click', addItem)
  
