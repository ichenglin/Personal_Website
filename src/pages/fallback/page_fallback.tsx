import React, { Component } from "react";
import "./page_fallback.css";

interface Props {};
interface State {};

export default class PageFallback extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="page_fallback">
			<i className="fas fa-hammer"></i>
			<h1>Ooops... 404 ?</h1>
			<p>The page you accessed does not exist or is currently under maintenance</p>
		</div>;
	}
}