let pokemonRepository = (function () {
    let pokemonList = [];                   //variable 1 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';  //variable 2

    //function to add a pokemon to the pokemonList array
 
    function add(pokemon) {
        pokemonList.push(pokemon);
  }
  
    function getAll () { //this will return pokemon array 
        return pokemonList;
  }
  
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listPokemon = document.createElement("li");
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class'); //create a CSS rule that targets this class and give it a custom button style ofy your own to overwrite the defualt styling 
        listPokemon.appendChild(button);
        pokemonRepository.appendChild(listPokemon);
        button.addEventListener('click', 
        function (Event) {     
          showDetails(pokemon);                                     
        });
    }
  //this promise function is a fetch function
    function loadList() {
        return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    }

      function loadDetails(item) { //loadDetail is a variable witha parameter "item" 
        let url = item.detailsUrl;
          return fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        })
        .catch(function (e) {
          console.error(e);
        });
      }


  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }
      let modalContainer = document.querySelector('#modal-container');
  
  function showModal(title, text) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add('is-visible');
  }
    function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
    
      modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
    
    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name,
        pokemon.name + "'s height is: " + pokemon.height,
        pokemon.imageUrl
      );
    });
                                       
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails 
  };

})();

  pokemonRepository.loadList().then(function() { 
    pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

  });
});                                              
