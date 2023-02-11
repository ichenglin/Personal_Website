import Image from "next/image";
import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Header.module.css";

import icon_image from "../public/android-chrome-192x192.png";
import { Audiowide, Inter } from "@next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const font_audiowide = Audiowide({weight: "400"});
const font_inter     = Inter({subsets: ["latin"]});

const PageHeader: NextPageLayout = () => {
	return (
		<header className={`${styles.header} ${font_inter.className}`}>
			<div className={`${styles.icon} ${font_audiowide.className}`}>
				<Image src={icon_image} width="30" height="30" alt="Icon" />
				<h1>Runtime Cloud</h1>
			</div>
			<nav className={styles.navbar}>
				<a className={styles.item} href="/">Home</a>
				<a className={styles.item} href="#projects">Projects</a>
				<a className={styles.item} href="https://skriptstudio.runtimecloud.com/">Skript Studio</a>
			</nav>
			<a className={styles.contact} href="https://github.com/ichenglin">
				<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
				<span>Icheng Lin's Github</span>
			</a>
		</header>
	);
};

export default PageHeader;