import Head from "next/head";
import Navbar from "../components/Global/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>The Site Space</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
		</div>
	);
}
