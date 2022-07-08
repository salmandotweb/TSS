import React from "react";
import classes from "../styles/AboutSection.module.css";

const AboutSection = () => {
	return (
		<section className={classes.aboutSection}>
			<div className={classes.left}>
				<div className={classes.content}>
					<p>A Full-Stack</p>
					<h1>Web Design, digital marketing and app development agency</h1>
					<p>
						We are a London based web design agency. A small team with big
						ideas. We specialise in bespoke web designing. From brochure
						websites to custom applications we do everything! Website design for
						everyone..
					</p>
				</div>
			</div>
			<div className={classes.right}>
				<img src="assets/aboutImage.png" alt="About" />
			</div>
		</section>
	);
};

export default AboutSection;
