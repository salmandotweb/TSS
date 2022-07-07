import React from "react";
import classes from "../../styles/WebDesign/WebDesign.module.css";

const Variety = ({ title, icon, description }) => {
	return (
		<div className={classes.variety}>
			<div className={classes.left}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className={classes.icon}>{icon}</div>
		</div>
	);
};

export default Variety;
