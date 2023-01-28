import React, { Component } from "react";
import "./page_root_header.css";

interface Props {
	float: boolean
};
interface State {};

export default class PageRootHeader extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		if (this.props.float !== true) {
			// header is not float state
			this.header_pinned_toggle(true);
			return;
		}
		// header is float state
		window.onscroll = () => this.header_pinned_toggle();
		this.header_pinned_toggle();
		this.header_float_enable();
	}

	private header_float_enable(): void {
		const header_section = document.getElementsByClassName("page_root_header")[0] as any;
		header_section.dataset.float = "true";
	}

	private header_pinned_toggle(force_state?: boolean): void {
		const scroll_amount = window.scrollY;
		const header_section = document.getElementsByClassName("page_root_header")[0] as any;
		header_section.dataset.pinned = (scroll_amount > 600 || force_state ? "true" : "");
	}

	private header_expand_toggle(): void {
		const header_section = document.getElementsByClassName("page_root_header")[0] as any;
		header_section.dataset.expanded = (header_section.dataset.expanded === "true" ? "" : "true");
	}

	render() {
		return <section className="page_root_header">
            <div className="page_root_header_container">
				<i className="fas fa-ellipsis-v" onClick={() => this.header_expand_toggle()}></i>
				<a href="/">Home</a>
				<a href="/projects">Projects</a>
				<a href="https://skriptstudio.runtimecloud.com/">Skript Studio</a>
				<a href="https://github.com/ichenglin">Github</a>
				<a href="/contact">Contact</a>
			</div>
        </section>;
	}
}