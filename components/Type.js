import React from "react";
import classes from "../styles/WebDesign.module.css";

const Type = ({ icon, name }) => {
	return (
		<div className={classes.type}>
			<div className={classes.iconContainer}>{icon}</div>
			<h3>{name}</h3>
		</div>
	);
};

export default Type;
