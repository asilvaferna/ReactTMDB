import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MovieCarousel from './MovieCarousel'
import Movie from './Movie'

class Collections extends Component {
    constructor() {
        super()
        this.state = { collections: [], loading: false, error: false }
    }

    state = { loading: true }

    componentDidMount() {
        const collections = JSON.parse(localStorage.getItem('collections')) || []
        this.setState({ collections: collections })
    }

    render() {
        const { collections, loading, error } = this.state
        if (loading) {
            return <p>Loading collections...</p>
        }

        if (error) {
            return <p>Error loading collections... Try again later.</p>
        }

        return (
            <div>
                <h2>Work in Progress...</h2>
                {/* {
                    collections.map(collection =>
                        <div key={collection.name} className='collection'>
                            <h2>{collection.name}</h2>
                            <MovieCarousel keyFn={movie => movie.id} items={collection.movies} render={movie =>
                                <Link to={`/movie/${movie.id}`}>
                                    <Movie details={movie} />
                                </Link>
                            } />
                        </div>
                    )
                } */}
            </div>
        )
    }
}
export default Collections
