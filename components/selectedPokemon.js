app.component('selected-pokemon',{
    data(){
        return {

        }
    },
    props: ['apokemon'],
    beforeMount(){

    },
    methods: {
        getImgSelected(index){
            if (this.$apokemon[index].id<649){
            return this.$apokemon[index].sprites.other.dream_world.front_default;
            }else{
            return this.$apokemon[index].sprites.other["official-artwork"].front_default;
            }
        },

    },
    template:
    /*html*/
    `
    <div>Bonjouuuuuuuuuuuur</div>
    `
})