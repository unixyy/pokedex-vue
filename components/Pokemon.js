app.component('pokelist',{ 
    data(){
        return{
            pokerand : [],
            selected : false,
            selectedPokemon : [],
            pokemons : [],
            totalnumber : 898,
        }
    },
    beforeMount(){
        this.getRandPok(10)
    },
    mounted(){
    },
    methods: {
        getImg(index){
            if (this.pokerand[index].id<649){
                return this.pokerand[index].sprites.other.dream_world.front_default;
            }else{
                return this.pokerand[index].sprites.other["official-artwork"].front_default;
            }
        },
        async getRandPok(n){
            const P = new Pokedex.Pokedex()
            for(var j=0;j<n;j++){
                rand = getRandomInt(898)
                const pokemon2 = await P.getPokemonByName(rand)
                this.pokerand.push(pokemon2)
            }
        },
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
            }

    },
    computed:{
    },
    template:
    /*html*/
        `
        <ul>
            <li v-for="(pokemon,index) in pokerand">
                <table>
                    <tr id="imgpokemon"><td><img :src="getImg(index)" width="256" height="256"></td></tr>
                    <tr id="namepokemon" class="tabletext"><td>Name : {{capitalize(pokemon.name)}}</td></tr>
                    <tr id="idpokemon" class="tabletext"><td>Id: {{pokemon.id}}</td></tr>
                </table>
                
            </li>
        </ul>`
})