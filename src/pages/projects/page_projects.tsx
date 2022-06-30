import { Component } from "react";
import { string_length } from "../../system/string_length";
import { time_since } from "../../system/time_since";
import "./page_projects.css";

interface Props {};
interface State {
	github_profile_repositories: []
};

export default class PageProjects extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			github_profile_repositories: []
		};
	}

	async componentDidMount() {
		// load github profile from backend
		fetch("https://backend.runtimecloud.com/profile/repositories").then(response => response.json())
		.then(repositories => {if (repositories.error === false) this.setState({github_profile_repositories: repositories.result})});
	}

	render() {
		return <div className="page_projects">
			<section className="page_projects_cover">
				<h1>Projects</h1>
			</section>
            <section className="page_projects_container">
				{(this.state.github_profile_repositories as any[]).sort((a, b) => b.created - a.created).map((repository, index) => (
					<div className="global_container_shadow page_projects_card" key={index}>
						<i className="fas fa-book"></i>
						<h3>{repository.name.replace(/[^a-zA-Z]/g, " ")}</h3>
						<div className="page_projects_card_tags">
							{repository.forked ? (
								<span data-special="true">forked</span>
							) : null}
							{repository.archived ? (
								<span data-special="true">archived</span>
							) : null}
							{(repository.topics as string[]).sort((a, b) => a.localeCompare(b)).map((topic, index) => (
								<span key={index}>{topic}</span>
							))}
						</div>
						<p>{repository.description !== null ? string_length(repository.description, 150, "...") : ""}</p>
						<div className="global_container_divider"></div>
						<div className="page_projects_card_footer">
							<a className="page_projects_card_visit page_home_button" href={`https://github.com/ichenglin/${repository.name}`} target="_blank" rel="noreferrer">
								<p>Read More</p>
								<i className="fa fa-arrow-right"/>
							</a>
							<p>{`updated ${time_since(repository.updated)}`}</p>
						</div>
						
					</div>
				))}
			</section>
        </div>;
	}
}