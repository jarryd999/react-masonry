import React from 'react';

export default function TopBar({favoriteCount}) {
	return (
		<div id='nav'>
			<span id='favoriteCount'>Photos Favorited: {favoriteCount}</span>
		</div>
	)
}