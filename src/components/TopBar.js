import React from 'react';

export default function TopBar({favoriteCount}) {
	return (
		<div id='nav'>
			<div id='favoriteCount'>Photos Favorited: {favoriteCount}</div>
		</div>
	)
}