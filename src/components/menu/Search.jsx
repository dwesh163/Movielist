import React, { useState } from 'react';

export function Search() {
	const [searchFilm, setSearchFilm] = useState('');

	const handleSearchChange = (event) => {
		setSearchFilm(event.target.value);
	};

	return (
		<div className="search">
			<span className="icon">
				<i className="fa fa-search"></i>
			</span>
			<input type="text" id="searchInput" placeholder="Search..." value={searchFilm} onChange={handleSearchChange} />
		</div>
	);
}
