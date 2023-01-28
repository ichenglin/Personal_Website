import { GetServerSideProps } from "next";
import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			Home Page
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {props: {
		page_name:        "Home",
		page_description: "The home page of RuntimeCloud."
	}};
}