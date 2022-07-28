import React from "react";
import classes from "../styles/Header.module.css";

const Header = ({
	bgText1,
	bgText2,
	text1,
	text2,
	gradient1,
	gradient2,
	description,
	bold,
	space,
	children,
}) => {
	return (
		<section className={classes.header}>
			<div className={classes.background_text}>
				<span>{bgText1}</span>
				<span>{bgText2}</span>
			</div>
			<div className={classes.content}>
				<div>
					<h1>
						<img
							className={classes.redIcon}
							src="/assets/red-icon.svg"
							alt=""
						/>
						{text1}&nbsp;
						<span className={classes.gradient}>
							{gradient1}
							<br />
							{gradient2}
						</span>
						{space}
						{text2}
					</h1>
					<p>
						{description}&nbsp;
						<span className="bold">{bold}&nbsp;</span>
					</p>
				</div>
				{children}
			</div>
			{/* <div className={classes.arrow}>
				<div className={classes.container}>
					<div className={classes.chevron}></div>
					<div className={classes.chevron}></div>
					<div className={classes.chevron}></div>
				</div>
			</div> */}
			<div className={classes.arrow}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="42.94"
					height="27.056"
					viewBox="0 0 42.94 27.056">
					<path
						d="M13.879,11.053,29.763,26.9,45.647,11.053l5.586,5.586-21.47,21.47L8.293,16.639ZM29.763,28.315,13.88,12.467,9.707,16.639,29.763,36.695,49.818,16.639l-4.173-4.173Z"
						transform="translate(-8.293 -11.053)"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="42.94"
					height="27.056"
					viewBox="0 0 42.94 27.056">
					<path
						d="M13.879,11.053,29.763,26.9,45.647,11.053l5.586,5.586-21.47,21.47L8.293,16.639ZM29.763,28.315,13.88,12.467,9.707,16.639,29.763,36.695,49.818,16.639l-4.173-4.173Z"
						transform="translate(-8.293 -11.053)"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="42.94"
					height="27.056"
					viewBox="0 0 42.94 27.056">
					<path
						d="M13.879,11.053,29.763,26.9,45.647,11.053l5.586,5.586-21.47,21.47L8.293,16.639ZM29.763,28.315,13.88,12.467,9.707,16.639,29.763,36.695,49.818,16.639l-4.173-4.173Z"
						transform="translate(-8.293 -11.053)"
					/>
				</svg>
			</div>
		</section>
	);
};

export default Header;
