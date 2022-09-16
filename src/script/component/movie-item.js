class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movies(movies) {
        this._movies = movies;
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
            margin-bottom: 18px;
            margin-top:35px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .fan-art-movie {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .movie-info {
            padding: 24px;
        }
        
        .movie-info > h2 {
            font-weight: lighter;
            text-align: center;
        }
        
        
        .movie-info > p {
            text-align : justify;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; 
        }
        
        @media screen and (max-width: 550px){
            :host{
                margin-top:10px;
                margin-bottom:10px;
            }
        }
        </style>
        <img class="fan-art-movie" src="https://image.tmdb.org/t/p/original/${this._movies.poster_path}" alt="Poster Path">
        <div class="movie-info">
            <h2>${this._movies.title}</h2>
            <br>
            <p>${this._movies.overview}</p>
            <br>
            <hr>
            <br>
            <h4>Release date : ${this._movies.release_date}</h4>
            <h4>Rating : ${this._movies.vote_average}</h4>
        </div>`;
    }
 }
 customElements.define("movie-item", MovieItem);