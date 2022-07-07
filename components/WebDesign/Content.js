import React from "react";
import classes from "../../styles/WebDesign/WebDesign.module.css";

const Content = ({ title, description }) => {
	return (
		<div className={classes.content}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default Content;
