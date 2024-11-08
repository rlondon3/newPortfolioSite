import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiPython,
	DiRuby,
} from 'react-icons/di';
function Projects() {
	return (
		<Container
			fluid
			className='project-section'
		>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					Ralph's<strong className='purple'> Projects </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col
						md={4}
						className='project-card'
					>
						<ProjectCard
							imgPath={<DiJavascript1 />}
							isBlog={false}
							title='Vanilla JS Table'
							description='This project was developed as a part of a coding challenge for a junior developer position(I did not get). The task was to call the JSON placeholder API to render a table of users; and create two buttons(view users, view posts) to mimic a SPA.'
							ghLink='https://github.com/rlondon3/vanilljsTable'
							demoLink='https://benevolent-salamander-32bde1.netlify.app/'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'
					>
						<ProjectCard
							imgPath={<DiReact />}
							isBlog={false}
							title='Number Guessing Game'
							description='Built in React 18 with Material UI. This project was originally a visualization of the binary search algorithm. Later it was refactored to be a fun number guessing game for kids; and to be used by my former coworkers at SMIC school in Beijing.'
							ghLink='https://github.com/rlondon3/guess-num-game'
							demoLink='https://binary-search-guessing-game.surge.sh/'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'
					>
						<ProjectCard
							imgPath={<DiNodejs />}
							isBlog={false}
							title='Martial Art Learning Platform'
							description={
								<>
									Currently in development using NodeJS with Typescript, a
									PostgreSQL database in Docker, Jasmine unit testing, and CI
									with Github actions. This project serves as a way to
									understand DevOps practices, IaC, and cloud development.
									<br />
									<br />
								</>
							}
							ghLink='https://github.com/rlondon3/jwm_backend'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'
					>
						<ProjectCard
							imgPath={<DiPython />}
							isBlog={false}
							title='Covid ETL'
							description='A project that was designed for the #cloudguruchallenge: the goal was to automate an ETL processing pipeline for COVID-19 data using Python and cloud services.'
							ghLink='https://github.com/rlondon3/covid_etl'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'
					>
						<ProjectCard
							imgPath={<DiRuby />}
							isBlog={false}
							title='Issue Tracker'
							description='Currently in development, this Ruby application uses SQLite3 to create, read, update, and delete issues. The application was programmed using OOP, Rspec unit tests, and has a CI pipeline with Github actions.'
							ghLink='https://github.com/rlondon3/issue_tracker'
							// demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
