import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Reference.module.css";

// fonts
import { JetBrains_Mono } from "next/font/google";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const font_jetbrains = JetBrains_Mono({subsets: ["latin"]});

const ObjectReference: NextPageLayout<{message: string, href: string}> = (props) => {
	return (
		<a className={`${styles.reference} ${font_jetbrains.className}`} href={props.href}>
            <div>
                <span>{props.message}</span>
                <FontAwesomeIcon icon={faArrowRight} width="16" height="16"/>
            </div>
        </a>
	);
};

export default ObjectReference;