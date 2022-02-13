import React, { Component } from "react";
import "./page_home.css";

import experience_icons from "../../data/home_experiences.json";
import projects from "../../data/home_projects.json";

interface Props {};
interface State {};

export default class PageHome extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="page_home">
            <div className="page_home_cover page_home_container">
				<div className="page_home_cover_title">
					<h5>Runtime Cloud</h5>
					<p>Home of Open Source Projects</p>
				</div>
				<a className="page_home_cover_visit page_home_button" href="https://github.com/fireclaws9" target="_blank">
					<p>Visit Github</p>
					<i className="fa fa-arrow-right"/>
				</a>
			</div>
			<div className="page_home_experience page_home_container">
				<h3 className="page_home_container_title">Experience</h3>
				<div className="page_home_experience_grid">
					{(experience_icons as {name: string, icon: string}[]).map((loop_experience, index) => (
						<div className="page_home_experience_icon global_container_shadow" key={index}>
							<img alt={loop_experience.name} src={loop_experience.icon}/>
							<p className="page_home_container_paragraph">
								{loop_experience.name}
							</p>
						</div>
					))}
					<div className="page_home_experience_icon global_container_shadow">
							<p className="page_home_container_paragraph" style={{width: "100%"}}>
								more...
							</p>
						</div>
				</div>
			</div>
			{projects.map((project, index) => (
				<div className="page_home_project page_home_container" key={index}>
					<div className="page_home_project_content">
						<div className="page_home_project_content_image">
							<img className="global_container_shadow" alt={project.name} src={project.image}/>
						</div>
						<div className="page_home_project_content_description">
							<h3 className="page_home_container_title">
								{project.name}
							</h3>
							<p className="page_home_container_paragraph">
								{project.description}
							</p>
							<a className="page_home_project_content_visit page_home_button" href={project.website} target="_blank">
								<p>Get Started</p>
								<i className="fa fa-arrow-right"/>
							</a>
						</div>
					</div>
				</div>
			))}
        </div>;
	}
}