import React from "react";
import classes from "../styles/Blogs.module.css";

const BlogCard = () => {
	return (
		<div className={classes.blogCard}>
			<div className={classes.imageContainer}>
				<img src="/assets/blogImage2.png" alt="Blog Image" />
			</div>
			<div className={classes.details}>
				<h1>Blog vs Website: Which one is Best for you?</h1>
				<p>March 21, 2022</p>
			</div>
		</div>
	);
};

export default BlogCard;
