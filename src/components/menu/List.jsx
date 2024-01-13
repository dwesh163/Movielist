import React from 'react';

let elementList = [];
let list = {
	'43758394573945798': {
		name: 'A voir',
		description: 'lorem balalalalal lda asdl sad asd ef wf wefssdf sdf gre',
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
	let color, size, icon;

	if (list[id].background) {
		color = list[id].background[0];
		size = list[id].background[2];
		icon = list[id]['background'][1];
	} else {
		color = '#F33F3F';
		icon = 'fas fa-list';
	}
	elementList.push(
		<div key={id} className="listElement" onClick={() => console.log(list[id]['name'])}>
			<div className="listLogo" style={{ backgroundColor: color, fontSize: size }}>
				<i className={icon}></i>
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
