import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./page_root.css";
import PageHome from "../home/page_home";
import PageRootFooter from "./components/page_root_footer";
import PageRootHeader from "./components/page_root_header";
import PageProjects from "../projects/projects";

interface Props {};
interface State {};

export default class PageRoot extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
	}

	private get_url_parameter() {
		/* backdoor of useParams from react-router and react-router-dom */
		const url_parameter_matcher = window.location.href.match(/^https?:\/\/[^\/]+(.+)$/);
		return url_parameter_matcher !== null ? url_parameter_matcher[1] : "/";
	}

	render() {
		const url_parameter = this.get_url_parameter();
		return <>
			<PageRootHeader float={url_parameter === "/"}/>
			<Router><Routes>
				<Route path="*" element={<>
					<PageHome/>
				</>}/>
				<Route path="/projects/*" element={<>
					<PageProjects/>
				</>}/>
				<Route path="/plain/*" element={<>
					<div>page</div>
				</>}/>
			</Routes></Router>
			<PageRootFooter/>
		</>;
	}
}
