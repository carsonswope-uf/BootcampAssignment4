import React from 'react';

export default ({data, selectedBuilding}) => {
	console.log('array of displayed buildings', selectedBuilding)

	const currentBuilding = selectedBuilding.map(id => {
		const {name, coordinates, address, code} = data[id]
		if(address === undefined){
			return ( 
				<div className='viewRow'>
				<li key={id}>Name: {name}</li>
				<li key={id}>Code: {code}</li>
				<li key={id}>No Address Found{address}</li>
				</div>
			)
		} else {
			return ( 
				<div className='viewRow'>
				<li key={id}>Name: {name}</li>
				<li key={id}>Code: {code}</li>
				<li key={id}>Address: {address}</li>
				<li key={id}>Longitude: {coordinates.longitude}</li>
				<li key={id}>Latitude: {coordinates.latitude}</li>
				</div>
			)
			}
		}
	)
	return (
		<div>
			<p>
				{' '}
				<i>Click on a name to view more information</i>
			</p>
			<ul>
			{currentBuilding}
			</ul>
		</div>
	);
	
}

