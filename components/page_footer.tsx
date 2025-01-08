import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Footer.module.css";
import silent_scroll from "@/utilities/util_scroll";

// fonts
import { Inter } from "next/font/google";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelopeCircleCheck, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// data
import data_links from "@/data/data_links.json";

const font_inter = Inter({subsets: ["latin"]});

const PageFooter: NextPageLayout = () => {

	const router = useRouter();

	return (
		<footer className={`${styles.footer} ${font_inter.className}`}>
			<div className={styles.copyright}>
				<p><b>© 2024 Icheng Lin. All Rights Reserved.</b></p>
				<p>
					<span>Made with </span>
					<FontAwesomeIcon icon={faHeart} width="14" height="14"/>
					<span> by Icheng Lin</span>
				</p>
			</div>
			<div className={styles.navbar}>
				<Link className={styles.item} href={data_links.link_github}>
					<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
					<span>Github</span>
				</Link>
				<Link className={styles.item} href={data_links.link_linkedin}>
					<FontAwesomeIcon icon={faLinkedin} width="14" height="14"/>
					<span>LinkedIn</span>
				</Link>
				<Link className={styles.item} href="/#contacts" onClick={(event: any) => silent_scroll(event, "/", "#contacts", router)}>
					<FontAwesomeIcon icon={faEnvelopeCircleCheck} width="14" height="14"/>
					<span>Contacts</span>
				</Link>
				<a className={styles.item} href="/sitemap">
					<FontAwesomeIcon icon={faMapLocationDot} width="14" height="14"/>
					<span>Sitemap</span>
				</a>
			</div>
		</footer>
	);
};

export default PageFooter;