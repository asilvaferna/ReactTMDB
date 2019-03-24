import React, { Component } from 'react'
import MovieCarousel from './MovieCarousel';
import Movie from './Movie'
import { Link } from 'react-router-dom';
import './Discover.css'

const DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=f255983bec27fed8a5e4fbd9b0e7092c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'

class Discover extends Component {
    constructor() {
        super()
        this.state = { movies: [], loading: false, error: false }
    }

    state = { loading: true }

    async componentDidMount() {
        try {
            const response = await fetch(DISCOVER_URL)
            const { results } = await response.json()
            this.setState({ movies: results })
        } catch (error) {
            this.setState({ error: true })
        } finally {
            this.setState({ loading: false })
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
            <MovieCarousel keyFn={movie => movie.id} items={movies} render={movie =>
                <Link to={`/movie/${movie.id}`}>
                    <Movie details={movie} />
                </Link>
            } />
        )
    }
}
export default Discover
