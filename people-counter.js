MYAPP.peopleCounter = (function() {
  var people;
  var peopleContainer = document.querySelector('.people');
  render();

  function render() {
    MYAPP.events.on('peopleChanged', setPeople);
    peopleContainer.innerHTML = people;
  };

  function setPeople(newPeople) {
    people = (newPeople) ? newPeople : 0;
    render();
  };
})();


