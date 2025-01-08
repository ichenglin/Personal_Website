import type { NextPageLayout } from "../pages/_app";
import * as Marked from "marked";

const ObjectMarkdownViewer: NextPageLayout<{source: string}> = (props) => {
    const markdown_html = Marked.parse(props.source) as string;
	return (
        <div dangerouslySetInnerHTML={{__html: markdown_html}}/>
	);
};

export default ObjectMarkdownViewer;