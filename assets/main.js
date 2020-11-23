var app = new Vue({
    el : '#root',
    data : {
        albums : []
    },
    methods : {

    },

    mounted() {
        axios
        // chiamata API
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        // gestisco la risposta modificando l'array
        .then((response) => {
            this.albums = response.data.response;
        });
    },
});
