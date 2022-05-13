import React, { Component } from "react";
import { string_length } from "../../system/string_length";
import "./page_projects.css";

interface Props {};
interface State {
	github_profile: {commits: [], repositories: []}
};

export default class PageProjects extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			github_profile: {commits: [], repositories: []}
		};
	}

	async componentDidMount() {
		// load github profile from backend
		fetch("https://backend.runtimecloud.com/profile").then(response => response.json())
		.then(profile => {if (profile.error === false) this.setState({github_profile: profile.result})});
	}

	render() {
		return <div className="page_projects">
			<section className="page_projects_cover">
				<h1>Projects</h1>
			</section>
            <section className="page_projects_container">
				{(this.state.github_profile.repositories as any[]).sort((a, b) => b.size - a.size).map((repository, index) => (
					<div className="global_container_shadow page_projects_card" key={index}>
						<i className="fas fa-book"></i>
						<h3>{repository.name.replace(/[^a-zA-Z]/g, " ")}</h3>
						<div className="page_projects_card_tags">
							{(repository.topics as string[]).sort((a, b) => a.localeCompare(b)).map((topic, index) => (
								<span key={index}>{topic}</span>
							))}
						</div>
						<p>{repository.description !== null ? string_length(repository.description, 150, "...") : ""}</p>
						<div className="global_container_divider"></div>
						<a className="page_projects_card_visit page_home_button" href={`https://github.com/ichenglin/${repository.name}`} target="_blank" rel="noreferrer">
							<p>Read More</p>
							<i className="fa fa-arrow-right"/>
						</a>
					</div>
				))}
			</section>
        </div>;
	}
}