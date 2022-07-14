import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WorkCard from "../components/WorkCard";
import AboutSection from "../sections/AboutSection";
import BlogsSection from "../sections/BlogsSection";
import ReviewsSection from "../sections/ReviewsSection";
import ServicesSection from "../sections/ServicesSection";
import classes from "../styles/WorkSection.module.css";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
	const query = gql`
		query MyQuery {
			projects {
				id
				title
				image {
					url
				}
				description
				reverse
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.projects;
};

export async function getStaticProps() {
	const projects = (await getProjects()) || [];
	return {
		props: {
			projects,
		},
	};
}
export default function Home({ projects }) {
	console.log(projects);
	return (
		<div>
			<Head>
				<title>The Site Space</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Navbar />
			<Header
				text1="Creative"
				gradient1="Web Design &"
				gradient2="Digital"
				text2="Agency London."
				bgText1="The Site"
				bgText2="Space"
				description="Web Buds is a creative website design agency in London."
				bold="A team of talented web designers in London."
				space="&nbsp;"
			/>
			<AboutSection />
			<section className={classes.workSection}>
				<h1 className="sectionTitle">
					Our <br /> Work
				</h1>
				<div className={classes.cardsContainer}>
					{projects.map((project) => {
						if (project.reverse === false) {
							return (
								<WorkCard
									img={project.image.url}
									title={project.title}
									description={project.description}
								/>
							);
						} else if (project.reverse === true) {
							return (
								<WorkCard
									img={project.image.url}
									title={project.title}
									description={project.description}
									classname="reverse"
								/>
							);
						}
					})}
				</div>
				<div className={classes.viewAll}>
					<div className={classes.line}></div>
					<h2>View All Projects</h2>
				</div>
			</section>
			<ServicesSection />
			<ReviewsSection />
			<BlogsSection />
			<Footer />
		</div>
	);
}
