import React from "react";
import Link from "next/link";
import classes from "../styles/BlogsSection.module.css";

const Blog = ({ img, date, year, description, link }) => {
	return (
		<Link href={`/blogs/${link}`}>
			<div className={classes.blogCard}>
				<div className={classes.circle}>
					<div className={classes.circle__item}>
						<svg className={classes.circle__spinner} viewBox="0 0 50 50">
							<circle
								className={classes.path}
								cx="25"
								cy="25"
								r="20"
								fill="none"
								stroke="#2e2e2e"
								strokeWidth=".2"></circle>
						</svg>
					</div>
				</div>
				<div className={classes.imageContainer}>
					<img src={img} alt="blog" />
				</div>
				<div className={classes.details}>
					<div>
						<h2>{date}</h2>
						<p>{year}</p>
					</div>
					<p className={classes.description}>{description}</p>
				</div>
			</div>
		</Link>
	);
};

export default Blog;
