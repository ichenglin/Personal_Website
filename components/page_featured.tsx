import type { NextPageLayout } from "../pages/_app";
import Image from "next/image";
import styles from "@/styles/components/Featured.module.css";
import ObjectReference from "./object_reference";

// fonts
import { Dosis } from "next/font/google";

// data
import data_projects from "@/data/data_projects.json";

const font_dosis = Dosis({subsets: ["latin"]});

const PageFeatured: NextPageLayout = () => {
	return (
		<div className={styles.grid}>
            {data_projects.map((project_data, project_index) => <div className={`${styles.project} container_shadow`} key={project_index}>
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
		</div>
	);
};

export default PageFeatured;