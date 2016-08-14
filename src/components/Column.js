import React from 'react';

export default function Column({images, onTileClick}) {
	return (
		<ul className='masonry-column'>
			{images.map( image => 
				<Tile
					key={image.id}
					imgSrc={image.image_url}
					imgName={image.name}
					viewCount={image.times_viewed}
					onClick={e => onTileClick(item)}
				/>
			)}
		</ul>
	)
}