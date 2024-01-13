import React from 'react';

let elementList = [];
let list = {
	'43758394573945798': {
		name: 'A voir',
		description: 'lorem balalalalal lda asdl sad asd ef wf wefssdf sdf gre',
		background: ['#b3b3b3', 'fas fa-list'],
	},
	'437583234573945798': {
		name: 'Tout',
		description: 'lorem balalalalal lda asdl sad asd ef wf wefssdf sdf gre',
		background: ['#b3b3b3', 'fas fa-list'],
	},
	'295387025734069455': {
		name: 'Vu en famille',
		description: 'lorem balalalalal lda asdl sad asd ef wf wefssdf sdf gre',
		background: ['#0039E6', 'fas fa-user-group', '12px'],
	},
};

for (const id in list) {
	let color = list[id].background[0];
	let size = list[id].background[2];
	elementList.push(
		<div key={id} className="listElement">
			<div className="listLogo" style={{ backgroundColor: color, fontSize: size }}>
				<i className={list[id]['background'][1]}></i>
			</div>
			<p>{list[id]['name']}</p>
		</div>
	);
}

export function List() {
	return (
		<div id="list">
			<h3>my lists</h3>
			<div className="listBox">{elementList}</div>
		</div>
	);
}
