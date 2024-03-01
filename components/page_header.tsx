import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Header.module.css";
import silent_scroll from "@/utilities/silent_scroll";

import icon_image from "../public/android-chrome-192x192.png";
import { Audiowide, Inter } from "@next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const font_audiowide = Audiowide({weight: "400"});
const font_inter     = Inter({subsets: ["latin"]});

const PageHeader: NextPageLayout = () => {

	const router = useRouter();

	return (
		<header className={`${styles.header} ${font_inter.className}`}>
			<Link className={`${styles.icon} ${font_audiowide.className}`} href="/" onClick={(event: any) => silent_scroll(event, "/", "#cover", router)}>
				<Image src={icon_image} width="30" height="30" alt="Icon" />
				<h1>Icheng Lin</h1>
			</Link>
			<nav className={styles.navbar}>
				<Link className={styles.item} href="/#cover" onClick={(event: any) => silent_scroll(event, "/", "#cover", router)}>Home</Link>
				<Link className={styles.item} href="/#projects" onClick={(event: any) => silent_scroll(event, "/", "#projects", router)}>Projects</Link>
				<Link className={styles.item} href="https://skriptstudio.runtimecloud.com/">Skript Studio</Link>
				<Link className={styles.item} href="https://tankon.runtimecloud.com/">Tankon</Link>
				<Link className={styles.item} href="https://vexrify.runtimecloud.com/">Vexrify</Link>
			</nav>
			<Link className={styles.contact} href="https://github.com/ichenglin">
				<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
				<span>Icheng Lin&apos;s Github</span>
			</Link>
		</header>
	);
};

export default PageHeader;