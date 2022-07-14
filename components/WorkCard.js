import React from "react";
import Link from "next/link";
import classes from "../styles/WorkSection.module.css";

const WorkCard = ({ classname, img, title, description, link }) => {
	return (
		<div className={`${classes[classname]} ${classes.workCard}`}>
			<div className={classes.imageContainer}>
				<img src={img} alt="Work" />
			</div>
			<div className={classes.info}>
				<h1>{title}</h1>
				<p>{description}</p>
				<Link href={`/work/${link}`}>
					<button className="circleBtn">View Project</button>
				</Link>
			</div>
		</div>
	);
};

export default WorkCard;
