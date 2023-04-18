import React from 'react';

const movielist = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	
	return (
		<>
			{props.movies.map((movie, index,titles) => (
				<div className='image-container'>
					<img src={movie.Poster} alt='movie'></img>
					
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='over'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default movielist;