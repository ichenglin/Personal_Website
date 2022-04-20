import React, { Component } from "react";
import "./projects.css";

interface Props {};
interface State {};

export default class PageProjects extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="projects">
            Template
        </div>;
	}
}