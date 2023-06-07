"use strict";

// Problema: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const {createApp} = Vue;                       //-> variabile globale vue                        

createApp({
        data(){                                //-> definizione del data
            return{                            //-> oggetto di restituzione
                message: 'Hello vuejs!'
            }
        }
}).mount('#app');                              //-> collegamento al dom