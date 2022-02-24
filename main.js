function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
            }

const app = Vue.createApp({
    data() {
        return {
            test:true,
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
            this.pokesearch = []
            if(this.name == ''){
                searching = false
            }else {
                searching = true
                let count = 0
                for(pokemon of this.pokemons[0]){
                    if (pokemon.name.includes(this.name)){
                        this.getAPokemon(pokemon.name)
                    }
                }
                    console.log(this.pokesearch)

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
        getImg(index){
            if (this.pokemons[index].id<649){
            return this.pokemons[index].sprites.other.dream_world.front_default;
            }else{
            return this.pokemons[index].sprites.other["official-artwork"].front_default;
            }
        },
        getImgSearch(index){
            if (this.pokesearch[index].id<649){
            return this.pokesearch[index].sprites.other.dream_world.front_default;
            }else{
            return this.pokesearch[index].sprites.other["official-artwork"].front_default;
            }
        },
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
            }
    },
})