import React from 'react'

export default function Tile({viewCount, favorite, imgSrc, onClick}) {
	let className = favorite ? "tile tile-favorite" : "tile";
	return (
		<li className={className} onClick={e => onClick(e)}>
			<img src={imgSrc} width='100%'/>
			<span>Views: {viewCount}</span>
		</li>
	)
}