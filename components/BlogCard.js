import Link from "next/link";
import React from "react";
import classes from "../styles/Blogs.module.css";

const BlogCard = ({ title, date, image, link }) => {
	return (
		<Link href={`/blogs/${link}`}>
			<div className={classes.blogCard}>
				<div className={classes.imageContainer}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.details}>
					<h1>{title}</h1>
					<p>{date}</p>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
