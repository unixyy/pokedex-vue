app.component('pokelist',{ 
    data(){
        return{
            pokerand : [],
            totalnumber : 898,
            selected : false,
            apokemon : []
        }
    },
    beforeMount(){
        this.getRandPok(10)
    },
    mounted(){
    },
    props: ['apokemon'],
    methods: {
        getImg(index){
            if (this.pokerand[index].id<649){
                return this.pokerand[index].sprites.other.dream_world.front_default;
            }else{
                return this.pokerand[index].sprites.other["official-artwork"].front_default;
            }
        },
        getImgSelected(pokemon){
            if (pokemon.id<649){
                return pokemon.sprites.other.dream_world.front_default;
            }else{
                return pokemon.sprites.other["official-artwork"].front_default;
            }
        },
        
        async getRandPok(n){
            const P = new Pokedex.Pokedex()
            for(var j=0;j<n;j++){
                rand = getRandomInt(this.totalnumber)
                const pokemon2 = await P.getPokemonByName(rand)
                this.pokerand.push(pokemon2)
            }
        },
        showAPokemon(pokemon){
            window.scrollTo({top:0,behavior:'smooth'})
            this.selected = true;
            this.apokemon = pokemon;
            console.log(this.apokemon)
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
        <div v-if="selected" class="centertext">
        <img :src="getImgSelected(apokemon)" height="512" width="512">
            <table class="tableselect">
            <tr>
                <td class="trselect">Name : <span style="color:red">{{capitalize(apokemon.name)}}</span></td>
                <td class="trselect">Id : {{apokemon.id}}</td>
            </tr>
            <tr>
                <td class="selectedtext">Height : {{apokemon.height/10}}m</td>
                <td class="selectedtext">Weight : {{apokemon.weight}}Kg</td>
            </tr>
            <tr><td>Types : </td></tr>
            <tr v-for="elt in apokemon.types">
                <td style="text-align:right;">{{elt.type.name}}</td>
            </tr>
            <tr><td>Stats :</td></tr>
            <tr v-for="elt in apokemon.stats" >
                <td style="text-align: right;">{{elt.stat.name}} :</td>
                <td style="text-align: left;">{{elt.base_stat}}</td>
            </tr>
            </table>
        </div>
        <div class="centertext">Some Random Pokemons....</div>
        <ul>
            <li v-for="(pokemon,index) in pokerand">
                <table>
                    <tr id="imgpokemon"><td><img style="cursor: pointer;" :src="getImg(index)" width="256" height="256" @click=showAPokemon(pokemon)></td></tr>
                    <tr id="namepokemon" class="tabletext"><td>Name : {{capitalize(pokemon.name)}}</td></tr>
                    <tr id="idpokemon" class="tabletext"><td>Id: {{pokemon.id}}</td></tr>
                </table>
                
            </li>
        </ul>`
})