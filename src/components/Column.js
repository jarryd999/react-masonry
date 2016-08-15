import React from 'react';
import Tile from './Tile.js';

export default function Column({images, onTileClick}) {

	return (
		<ul className='masonry-column'>
			{images.map(image =>
				<Tile
					key={image.id}
					imgSrc={image.url}
					favorite={image.favorite}
					viewCount={image.views}
					onClick={e => onTileClick(image)}
				/>
			)}
		</ul>
	)
}