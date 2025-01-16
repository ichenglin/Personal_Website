import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPageLayout } from "./_app";
import styles from "@/styles/pages/About.module.css";
import silent_scroll from "@/utilities/util_scroll";
import PageFeatured from "@/components/page_featured";
import ObjectDivider, { ObjectDividerType } from "@/components/object_divider";
import ObjectReference from "@/components/object_reference";

// fonts
import { Dosis, JetBrains_Mono } from "next/font/google";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// data
import data_links from "@/data/data_links.json";

const font_jetbrains = JetBrains_Mono({subsets: ["latin"]});
const font_dosis     = Dosis         ({subsets: ["latin"]});

const About: NextPageLayout = () => {

	const router = useRouter();

	return (
		<>
			<span className="header_offset" id="cover"/>
			<section className={`${styles.cover} ${font_jetbrains.className}`}>
				<video src="images/ic_walking.mp4" autoPlay muted loop playsInline></video>
				<div className={styles.intro}>
					<h1>Icheng Lin</h1>
					<h3><span>Computer Engineering/Science</span> <span>@ UW-Madison</span></h3>
				</div>
				<div className={styles.navbar}>
					<Link className={styles.item} href="/#projects" onClick={(event: any) => silent_scroll(event, "/", "#projects", router)}>
						<FontAwesomeIcon icon={faTerminal}/>
						<span>Projects</span>
					</Link>
					<a className={styles.item} href={data_links.link_github}>
						<FontAwesomeIcon icon={faGithub}/>
						<span>Github</span>
					</a>
				</div>
			</section>
			<ObjectDivider type={ObjectDividerType.DIVIDER_UPWARD}/>
			<span className="header_offset" id="projects"/>
			<section className={styles.featured}>
				<div className={`${styles.title} ${font_dosis.className}`}>
					<h1>Personal Projects</h1>
					<ObjectReference message="See All Projects" href={data_links.link_github}/>
				</div>
				<PageFeatured/>
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	return {props: {
		page_name:        "About",
		page_description: "Undergraduate in Computer Engineering/Science at the University of Wisconsin-Madison",
		page_pathname:    "/"
	}};
}

export default About;