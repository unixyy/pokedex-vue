function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
            }

const app = Vue.createApp({
    data() {
        return {
            selected:false,
            pokemons : [],
            pokesearch : [],
            apokemon : [],
            name: '',
            searching:false
        }
    },
    mounted () {
        this.getList();
    },
    methods: {
        getSearch(){
            console.log(this.name)
            this.selected = false;
            this.pokesearch = []
            if(!isNaN(this.name)) {
                this.searching = true
                this.getAPokemon(this.name)
            }else{
                if(this.name == ''){
                    this.searching = false
                }else {
                    this.searching = true
                    let count = 0
                    for(pokemon of this.pokemons[0]){
                        if (pokemon.name.includes(this.name)){
                            this.getAPokemon(pokemon.name)
                        }
                    }
                    console.log(this.pokesearch)
    
                }
            }
        },
        async getList(){
            const P = new Pokedex.Pokedex()
            const pokemon = await P.getPokemonsList()
            this.pokemons.push(pokemon.results)
            this.totalnumber = pokemon.count
        },
        async getAPokemon(name){
            const P = new Pokedex.Pokedex()
            const pokemon = await P.getPokemonByName(name)
            this.pokesearch.push(pokemon)

        },
        getImgSearch(index){
            if (this.pokesearch[index].id<649){
            return this.pokesearch[index].sprites.other.dream_world.front_default;
            }else{
            return this.pokesearch[index].sprites.other["official-artwork"].front_default;
            }
        },
        getImgSelected(pokemon){
            if (pokemon.id<649){
                return pokemon.sprites.other.dream_world.front_default;
            }else{
                return pokemon.sprites.other["official-artwork"].front_default;
            }
        },
        showAPokemon(pokemon){
            window.scrollTo({top:0,behavior:'smooth'})
            this.apokemon = pokemon
            this.selected = true
            console.log(pokemon)
        },
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
            }
    },
})