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
    let pokemonlist = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class'); //create a CSS rule that targets this class and give it a custom button style ofy your own to overwrite the defualt styling 
    listpokemon.appendChild(button);
    pokemonlist.appendChild(listpokemon);
    button.addEventListener('click', function () {     
      showDetails(pokemon);
                                                
    });
 }
  //this promise function is a fetch function
 
    
function loadList() {
    return fetch(apiUrl).then(function (response) {
    return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
    
/*                         
    button.addEventListener('click', function () {     
      showDetails(pokemon);
                                                
    });
  }
 
 */                                              


  function loadDetails(item) { //loadDetail is a variable witha parameter "item" 
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
                                               function showDetails (item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
  });
}                                                 
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails 
 

  };

}) ();


/*
  pokemonRepository.add({ name: 'Charmander', height: 0.6, type: ['fire']});
  pokemonRepository.add({ name: 'Pikachu', height: 0.4, type: ['electricity']});
  pokemonRepository.add({ name: 'Bulbasaur', height: 0.7, type: ['Grass']});

console.log(pokemonRepository.getAll());
*/

  pokemonRepository.loadList().then(function() { 
    pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

  });
});                                              



// for (let i = 0; 
//     i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 0.5) {
//       document.write(pokemonList[i].name + " (" + pokemonList[i].height + " meter) " + " is a " + pokemonList[i].type + " type! It's a large pokemon.<br>")
//     }
//     else{
//       document.write(pokemonList[i].name + " (" + pokemonList[i].height + " meter) " + " is a " + pokemonList[i].type + " type! <br>")
//     }
//   }

  

  // if (pokemon.height > 0.5) { 
  //   console.log(pokemon.name + " is " + pokemon.height + " meters tall. Wow! Thats a big pokemon! " + " It is a " + pokemon.type + "type.");
  //   }
  // else{ 
  //   console.log(pokemon.name + " is " + pokemon.height + " meters tall " + " and is a " + pokemon.type + "type.");
 