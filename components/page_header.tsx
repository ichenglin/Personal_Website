import Image from "next/image";
import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Header.module.css";

import icon_image from "../public/android-chrome-192x192.png";
import { Audiowide, Dosis } from "@next/font/google";

const font_audiowide = Audiowide({weight: "400"});
const font_dosis     = Dosis({weight: ["400", "700"]});

const PageHeader: NextPageLayout = () => {
	return (
		<header className={styles.header}>
			<div className={`${styles.icon} ${font_audiowide.className}`}>
				<Image src={icon_image} width="40" height="40" alt="Icon" />
				<h1>Runtime Cloud</h1>
			</div>
			<nav className={`${styles.navbar} ${font_dosis.className}`}>
				<a href="/">Home</a>
				<a href="#projects">Projects</a>
				<a href="https://github.com/ichenglin">Github</a>
			</nav>
		</header>
	);
};

export default PageHeader;