import React, { useState } from 'react';

export function Search() {
	const [searchFilm, setSearchFilm] = useState('');

	const handleSearchChange = (event) => {
		setSearchFilm(event.target.value);
	};

	return (
		<div className="search">
			<input type="text" placeholder="Search..." value={searchFilm} onChange={handleSearchChange} />
		</div>
	);
}
