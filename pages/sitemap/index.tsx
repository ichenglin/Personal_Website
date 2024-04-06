import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { glob } from "glob";
import type { NextPageLayout } from "../_app";

function website_routes() {
	const website_routes   = glob.sync("pages/**/index.tsx").map(page_directory => (page_directory.match(/^pages(.*)\/index\.tsx$/) as RegExpMatchArray)[1]);
	const website_modified = (new Date()).toISOString().slice(0, 10);
	return website_routes.filter(page_pathname => page_pathname !== "/sitemap").map(page_pathname => {
		const pathname_length = page_pathname.split("/").length;
        return [
            {name: "loc",        value: `https://ichenglin.net${page_pathname}`},
            {name: "lastmod",    value: website_modified},
            {name: "changefreq", value: "weekly"},
            {name: "priority",   value: (pathname_length ** (-1)).toString()}
        ];
	});
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const context_response = context.res;
    context_response.setHeader("Content-Type", "text/xml");
    context_response.write([
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
        "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
        ...website_routes().map(route_data => {
            const route_metadata = route_data.map(route_xml => `<${route_xml.name}>${route_xml.value}</${route_xml.name}>`).join("");
            return `<url>${route_metadata}</url>`;
        }),
        "</urlset>"
    ].join(""));
    context_response.end();
    return {props: {}};
};

const Sitemap: NextPageLayout = () => null;

export default Sitemap;