import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'

const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie/{id}?api_key=f255983bec27fed8a5e4fbd9b0e7092c'
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

class MovieDetail extends Component {
    constructor() {
        super()
        this.state = { movie: {}, isShowingForm: false, collectionTitle: '', loading: false, error: false }
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

    showForm = () => {
        console.log('Show form')
        this.setState({ isShowingForm: true })
    }

    /*
    collections: [
        {
            name: string,
            movies: [] 
        }
    ]
    */

    addCollection = (name) => {
        const localCollections = JSON.parse(localStorage.getItem('collections')) || []
        localCollections.forEach(collection => {
            if (collection.name === name) {
                collection.movies.push(this.state.movie)
            } else {
                const collection = { name: name, movies: this.state.movies }
                localCollections.push(collection)
            }
        })

        localStorage.setItem('collections', JSON.stringify(localCollections))
        const localCollections2 = JSON.parse(localStorage.getItem('collections')) || []
        localCollections2.forEach(collection => {})
    }

    setCollectionTitle = (event) => {
        this.setState({ collectionTitle: event.target.value })
    }

    setCollection = () => {
        this.addCollection(this.state.collectionTitle)
    }

    render() {
        const { movie, isShowingForm, loading, error } = this.state
        if (loading) {
            return <p>Loading movie...</p>
        }

        if (error) {
            return <p>Error loading movie... Try again later.</p>
        }

        return (
            <div className='moviewDetail'>
                {
                    movie.poster_path &&
                    <img src={IMG_URL + movie.poster_path} alt={movie.title} className="movie__poster" />
                }
                <h2>{movie.title}</h2>

                <h3>Overview</h3>
                <p>
                    {movie.overview}
                </p>
                <h3>Collections</h3>
                {
                    !isShowingForm &&
                    <button onClick={this.showForm}>Add to Collection</button>
                }
                {
                    isShowingForm &&
                    <form>
                        <form onSubmit={event => event.preventDefault()}>
                            <input type='text' placeholder='Collection name' onChange={this.setCollectionTitle}/>
                            <button onClick={this.setCollection}>Add</button>
                        </form>
                    </form>
                }
            </div>
        )
    }
}
export default MovieDetail
