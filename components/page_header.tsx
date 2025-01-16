import { MouseEvent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Header.module.css";
import silent_scroll from "@/utilities/util_scroll";
import icon_image from "../public/android-chrome-192x192.png";

// fonts
import { Audiowide, Inter } from "next/font/google";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject, faFileLines, faBars, faXmark, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// data
import data_links from "@/data/data_links.json";

const font_audiowide = Audiowide({subsets: ["latin"], weight: "400"});
const font_inter     = Inter({subsets: ["latin"]});

const PageHeader: NextPageLayout = () => {

	const router = useRouter();

	const dropdown_toggle = (click_event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
		const header_element  = document.getElementsByClassName(styles.header)[0];
		const dropdown_active = (header_element.getAttribute("dropdown-active") === "true");
		header_element.setAttribute("dropdown-active", (dropdown_active ? "false" : "true"));
	};

	return (
		<header className={`${styles.header} ${font_inter.className}`}>
			<Link className={`${styles.icon} ${font_audiowide.className}`} href="/" onClick={(event: any) => silent_scroll(event, "/", "#cover", router)}>
				<Image src={icon_image} width="30" height="30" alt="Icon" />
				<h1>Icheng Lin</h1>
			</Link>
			<nav className={styles.navbar}>
				<Link className={styles.item} href="/#cover"    onClick={(event: any) => silent_scroll(event, "/", "#cover", router)}>
					<FontAwesomeIcon icon={faLightbulb} width="14" height="14"/>
					<span>About</span>
				</Link>
				<Link className={styles.item} href="/#projects" onClick={(event: any) => silent_scroll(event, "/", "#projects", router)}>
					<FontAwesomeIcon icon={faDiagramProject} width="14" height="14"/>
					<span>Projects</span>
				</Link>
				<Link className={styles.item} href="/resume">
					<FontAwesomeIcon icon={faFileLines} width="14" height="14"/>
					<span>Resume</span>
				</Link>
				<Link className={styles.item} href={data_links.link_linkedin}>
					<FontAwesomeIcon icon={faLinkedin} width="14" height="14"/>
					<span>LinkedIn</span>
				</Link>
				<Link className={styles.item} href={data_links.link_github}>
					<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
					<span>Github</span>
				</Link>
			</nav>
			<a className={styles.dropdown} target="_blank" onClick={dropdown_toggle}>
				<FontAwesomeIcon className={styles.inactive} icon={faBars}  width="14" height="14"/>
				<FontAwesomeIcon className={styles.active} icon={faXmark} width="14" height="14"/>
				<span>Links</span>
			</a>
			<Link className={styles.contact} href={data_links.link_github}>
				<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
				<span>Icheng Lin&apos;s Github</span>
			</Link>
		</header>
	);
};

export default PageHeader;