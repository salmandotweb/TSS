import React from "react";
import classes from "../styles/WorkSection.module.css";

const WorkCard = ({ classname, img }) => {
	return (
		<div className={`${classes[classname]} ${classes.workCard}`}>
			<div className={classes.imageContainer}>
				<img src={img} alt="Work" />
			</div>
			<div className={classes.info}>
				<h1>Slice Ping Pong</h1>
				<p>A great venue for ping pong, Table Foosball and Beer Pong Games</p>
				<button className="circleBtn">View Project</button>
			</div>
		</div>
	);
};

export default WorkCard;
