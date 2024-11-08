import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/ralph3.webp';
import Toolstack from './Toolstack';
import { FaMapMarkerAlt } from 'react-icons/fa';

function About() {
	return (
		<Container
			fluid
			className='about-section'
		>
			<Particle />
			<Container>
				<Row style={{ justifyContent: 'center', padding: '10px' }}>
					<Col
						md={7}
						style={{
							justifyContent: 'center',
							paddingTop: '30px',
							paddingBottom: '50px',
						}}
					>
						<div>
							<h1 style={{ fontSize: '2.1em' }}>
								About <strong className='purple'>Ralph</strong>
							</h1>
							<FaMapMarkerAlt />
							<span
								className='purple'
								style={{ paddingBottom: '20px' }}
							>
								{' '}
								Shasta Lake, California
							</span>
						</div>

						<Aboutcard />
					</Col>
					<Col
						md={5}
						style={{ paddingBottom: '50px' }}
						className='about-img'
					>
						<div
							style={{
								position: 'relative',
								width: '400px', // Adjust to your desired size
								height: '400px',
								borderRadius: '50%',
								overflow: 'hidden',
								boxShadow: 'inset 0 0 10px rgba(128, 0, 128, 0.5)',
							}}
						>
							{/* Image */}
							<img
								src={laptopImg}
								alt='about'
								className='img-fluid'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '50%',
								}}
							/>
							<div
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
									backgroundColor: 'rgba(0, 0, 0, 0.5)',
									borderRadius: '50%',
								}}
							/>
						</div>
					</Col>
				</Row>
				<h1 className='project-heading'>
					Professional <strong className='purple'>Skillset </strong>
				</h1>

				<Techstack />

				<h1 className='project-heading'>
					My <strong className='purple'>Tools</strong>
				</h1>
				<Toolstack />

				<Github />
			</Container>
		</Container>
	);
}

export default About;
