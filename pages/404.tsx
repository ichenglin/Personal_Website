import type { NextPageLayout } from "./_app";
import ObjectReference from "@/components/object_reference";
import styles from "@/styles/pages/Error.module.css";

// fonts
import { Dosis } from "next/font/google";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const font_dosis = Dosis({subsets: ["latin"]});

const Error404: NextPageLayout = () => {
	return (
		<section className={styles.cover}>
			<div className={`${styles.window} ${font_dosis.className}`}>
				<FontAwesomeIcon icon={faHammer}/>
				<h5>Ooops... 404?</h5>
				<p>The page you accessed does not exist or is currently under maintenance</p>
				<ObjectReference message="Return to Home" href="/"/>
			</div>
		</section>
	);
};

export default Error404;