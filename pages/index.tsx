import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import type { NextPageLayout } from "./_app";
import styles from "@/styles/pages/Home.module.css";
import silent_scroll from "@/utilities/silent_scroll";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// data
import projects_featured from "@/data/projects_featured.json";

const featured_animation = {
	keyframes: [
		{opacity: "0"},
		{opacity: "1"}
	],
	options: {
		duration:   1000,
		iterations: 1
	}
}

const Home: NextPageLayout = () => {

	useEffect(() => {
		let featured_index = projects_featured.length - 1;
		setInterval(() => {
			// update the index of featured project
			const background_index = featured_index       % projects_featured.length;
			featured_index         = (featured_index + 1) % projects_featured.length;
			// render the background
			for (let project_index = 0; project_index < projects_featured.length; project_index++) {
				const project_element = document.getElementsByClassName(styles.slide)[project_index] as HTMLElement;
				if (project_element === undefined) continue;
				project_element.style.opacity = (project_index === featured_index || project_index === background_index) ? "1" : "0";
				project_element.style.zIndex  = (project_index === featured_index)                                       ? "2" : "1";
			}
			// animate the new featured project
			const featured_element = document.getElementsByClassName(styles.slide)[featured_index] as HTMLElement;
			if (featured_element !== undefined) featured_element.animate(featured_animation.keyframes, featured_animation.options);
		}, 2000);
	}, []);

	return (
		<>
			<section className={styles.cover}>
				<div className={styles.title}>
					<h1>I do stuff ._.</h1>
					<h3>Projects Made by Icheng Lin</h3>
				</div>
				<div className={styles.navbar}>
					<a className={styles.item} href="" onClick={(event: any) => silent_scroll(event, "#projects")}>
						<FontAwesomeIcon icon={faTerminal} width="14" height="14"/>
						<span>Projects</span>
					</a>
					<a className={styles.item} href="https://github.com/ichenglin">
						<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
						<span>Github</span>
					</a>
				</div>
				<div>
					{projects_featured.map((project, index) => (
						<Image className={styles.slide} src={project.image.source} alt={project.name} width={project.image.width} height={project.image.height} key={index}/>
					))}
				</div>
			</section>
			<section className={styles.featured}>
				<span className="header_offset" id="projects"/>
				Featured Projects
			</section>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {props: {
		page_name:        "Home",
		page_description: "The home page of RuntimeCloud"
	}};
}

export default Home;