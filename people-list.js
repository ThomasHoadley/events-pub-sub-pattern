MYAPP.people = (function(){
  var people = ['Sean', 'Tom'];
  var input = window.document.querySelector('.input');
  var button = window.document.querySelector('.button-add');
  var ul = window.document.querySelector('.ul');

  button.addEventListener('click', addPerson);
  ul.addEventListener('click', deletePerson);

  _render();

  function _render() {
    var indexOfItem;

    people.map(function(person){
      var newLi = document.createElement('li');
      newLi.className = 'li';
      newLi.textContent = person + ' ';

      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete';
      deleteButton.setAttribute('index', indexOfItem);
      indexOfItem++;
      deleteButton.textContent = "delete";

      newLi.appendChild(deleteButton);
      ul.appendChild(newLi);
    });

    MYAPP.events.emit('peopleChanged', people.length);
  };

  function addPerson(value) {
    var name = (typeof value === 'string') ? value : input.value;
    people.push(name);
    ul.innerHTML = '';
    _render();
    input.value = '';
  };

  function deletePerson(event) {
    if (typeof event === 'string') {
      if (people.indexOf(event) >= 0) {
        var buttonIndex = people.indexOf(event);
        people.splice(buttonIndex,1);
        ul.innerHTML = '';
        _render();
      } else {
        alert('you spelled it wrong');
        return;
      }
    } else if (event.target.classList.contains('delete')){
        var buttonIndex = event.target.getAttribute('index');
        people.splice(buttonIndex,1);
        ul.innerHTML = '';
        _render();
    }
  };

  return {
    addPerson: addPerson,
    deletePerson: deletePerson
  };
})();
