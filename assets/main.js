var app = new Vue({
    el : '#root',
    data : {
        albums : [],
        genres : []
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

            this.albums.forEach((item) => {
                if (!this.genres.includes(item.genre)) {
                    this.genres.push(item.genre);
                };
            });
        });
    },
});
