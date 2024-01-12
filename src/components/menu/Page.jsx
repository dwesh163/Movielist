import React, { useState } from 'react';

export function Page() {
	return (
		<div id="page">
			<div className="page active">
				<i class="fa-solid fa-house" style={{ color: 'white' }}></i>
				<span className="text">Home</span>
			</div>
			<div className="page">
				<i class="fa-solid fa-earth-americas" style={{ color: 'white' }}></i>
				<span className="text">Library</span>
			</div>
			<div className="page">
				<i class="fa-solid fa-user" style={{ color: 'white' }}></i>
				<span className="text">Friends</span>
			</div>
		</div>
	);
}
