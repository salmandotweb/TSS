import React from "react";
import classes from "../styles/Button.module.css";

function Button(props) {
	return (
		<div>
			<button className={classes.circleBtn}>{props.children}</button>
		</div>
	);
}

export default Button;
