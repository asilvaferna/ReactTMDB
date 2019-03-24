import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MovieCarousel from './MovieCarousel'
import Movie from './Movie'

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=f255983bec27fed8a5e4fbd9b0e7092c&language=en-US&query={query}&page=1&include_adult=false'

class Search extends Component {
    constructor() {
        super()
        this.state = { movies: [], loading: false, error: false }
        this._searchMovies = this._searchMovies.bind(this)
    }

    state = { loading: true }

    async _searchMovies(event) {
        const query = event.target.value
        if (query === '') {
            this.setState({ movies: [] })
        } else {
            try {
                const url = SEARCH_URL.replace('{query}', query)
                const response = await fetch(url)
                const { results } = await response.json()
                this.setState({ movies: results })
            } catch (error) {
                this.setState({ error: true })
            } finally {
                this.setState({ loading: false })
            }
        }
    }

    render() {
        const { movies, loading, error } = this.state
        if (loading) {
            return <p>Loading movies...</p>
        }

        if (error) {
            return <p>Error loading movies... Try again later.</p>
        }

        return (
            <div>
                <form className="search" onSubmit={event => event.preventDefault()}>
                    <input type='text' placeholder='Search movies...' onChange={this._searchMovies} />
                </form>
                <MovieCarousel keyFn={movie => movie.id} items={movies} render={movie =>
                    <Link to={`/movie/${movie.id}`}>
                        <Movie details={movie} />
                    </Link>
                } />
            </div>
        )
    }
}
export default Search
