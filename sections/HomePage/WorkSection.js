import React from "react";
import WorkCard from "../../components/Home/WorkCard";
import classes from "../../styles/Home/WorkSection.module.css";

const WorkSection = () => {
	return (
		<section className={classes.workSection}>
			<h1 className={classes.sectionTitle}>
				Our <br /> Work
			</h1>
			<div className={classes.cardsContainer}>
				<WorkCard />
				<WorkCard classname="reverse" />
				<WorkCard />
				<WorkCard classname="reverse" />
			</div>
		</section>
	);
};

export default WorkSection;
