function asyncGetByNameID(){
    let entry = document.getElementById('entry').value
    console.log(entry);
    const P = new Pokedex.Pokedex({protocol: 'https'});
    P.getPokemonByName('eevee') // with Promise
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log(err)
    });
}