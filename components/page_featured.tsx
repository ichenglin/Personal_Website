import type { NextPageLayout } from "../pages/_app";
import Image from "next/image";
import styles from "@/styles/components/Featured.module.css";

// fonts
import { Dosis } from "@next/font/google";
import { JetBrains_Mono } from "@next/font/google";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// data
import projects_featured from "@/data/projects_featured.json";
import ObjectReference from "./object_reference";

const font_dosis     = Dosis({subsets: ["latin"]});
const font_jetbrains = JetBrains_Mono({subsets: ["latin"]});

const PageFeatured: NextPageLayout = () => {
	return (
		<section className={styles.featured}>
            <div className={`${styles.title} ${font_dosis.className}`}>
                <h1>Personal Projects</h1>
                <ObjectReference message="See All Projects" href="https://github.com/ichenglin"/>
            </div>
            {projects_featured.map((project_data, project_index) => <div className={`${styles.project} container_shadow`} key={project_index}>
                <div className={styles.project_demo}>
                    <Image src={project_data.image.source} alt={project_data.name} width={project_data.image.width} height={project_data.image.height}/>
                </div>
                <div className={styles.project_information}>
                    <h3 className={font_dosis.className}>{project_data.name}</h3>
                    <p>{project_data.description}</p>
                </div>
                <div className={styles.project_reference}>
                    <ObjectReference message="Learn More" href={project_data.reference}/>
                </div>
            </div>)}
		</section>
	);
};

export default PageFeatured;