import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import type { NextPageLayout } from "../pages/_app";

// pdf-viewer styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ObjectPDFViewer: NextPageLayout<{url: string}> = (props) => {

    const default_layout = defaultLayoutPlugin();

	return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
			<Viewer fileUrl={props.url} defaultScale={SpecialZoomLevel.PageFit} plugins={[default_layout]}/>
    	</Worker>
	);
};

export default ObjectPDFViewer;