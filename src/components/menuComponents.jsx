import React from 'react';
import { Search } from './menu/Search.jsx';

export function Menu() {
	return (
		<section id="menu">
			<div className="logo">
				<i className="fa-solid fa-film" style={{ color: '#F33F3F' }}></i>
				<h1>MovieList</h1>
			</div>

			<Search />
		</section>
	);
}
