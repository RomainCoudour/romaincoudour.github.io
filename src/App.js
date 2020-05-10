import React from "react";
import { Cover, About } from "./components";
import styles from "./App.module.scss";

export default () => {
	return (
		<>
			<div className={styles.stepper}>
				{["cover", "about"].map((index) => (
					<div key={index} className={styles.stepper__circle} />
				))}
			</div>
			<Cover />
			<About />
		</>
	);
};
