import { ReactElement } from "react";
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import { ToolbarProps, ToolbarSlot, defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import type { NextPageLayout } from "../pages/_app";

// pdf-viewer styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ObjectPDFViewer: NextPageLayout<{url: string}> = (props) => {

    const default_layout = defaultLayoutPlugin({
        renderToolbar: (Toolbar: (props: ToolbarProps) => ReactElement) => (
            <Toolbar>
                {toolbarPlugin().renderDefaultToolbar((slot: ToolbarSlot) => ({
                    ...slot,
                    EnterFullScreen:         () => (<></>),
                    EnterFullScreenMenuItem: () => (<></>),
                    Open:                    () => (<></>),
                    OpenMenuItem:            () => (<></>)
                }))}
            </Toolbar>
        )
    });

	return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
			<Viewer fileUrl={props.url} defaultScale={SpecialZoomLevel.PageFit} theme="dark" plugins={[default_layout]}/>
    	</Worker>
	);
};

export default ObjectPDFViewer;