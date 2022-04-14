import React, { Component } from "react";
import "./page_root_footer.css";

interface Props {};
interface State {};

export default class PageRootFooter extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return <section className="page_root_footer">
            <div className="page_root_footer_content">
                <div className="page_root_footer_content_title">
                    <h1>Runtime Cloud</h1>
                    <p>Home of Open Source Projects</p>
                    <p>© RuntimeCloud 2021-2022</p>
                </div>
                <div className="page_root_footer_content_links">
                    <h1>Contact Links</h1>
                    <p>support@runtimecloud.com</p>
                    <p>github.com/fireclaws9</p>
                </div>
            </div>
        </section>;
	}
}