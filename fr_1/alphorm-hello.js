"use strict"

class AlphormHello extends HTMLElement {

    constructor(){
        super();
        console.log("constructor");
    }

    connectedCallback() {
        console.log("connectedCallback");
        let shadowDOM = this.attachShadow({mode : 'open'});
        this.innerHTML = "<h2> Bonjour le monde ! </h2>";
    }


    attributeChangedCallback() {
       console.log("attributeChangedCallback");
       
    }

    disconnectedCallback() {
        console.log("disconnectedCallback");
    }
}

window.customElements.define('alphorm-hello', AlphormHello);
