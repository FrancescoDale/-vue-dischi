var app = new Vue({
    el : '#root',
    data : {

    },
    methods : {

    },

    mounted() {
        axios
        //chiamata
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        //gestisco la risposta
        .then((response) => {

        });
    },
});
