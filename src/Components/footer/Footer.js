import React from "react";
import styles from "./Footer.module.scss";

export default ({ year }) => {
	return (
		<footer className={styles.footer__panel}>
			<div className={styles["footer__backup-icon"]}>UP</div>
			<div className={styles["footer__network-icon"]}>Networks</div>
			<span className={styles.footer__copyright}>
				{"< Romain Coudour"}
				<span className={styles["footer__copyright--color"]}>©{year}</span>
				{" />"}
			</span>
		</footer>
	);
};
