import React, { Component } from 'react'
import Rater from 'react-rater'

const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie/{id}?api_key=f255983bec27fed8a5e4fbd9b0e7092c'
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

class MovieDetail extends Component {
    constructor() {
        super()
        this.state = { movie: {}, loading: false, error: false }
    }

    state = { loading: true }

    async componentDidMount() {
        try {
            const url = MOVIE_DETAIL_URL.replace('{id}', this.props.match.params.id)
            const response = await fetch(url)
            const result = await response.json()
            this.setState({ movie: result })
        } catch (error) {
            this.setState({ error: true })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { movie, loading, error } = this.state
        if (loading) {
            return <p>Loading movie...</p>
        }

        if (error) {
            return <p>Error loading movie... Try again later.</p>
        }

        return (
            <div>
                {
                    movie.poster_path &&
                    <img src={IMG_URL + movie.poster_path} alt={movie.title} className="movie__poster" />
                }
                <h2>{movie.title}</h2>

                <h3>Overview</h3>
                <p>
                    {movie.overview}
                </p>
                <form>
                    <Rater total={5} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default MovieDetail
