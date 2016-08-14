import React from 'react'

export default function Tile({viewCount, favorited, imgSrc, imgName, onClick}) {
	let className = favorited ? "tile-favorite" : null;
	return (
		<li className={className} onClick={e => onClick(e)}>
			<img src={imgSrc} width='100%'/>
			{imgName}
		</li>
	)
}