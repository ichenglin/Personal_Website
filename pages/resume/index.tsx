import { GetServerSideProps } from "next";
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import type { NextPageLayout } from "../_app";
import styles from "@/styles/pages/Resume.module.css";

// pdf-viewer styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Resume: NextPageLayout = () => {

	const default_layout = defaultLayoutPlugin();

	return (
		<section className={styles.viewer}>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
				<Viewer fileUrl="files/Ichenglin Resume.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[default_layout]}/>
    		</Worker>
		</section>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {props: {
		page_name:        "Resume",
		page_description: "Icheng Lin's Resume"
	}};
}

export default Resume;