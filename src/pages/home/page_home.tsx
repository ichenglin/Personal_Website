import React, { Component } from "react";
import "./page_home.css";

import experience_icons from "../../data/home_experiences.json";
import projects from "../../data/home_projects.json";
import { time_since } from "../../system/time_since";

interface Props {};
interface State {
	github_profile: {}
};

export default class PageHome extends Component<Props, State> {

	static contribution_slider_stage: number = 0;

	constructor(props: Props) {
		super(props);
		this.state = {
			github_profile: {
				commits: []
			}
		};
	}

	async componentDidMount() {
		// load github profile from backend
		fetch("https://backend.runtimecloud.com/profile").then(response => response.json())
		.then(profile => {if (profile.error === false) this.setState({github_profile: profile.result})});
		// add event listeners for slider buttons
		const contribution_slider_forward = document.getElementById("page_home_contribution_slideshow_forward") as HTMLElement;
		const contribution_slider_backward = document.getElementById("page_home_contribution_slideshow_backward") as HTMLElement;
		contribution_slider_forward.addEventListener("click", event => this.contribution_slider_update(1));
		contribution_slider_backward.addEventListener("click", event => this.contribution_slider_update(-1));
	}

	private contribution_slider_update(offset_stage: number) {
		// stage 0~2
		const new_stage_raw = (PageHome.contribution_slider_stage + offset_stage) % 3;;
		const new_stage = new_stage_raw < 0 ? new_stage_raw + 3 : new_stage_raw;
		PageHome.contribution_slider_stage = new_stage;
		// apply effect
		const contribution_slider = document.getElementsByClassName("page_home_contribution_slideshow_slide")[0] as HTMLElement;
		//contribution_slider.style.transform = `translateX(-${new_stage * contribution_slider.clientWidth}px)`;
		contribution_slider.style.setProperty("--slider_page", new_stage.toString());
	}

	render() {
		return <div className="page_home">
			<section className="page_home_container page_home_cover">
				<div className="page_home_cover_title">
					<h5>Runtime Cloud</h5>
					<p>Home of Open Source Projects</p>
				</div>
				<a className="page_home_cover_visit page_home_button" href="https://github.com/ichenglin" target="_blank" rel="noreferrer">
					<p>Visit Github</p>
					<i className="fa fa-arrow-right"/>
				</a>
			</section>
			<section className="page_home_container page_home_experience">
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
			</section>
			<section className="page_home_container page_home_contribution" id="contributions">
				<h3 className="page_home_container_title">Latest Contributions</h3>
				<div className="page_home_contribution_slideshow">
					<div className="page_home_contribution_slideshow_slide">
						{((this.state.github_profile as any).commits as Array<any>).reverse().slice(0, 9).map((value, index) => (
						<div className="page_home_contribution_slideshow_card global_container_shadow" key={index}>
							<div className="page_home_contribution_slideshow_card_title">
								<h1>{value.repository.replace(/[^a-zA-Z]/g, " ")}</h1>
								<p>{value.message}</p>
							</div>
							<div className="global_container_divider"></div>
							<img src={`https://opengraph.githubassets.com/a381e358ffe83738fffb77d8ed4b26176d436243eb9a06064512026d6bb8ad7e/ichenglin/${value.repository}`} alt={value.repository}/>
							<div className="global_container_divider"></div>
							<div className="page_home_contribution_slideshow_card_description">
								<i className="fas fa-star"></i>
								<p>{`commited ${time_since(value.date)}`}</p>
							</div>
						</div>
					))}
					</div>
					<button id="page_home_contribution_slideshow_backward">
						<i className="fas fa-chevron-left"></i>
					</button>
					<button id="page_home_contribution_slideshow_forward">
						<i className="fas fa-chevron-right"></i>
					</button>
				</div>
				<a className="page_home_contribution_visit page_home_button" href="https://github.com/ichenglin" target="_blank" rel="noreferrer">
					<p>Visit Github</p>
					<i className="fa fa-arrow-right"/>
				</a>
			</section>
			{projects.map((project, index) => (
				<section className="page_home_container page_home_project" key={index}>
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
							<a className="page_home_project_content_visit page_home_button" href={project.website} target="_blank" rel="noreferrer">
								<p>Get Started</p>
								<i className="fa fa-arrow-right"/>
							</a>
						</div>
					</div>
				</section>
			))}
		</div>;
	}
}