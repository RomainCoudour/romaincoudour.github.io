import React from "react";
import avatar from "../../img/avatar.svg";
import styles from "./About.module.scss";

export default ({ year }) => {
	return (
		<section id="about" className={styles.about__panel}>
			<span className={styles["about__title-row"]}>About</span>
			<div className={styles["about__left-column"]}>
				<img alt="avatar" src={avatar} />
				<div className={styles.about__information}>
					<span>Romain Coudour</span>
					<span className={styles["about__information--smaller"]}>{year}-yo french developer</span>
				</div>
			</div>
			<div className={styles["about__right-column"]}>badges w/ skills + geometric shapes</div>
		</section>
	);
};
