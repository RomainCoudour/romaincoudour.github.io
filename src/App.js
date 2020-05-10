import React from "react";
import { Cover, About, Footer } from "./components";
import styles from "./App.module.scss";

export default () => {
	const currentYear = new Date(Date.now()).getFullYear();

	return (
		<>
			<div className={styles.stepper}>
				{[].map((index) => (
					<div key={index} className={styles.stepper__circle} />
				))}
			</div>
			<Cover />
			<About year={currentYear - 1996} />
			<Footer year={currentYear} />
		</>
	);
};
