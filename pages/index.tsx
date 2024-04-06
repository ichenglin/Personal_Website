import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPageLayout } from "./_app";
import styles from "@/styles/pages/Home.module.css";
import silent_scroll from "@/utilities/silent_scroll";
import PageFeatured from "@/components/page_featured";
import ObjectDivider, { ObjectDividerType } from "@/components/object_divider";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// data
import data_links from "@/data/data_links.json";

const Home: NextPageLayout = () => {

	const router = useRouter();

	return (
		<>
			<span className="header_offset" id="cover"/>
			<section className={styles.cover}>
				<video src="images/ic_walking.mp4" autoPlay muted loop playsInline></video>
				<div className={styles.title}>
					<h1>I do stuff ._.</h1>
					<h3>Projects made by <b>Icheng Lin</b></h3>
				</div>
				<div className={styles.navbar}>
					<Link className={styles.item} href="/#projects" onClick={(event: any) => silent_scroll(event, "/", "#projects", router)}>
						<FontAwesomeIcon icon={faTerminal} width="14" height="14"/>
						<span>Projects</span>
					</Link>
					<a className={styles.item} href={data_links.link_github}>
						<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
						<span>Github</span>
					</a>
				</div>
			</section>
			<ObjectDivider type={ObjectDividerType.DIVIDER_UPWARD}/>
			<span className="header_offset" id="projects"/>
			<PageFeatured/>
			<ObjectDivider type={ObjectDividerType.DIVIDER_DOWNWARD}/>
			<span className="header_offset" id="contacts"/>
			<section className={styles.skills}></section>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {props: {
		page_name:        "Home",
		page_description: "Icheng Lin's Portfolio"
	}};
}

export default Home;