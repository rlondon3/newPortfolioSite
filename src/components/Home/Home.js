import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Type from './Type';
import myImg from '../../Assets/avatar.png';
import Tilt from 'react-parallax-tilt';

function Home() {
	return (
		<section>
			<Container
				fluid
				className='home-section'
				id='home'
			>
				<Particle />
				<Container className='home-content'>
					<Row>
						<Col
							md={7}
							className='home-header'
						>
							<h1
								style={{ paddingBottom: 15 }}
								className='heading'
							>
								Welcome!{' '}
								<span
									className='wave'
									role='img'
									aria-labelledby='wave'
								>
									👋🏿
								</span>
							</h1>

							<h1 className='heading-name'>
								<strong className='main-name'> Raphael Smith</strong> is a
							</h1>

							<div style={{ textAlign: 'left' }}>
								<Type />
							</div>
						</Col>

						<Col
							md={5}
							style={{ paddingBottom: 20 }}
						>
							<Tilt>
								<img
									src={myImg}
									className='img-fluid'
									style={{
										borderRadius: '50%',
										width: '70%',
										position: 'relative',
										top: '40px',
									}}
									alt='avatar'
								/>
							</Tilt>
						</Col>
					</Row>
					<p className='home-about-body'>
						<br />
						My love languages are
						<i>
							<b className='purple'> Javascript, Ruby, and Python. </b>
						</i>
						<br />
						<br />I take pride in building &nbsp;
						<b className='purple'>web applications</b> that focus on{' '}
						<i>
							an optimized user experience, and{' '}
							<b className='purple'>data analysis.</b>
						</i>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</p>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
