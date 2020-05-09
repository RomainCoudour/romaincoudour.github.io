import React from 'react';
import './home.css';
import '@fortawesome/fontawesome-free';

export default function Header(props) {
	let name = props.data?.name || "";
	let occupation = props.data?.occupation || "";
	let employer = props.data?.employer || "";
	let city = props.data?.city || "";
	let networks = props.networks || [];

	return (
		<section id="home" className="background">
			<div className="banner">
				<div className="banner__text">
					<h1>Hey, I'm {name}.</h1>
					<h3>I'm a <span>{occupation}</span> at <span>{employer}</span> based in <span>{city}</span>.</h3>
					<hr />
					<ul className="banner__social">
						{networks.map(s => { return (<li key={s.name}><a href={s.url}><i className={s.className}></i></a></li>) })}
					</ul>
					{/* Round scrolldown that transform into a View my work */}
				</div>
			</div>
		</section>
	);
}