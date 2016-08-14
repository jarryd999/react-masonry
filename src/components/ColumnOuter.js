import React from 'react';
import ActiveColumn from '../containers/ActiveColumn.js';

export default function ColumnOuter({columnCount}) {
	let columns = [];
	for (let i = 0; i < columnCount; i++) {
		columns.push(<ActiveColumn key={i} columnId={i}/>);
	}
	return (
		<div>
			{columns}
		</div>
	);
}