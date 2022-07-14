import React from "react";
import classes from "../styles/WorkSection.module.css";

const WorkCard = ({ classname, img, title, description }) => {
	return (
		<div className={`${classes[classname]} ${classes.workCard}`}>
			<div className={classes.imageContainer}>
				<img src={img} alt="Work" />
			</div>
			<div className={classes.info}>
				<h1>{title}</h1>
				<p>{description}</p>
				<button className="circleBtn">View Project</button>
			</div>
		</div>
	);
};

export default WorkCard;
