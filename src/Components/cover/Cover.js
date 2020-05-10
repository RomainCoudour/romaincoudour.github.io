import React from "react";
import styles from "./Cover.module.scss";

export default () => {
	return (
		<div className={styles.cover__panel}>
			<div className={styles["cover__centered-information"]}>
				<span className={styles.cover__title}>Hi I'm Romain</span>
				<span className={styles.cover__occupation}>
					<b>Software Engineer</b> | Full-stack
				</span>
				<ul className={styles.cover__network}>
					{[
						{
							name: "github",
							url: "https://github.com/RomainCoudour",
						},
						{
							name: "linkedin",
							url: "https://www.linkedin.com/in/romain-coudour-51b723181/",
						},
						{
							name: "contact",
							url: "#about",
						},
					].map((network) => (
						<li key={network.name}>
							<a href={network.url}>{network.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
