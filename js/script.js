"use strict";

// Problema: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const {createApp} = Vue;                       //-> variabile globale vue                        

createApp({
        data(){                                //-> definizione del data
            return{                            //-> oggetto di restituzione
                message: 'Hello vuejs!',
                input_text:'',
                html: '<h1>Il Framework Vuejs ci fa risparmiare tempo!</h1>',
                image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg',
                }
            }     
}).mount('#app');                              //-> collegamento al dom