import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<title>{`${pageProps.page_name} • RuntimeCloud`}</title>

			<meta property="og:title"       content={`${pageProps.page_name} • RuntimeCloud`} />
			<meta property="og:image"       content="https://runtimecloud.com/android-chrome-192x192.png"/>
			<meta property="og:description" content={pageProps.page_description} />
			<meta name="description"        content={pageProps.page_description} />
			<meta name="theme-color"        content="#007ACC" />

			<link rel="icon"             href="/favicon.ico"   crossOrigin="use-credentials"/>
			<link rel="apple-touch-icon" href="/logo192.png"   crossOrigin="use-credentials"/>
			<link rel="manifest"         href="/manifest.json" crossOrigin="use-credentials"/>
		</Head>
		<Component {...pageProps} />
	</>;
}
