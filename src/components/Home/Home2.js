import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.png';
import Tilt from 'react-parallax-tilt';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
	return (
		<Container
			fluid
			className='home-about-section'
			id='about'
		>
			<Container>
				<Row>
					<Col
						md={8}
						className='home-about-description'
					>
						<h1 style={{ fontSize: '2.6em' }}>
							<span className='purple'> Ralph(ie)</span>
						</h1>
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
						</p>
					</Col>
					<Col
						md={4}
						className='myAvtar'
					>
						<Tilt>
							<img
								src={myImg}
								className='img-fluid'
								style={{
									borderRadius: '50%',
									width: '70%',
									position: 'relative',
									top: '-60px',
								}}
								alt='avatar'
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col
						md={12}
						className='home-about-social'
					>
						<h1>FIND ME ON</h1>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/rlondon3'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://twitter.com/codesmithr'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/raphael-smith-b91a65206/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.instagram.com/ralphiedidit'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
