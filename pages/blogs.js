import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "../styles/Blogs.module.css";
import BlogCard from "../components/BlogCard";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					node {
						author {
							id
							name
						}
						date
						slug
						title
						content {
							html
						}
						categories {
							name
						}
						featuredImage {
							url
						}
						id
						overview
						time
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.postsConnection.edges;
};

export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
		props: {
			posts,
		},
	};
}

const blogs = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>The Site Space</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Navbar />
			<Header
				text1="News"
				gradient1="Insights, And"
				gradient2="Creative Culture"
				text2="from the Site Space."
				bgText1="The Site"
				bgText2="Space"
				space="&nbsp;"
			/>
			<section className={classes.cardsSection}>
				<Tabs>
					<TabList>
						<Tab>All</Tab>
						<Tab>Website</Tab>
						<Tab>E-commerce</Tab>
						<Tab>SEO</Tab>
						<Tab>Digital Marketing</Tab>
						<Tab>Ui Design</Tab>
						<Tab>Trending</Tab>
					</TabList>
					<TabPanel>
						{posts.map((post) => {
							return (
								<BlogCard
									key={post.node.id}
									image={post.node.featuredImage.url}
									title={post.node.title}
									date={post.node.date}
									link={post.node.slug}
								/>
							);
						})}
					</TabPanel>
					<TabPanel>
						{posts.map((post) => {
							if (post.node.categories[0].name === "Website") {
								return (
									<BlogCard
										key={post.node.id}
										image={post.node.featuredImage.url}
										title={post.node.title}
										date={post.node.date}
										link={post.node.slug}
									/>
								);
							}
						})}
					</TabPanel>
					<TabPanel>
						{posts.map((post) => {
							if (post.node.categories[0].name === "E-commerce") {
								return (
									<BlogCard
										key={post.node.id}
										image={post.node.featuredImage.url}
										title={post.node.title}
										date={post.node.date}
										link={post.node.slug}
									/>
								);
							}
						})}
					</TabPanel>
					<TabPanel>
						{posts.map((post) => {
							if (post.node.categories[0].name === "SEO") {
								return (
									<BlogCard
										key={post.node.id}
										image={post.node.featuredImage.url}
										title={post.node.title}
										date={post.node.date}
										link={post.node.slug}
									/>
								);
							}
						})}
					</TabPanel>
					<TabPanel>
						{posts.map((post) => {
							if (post.node.categories[0].name === "Digital Marketing") {
								return (
									<BlogCard
										key={post.node.id}
										image={post.node.featuredImage.url}
										title={post.node.title}
										date={post.node.date}
										link={post.node.slug}
									/>
								);
							}
						})}
					</TabPanel>
					<TabPanel>
						{posts.map((post) => {
							if (post.node.categories[0].name === "Ui Design") {
								return (
									<BlogCard
										key={post.node.id}
										image={post.node.featuredImage.url}
										title={post.node.title}
										date={post.node.date}
										link={post.node.slug}
									/>
								);
							}
						})}
					</TabPanel>
					<TabPanel>
						{posts.map((post) => {
							if (post.node.categories[0].name === "Trending") {
								return (
									<BlogCard
										key={post.node.id}
										image={post.node.featuredImage.url}
										title={post.node.title}
										date={post.node.date}
										link={post.node.slug}
									/>
								);
							}
						})}
					</TabPanel>
				</Tabs>
			</section>
			<Footer />
		</div>
	);
};

export default blogs;
