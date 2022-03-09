import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./page_root.css";
import PageHome from "../home/page_home";

interface Props {};
interface State {};

export default class PageRoot extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
	}

	render() {
		return <Router><Routes>
			<Route path="*" element={<>
				<PageHome/>
			</>}/>
			<Route path="/plain/*" element={<>
				<div>page</div>
			</>}/>
		</Routes></Router>;
	}
}
