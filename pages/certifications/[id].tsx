import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import type { NextPageLayout } from "../_app";
import styles from "@/styles/pages/Certifications.module.css";
import ObjectPDFViewer from "@/components/object_viewer_pdf";

// data
import data_certifications from "@/data/data_certifications.json";

const Certifications: NextPageLayout = () => {
	const router           = useRouter();
	const certification_data = data_certifications.find(certification_data => certification_data.id === router.query.id);
	if (certification_data === undefined) return (<></>);

	return (
		<section className={styles.viewer}>
			<ObjectPDFViewer url={certification_data.source}/>
		</section>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths:    data_certifications.map(certification_data => ({params: {id: certification_data.id}})),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const certification_data = data_certifications.find(certification_data => certification_data.id === context.params?.id);
	if (certification_data === undefined) return {props: {}}

	return {props: {
		page_name:        certification_data.name,
		page_description: `Hey, I'm Icheng Lin! Please check out my ${certification_data.name} received from ${certification_data.organization}.`,
		page_pathname:    `/certifications/${certification_data.id}`
	}};
}

export default Certifications;