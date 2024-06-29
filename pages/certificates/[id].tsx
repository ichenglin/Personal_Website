import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import type { NextPageLayout } from "../_app";
import styles from "@/styles/pages/Certificates.module.css";
import ObjectPDFViewer from "@/components/object_viewer_pdf";

// data
import data_certificates from "@/data/data_certificates.json";

const Certificates: NextPageLayout = () => {
	const router           = useRouter();
	const certificate_data = data_certificates.find(certificate_data => certificate_data.id === router.query.id);
	if (certificate_data === undefined) return (<></>);

	return (
		<section className={styles.viewer}>
			<ObjectPDFViewer url={certificate_data.source}/>
		</section>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths:    data_certificates.map(certificate_data => ({params: {id: certificate_data.id}})),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const certificate_data = data_certificates.find(certificate_data => certificate_data.id === context.params?.id);
	if (certificate_data === undefined) return {props: {}}

	return {props: {
		page_name:        certificate_data.name,
		page_description: `Hey, I'm Icheng Lin! Please check out my ${certificate_data.name} received from ${certificate_data.organization}.`,
		page_pathname:    `/certificates/${certificate_data.id}`
	}};
}

export default Certificates;