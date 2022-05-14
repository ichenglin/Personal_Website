import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./page_root.css";
import PageHome from "../home/page_home";
import PageRootFooter from "./components/page_root_footer";
import PageRootHeader from "./components/page_root_header";
import PageProjects from "../projects/page_projects";
import { URLAnalyzer } from "../../objects/url_analyzer";
import PageFallback from "../fallback/page_fallback";

interface Props {};
interface State {};

export default class PageRoot extends Component<Props, State> {

	static url_analyzer: URLAnalyzer;

	constructor(props: Props) {
		super(props);
		PageRoot.url_analyzer = new URLAnalyzer(window.location);
	}

	render() {
		return <>
			<PageRootHeader float={PageRoot.url_analyzer.get_url_relative() === "/"}/>
			<Router><Routes>
				<Route path="*" element={<>
					<PageFallback/>
				</>}/>
				<Route path="/" element={<>
					<PageHome/>
				</>}/>
				<Route path="/projects/*" element={<>
					<PageProjects/>
				</>}/>
			</Routes></Router>
			<PageRootFooter/>
		</>;
	}
}
