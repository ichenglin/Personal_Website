import { GetServerSideProps } from "next";
import type { NextPageLayout } from "./_app";
import styles from "@/styles/pages/Home.module.css";

const Home: NextPageLayout = () => {
	return (
		<main className={styles.main}>
			Home Page
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {props: {
		page_name:        "Home",
		page_description: "The home page of RuntimeCloud"
	}};
}

export default Home;