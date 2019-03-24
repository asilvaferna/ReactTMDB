import React from 'react';
import './MovieCarousel.css';

const MovieCarousel = props =>
  <div className='movies'>
    {
      props.items.map(item =>
        <div key={props.keyFn(item)} className='movies__movie'>
          { props.render(item) }
        </div>
      )
    }
  </div>
export default MovieCarousel;