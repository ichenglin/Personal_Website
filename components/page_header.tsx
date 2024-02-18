import Image from "next/image";
import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Header.module.css";
import silent_scroll from "@/utilities/silent_scroll";

import icon_image from "../public/android-chrome-192x192.png";
import { Audiowide, Inter } from "@next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const font_audiowide = Audiowide({weight: "400"});
const font_inter     = Inter({subsets: ["latin"]});

const PageHeader: NextPageLayout = () => {

	const router = useRouter();

	return (
		<header className={`${styles.header} ${font_inter.className}`}>
			<Link className={`${styles.icon} ${font_audiowide.className}`} href="/">
				<Image src={icon_image} width="30" height="30" alt="Icon" />
				<h1>Icheng Lin</h1>
			</Link>
			<nav className={styles.navbar}>
				<a className={styles.item} href="" onClick={(event: any) => silent_scroll(event, "/", "#cover", router)}>Home</a>
				<a className={styles.item} href="" onClick={(event: any) => silent_scroll(event, "/", "#projects", router)}>Projects</a>
				<a className={styles.item} href="https://skriptstudio.runtimecloud.com/">Skript Studio</a>
				<a className={styles.item} href="https://tankon.runtimecloud.com/">Tankon</a>
				<a className={styles.item} href="https://vexrify.runtimecloud.com/">Vexrify</a>
			</nav>
			<a className={styles.contact} href="https://github.com/ichenglin">
				<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
				<span>Icheng Lin&apos;s Github</span>
			</a>
		</header>
	);
};

export default PageHeader;