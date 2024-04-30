import { GetStaticProps } from "next";
import type { NextPageLayout } from "../_app";
import styles from "@/styles/pages/Resume.module.css";
import ObjectPDFViewer from "@/components/object_viewer_pdf";

const Resume: NextPageLayout = () => {

	return (
		<section className={styles.viewer}>
			<ObjectPDFViewer url="files/Ichenglin Resume.pdf"/>
		</section>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	return {props: {
		page_name:        "Resume",
		page_description: "Hey, I'm Icheng Lin! I'm a computer science student passionate about computer architecture at the University of Wisconsin-Madison.",
		page_pathname:    "/resume"
	}};
}

export default Resume;