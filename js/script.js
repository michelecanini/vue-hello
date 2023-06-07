"use strict";

// Problema: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const {createApp} = Vue;                       //-> variabile globale vue                        

createApp({
        data(){                                //-> definizione del data
            return{                            //-> oggetto di restituzione
                message: 'Hello vuejs!',
                input_text:'',
                html: '<h1>Il Framework Vuejs ci fa risparmiare tempo!</h1>',
            }
        }
}).mount('#app');                              //-> collegamento al dom