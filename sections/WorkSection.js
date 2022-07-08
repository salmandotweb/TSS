import React from "react";
import WorkCard from "../components/WorkCard";
import classes from "../styles/WorkSection.module.css";

const WorkSection = () => {
	return (
		<section className={classes.workSection}>
			<h1 className="sectionTitle">
				Our <br /> Work
			</h1>
			<div className={classes.cardsContainer}>
				<WorkCard img="/assets/workImage.png" />
				<WorkCard classname="reverse" img="/assets/workImage2.png" />
				<WorkCard img="/assets/workImage3.png" />
				<WorkCard classname="reverse" img="/assets/workImage.png" />
			</div>
			<div className={classes.viewAll}>
				<div className={classes.line}></div>
				<h2>View All Projects</h2>
			</div>
		</section>
	);
};

export default WorkSection;
