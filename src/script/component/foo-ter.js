class footers extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background: linear-gradient(to bottom right, yellowgreen , black); 
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                text-align: center;
            }
    
            a{
                text-decoration: none;
                color: #fff;
            }
        
            hr{
                text-align: center!important;
                margin-bottom: 0.5rem;
            }
        
            @media screen and (max-width: 550px){
                hr{
                    width: 350px;
                    margin-left:65px;
                }
            }
        </style>
        <br>
        <hr>
            © 2020 ∣ by ilham prastiyo</a>
        <br>
        <br>`;
    }
};

customElements.define("foo-ter", footers);