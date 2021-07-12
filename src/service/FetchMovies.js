export class FetchMovies {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this._key = config.key
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getMovieList = () => {
        return fetch(`${this._url}/list_movies.json`, {
            // headers: {
            //     'Content-Type': 'application/json',
            //     'x-api-key': this._key
            // }
        })
            .then(this._checkResult)
    }

    getMovieComments = (movieId) => {
        return fetch(`${this._url}/movie_comments.json?movie_id=${movieId}`, {
            mode: 'no-cors'
        })
            .then(this._checkResult)
    }

    makeComment = (movieId, commentText, userKey, ) => {
        return fetch(`${this._url}/make_comment.json`, {
            method: 'POST',
            body: JSON.stringify({
                user_key: userKey,
                movie_id: movieId,
                comment_text: commentText,
                application_key: this._key
            })
        })
            .then(this._checkResult)
    }

    likeMovie = (catId) => {
        return fetch(`${this._url}/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this._key
            },
            body: JSON.stringify({
                image_id: catId
            })
        })
            .then(this._checkResult)
    }


}

const fetchMovies = new FetchMovies({
    url: 'https://yts.mx/api/v2',
})

export default fetchMovies