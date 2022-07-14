import React from "react";
import request, { gql } from "graphql-request";
import { getPosts } from "../blogs";
import classes from "../../styles/SingleBlog.module.css";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				date
				title
				content {
					html
				}
				featuredImage {
					url
				}
				overview
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });
	return result.post;
};

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);
	return {
		props: {
			post: data,
		},
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();
	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: false,
	};
}

const Blog = ({ post }) => {
	return (
		<>
			<Head>
				<title>The Site Space</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Navbar />
			<div className={classes.singleBlog}>
				<h2>{post.date}</h2>
				<h1>{post.title}</h1>
				<p>{post.overview}</p>
				<img src={post.featuredImage.url} alt={post.title} />
				<div dangerouslySetInnerHTML={{ __html: post.content.html }} />
			</div>
			<Footer />
		</>
	);
};

export default Blog;
