class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=93690ebe288617edd2f813074329a79c&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }

 export default DataSource;
