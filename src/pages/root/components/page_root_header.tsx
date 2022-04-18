import React, { Component } from "react";
import "./page_root_header.css";

interface Props {};
interface State {};

export default class PageRootHeader extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		window.onscroll = () => this.header_update();
		this.header_update();
	}

	private header_update(): void {
		const scroll_amount = window.scrollY;
		const header_section = document.getElementsByClassName("page_root_header")[0] as any;
		header_section.dataset.pinned = (scroll_amount > 600 ? "true" : "");
	}

	private header_expand(): void {
		const header_section = document.getElementsByClassName("page_root_header")[0] as any;
		header_section.dataset.expanded = (header_section.dataset.expanded === "true" ? "" : "true");
	}

	render() {
		return <section className="page_root_header">
            <div className="page_root_header_container">
				<i className="fas fa-ellipsis-v" onClick={() => this.header_expand()}></i>
				<a href="/">Home</a>
				<a href="/projects">Projects</a>
				<a href="/contributions">Contributions</a>
				<a href="https://github.com/fireclaws9" target="_blank" rel="noreferrer">Github</a>
				<a href="/contact">Contact</a>
			</div>
        </section>;
	}
}