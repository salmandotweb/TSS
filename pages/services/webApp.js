import React from "react";
import classes from "../../styles/WebDesign.module.css";
import classes2 from "../../styles/DigitalMarketing.module.css";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Type from "../../components/Type";
import Content from "../../components/Content";
import { AiOutlineLaptop, AiOutlineLike } from "react-icons/ai";
import { RiBookletLine } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";
import { IoBagHandleOutline, IoRocketOutline } from "react-icons/io5";
import Variety from "../../components/Variety";
import ReviewsSection from "../../sections/ReviewsSection";
import Footer from "../../components/Footer";
import { MdFlight } from "react-icons/md";
import { BiCoinStack, BiHomeAlt } from "react-icons/bi";
import { FaHammer, FaTv } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const webApp = () => {
	return (
		<div>
			<Head>
				<title>The Site Space</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Navbar />
			<Header
				text1="Web"
				gradient1="Application"
				gradient2="Development"
				text2="Company."
				bgText1="Website"
				bgText2="Application"
				space="&nbsp;"
				description="Our experienced web developers create modern, high end websites that put your business right in front of your audience's hands."
			/>
			<section className={classes.typesSection}>
				<div className={classes.types}>
					<Type icon={<RiBookletLine />} name="Discovery & Analysis" />
					<Type icon={<AiOutlineLaptop />} name="UI/UX & Tech Design" />
					<Type icon={<AiOutlineLaptop />} name="Development & Programming" />
					<Type icon={<TbMessages />} name="Development & Programming" />
					<Type icon={<IoRocketOutline />} name="Launch & Support" />
				</div>
				<Content
					title="How web app development can help?"
					description="We consider ourselves as the top app developers in UK because have a passion to develop and code beautiful apps. We work with all types of business that are in need of their business app development and unlike other app development companies we give value to our client and their needs."
				/>
			</section>
			<section className={classes.varietiesSection}>
				<Variety
					title="Saas Apps"
					icon={<AiOutlineLaptop />}
					description="SAAS applications are leased software maintained and hosted by the creator and run in the cloud."
				/>
				<Variety
					title="Business Apps"
					icon={<AiOutlineLaptop />}
					description="SAAS applications are leased software maintained and hosted by the creator and run in the cloud."
				/>
				<Variety
					title="Web Portals"
					icon={<AiOutlineLaptop />}
					description="SAAS applications are leased software maintained and hosted by the creator and run in the cloud."
				/>
			</section>
			<section className={classes2.workSection}>
				<h1>What we do for you?</h1>
				<p>
					SEO is not straightforward and not an easy process. It's takes time to
					rank a website on top of Google searches. We use agile SEO techniques
					to rank websites and what we do is amazing. SEO need regular work to
					stay on top of your competition, and every website needs a digital
					marketing strategy; otherwise, it will fall behind and not generate
					any business. We use industry-leading tools for reporting and daily
					optimization. Our specialists monitor the campaign's performance every
					day and make changes to the strategy wherever required.
				</p>
				<div className={classes2.workTypes}>
					<Type icon={<MdFlight />} name="Travel & Holiday Portals" />
					<Type icon={<FaTv />} name="News Portals" />
					<Type icon={<BiHomeAlt />} name="Real Estate Portals" />
					<Type icon={<AiOutlineLike />} name="Recruitment Portals" />
				</div>
				<div className={classes2.workTypes}>
					<Type icon={<IoBagHandleOutline />} name="B2B & B2C Portals" />
					<Type icon={<BsCart4 />} name="eCommerce Portals" />
					<Type icon={<FaHammer />} name="Auction Portals" />
					<Type icon={<BiCoinStack />} name="Corporate Portals" />
				</div>
			</section>
			<ReviewsSection />
			<Footer />
		</div>
	);
};

export default webApp;