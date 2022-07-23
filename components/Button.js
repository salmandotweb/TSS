import React from "react";
import Link from "next/link";
import classes from "../styles/Button.module.css";

function Button(props) {
	return (
		<>
			<div>
				<Link href={`/${props.href}`}>
					<button className={classes.circleBtn}>{props.children}</button>
				</Link>
			</div>
		</>
	);
}

export default Button;
