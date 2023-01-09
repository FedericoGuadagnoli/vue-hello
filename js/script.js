console.log('vue ok', Vue);

const app = Vue.createApp({
    data() {
        return { 
            title: 'Vue è molto bello!!',
            subtitle: 'Ma molto molto bello è!',
            image : 'img/Malenia.jpg'
        }
    }
});

app.mount('#root');