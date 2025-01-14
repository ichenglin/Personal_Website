import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import PageHeader from "@/components/page_header";
import PageFooter from "@/components/page_footer";

// fonts
import { Inter } from "next/font/google";

// icons
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

const font_inter = Inter({subsets: ["latin"]});

// fontawesome implementation
config.autoAddCss = false;

// custom page layout type definitions
export type NextPageLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsLayout = AppProps & {
	Component: NextPageLayout
}

export default function App({ Component, pageProps }: AppPropsLayout) {
	// custom page layout if available
	const page_layout   = Component.getLayout ?? ((page) => page);
	const page_fallback = {
		page_name:        prop_default(pageProps.page_name        as string, ""),
		page_description: prop_default(pageProps.page_description as string, ""),
		page_pathname:    prop_default(pageProps.page_pathname    as string, undefined, (page_pathname) => `https://ichenglin.net${page_pathname}`),
		page_robots:      prop_default(pageProps.page_robots      as string, "all")
	};
	return <>
		<Head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>

			<title>{`${page_fallback.page_name} • Icheng Lin`}</title>

			<meta property="og:site_name"   content="Icheng Lin"/>
			<meta property="og:title"       content={`${page_fallback.page_name} • Icheng Lin`}/>
			<meta property="og:image"       content="https://ichenglin.net/android-chrome-192x192.png"/>
			<meta property="og:description" content={page_fallback.page_description}/>
			<meta property="og:url"         content={page_fallback.page_pathname}/>
			<meta name="description"        content={page_fallback.page_description}/>
			<meta name="theme-color"        content="#007ACC"/>
			<meta name="robots"             content={page_fallback.page_robots}/>

			<link rel="icon"                href="/favicon.ico"   crossOrigin="use-credentials"/>
			<link rel="apple-touch-icon"    href="/logo192.png"   crossOrigin="use-credentials"/>
			<link rel="manifest"            href="/manifest.json" crossOrigin="use-credentials"/>
			<link rel="canonical"           href={page_fallback.page_pathname}/>
		</Head>
		<PageHeader/>
		<main className={font_inter.className}>
			{page_layout(<Component {...pageProps} />)}
		</main>
		<PageFooter/>
	</>;
}

function prop_default<PropType>(prop_original: PropType|null|undefined, prop_default: PropType|undefined, prop_transform?: (prop_original: PropType) => PropType): PropType|undefined {
	if (prop_original === undefined || prop_original === null) return prop_default;
	return (prop_transform !== undefined) ? prop_transform(prop_original) : prop_original;
}