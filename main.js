const app = Vue.createApp({
    data() {
        return {
            pokelist : [],
            pokemons : []
        }
    },
    beforeMount () {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1196')
        .then(response => response.json())
        .then(data => this.pokelist = data.results);
        
    },
    methods: {
        urlimg(index){
            index +=1
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + index + '.png';
        }
    },
    computed: {
        getProperties(){
            for(pokemons in this.pokelist){
            fetch(pokelist[i].url)
            .then(response => response.json())
            .then(data => console.log(data));
            }
        }
    }
})