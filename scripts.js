let pokemonRepository = (function () {

  let pokemonList = [];
    /* old array object listing 
    
    {
      name: 'Bulbasaur',
      height: 0.7,
      type: ['grass',' poison']
    },
    {
      name: 'Pikachu',
      height: 0.4,
      type:['electricity',' speed']
    },
    {
      name: 'Charmander',
      height: 0.6,
      type: ['fire',' speed']
    },
  ];*/


//function to add a pokemon to the pokemonList array
 
  function add (pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll () {
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
                                                
  function showDetails (pokemon) {
    console.log(pokemon);
  };
                                                
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem

  };

})();


  pokemonRepository.add({ name: 'Charmander', height: 0.6, type: ['fire']});
  pokemonRepository.add({ name: 'Pikachu', height: 0.4, type: ['electricity']});
  pokemonRepository.add({ name: 'Bulbasaur', height: 0.7, type: ['Grass']});



  pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
                    
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
 