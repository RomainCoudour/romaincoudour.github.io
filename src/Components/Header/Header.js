import React from 'react';
import './header.css';

export default function Header(props) {
	return (
		<header>
			<nav id="nav-wrap">
				<ul id="nav" className="nav">
					{props.data.map((d, index) => {
						return <li key={index}><a className="smoothscroll" href={`#${d.toLowerCase()}`}>{d}</a></li>
					})}
				</ul>
			</nav>
		</header>
	);
}