import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Type from './Type';
import myImg from '../../Assets/avatar.png';
import Tilt from 'react-parallax-tilt';

function Home() {
	const [blogPost, setBlogPost] = useState(null);
	async function getLatestBlogPosts() {
		const response = await fetch('https://gql.hashnode.com/', {
			// Changed API endpoint
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				query: `
					query {
						user(username: "ralphsmith") {
							publications(first: 1) {
								edges {
									node {
										posts(first: 1) {
											edges {
												node {
													title
													brief
													slug
													url
													coverImage {
														attribution
														photographer
													} 
												}
											}
										}
									}
								}
							}
						}
					}
				`,
			}),
		});

		const data = await response.json();
		return data.data.user.publications.edges[0].node.posts.edges[0].node;
	}

	useEffect(() => {
		async function fetchBlogPost() {
			try {
				const post = await getLatestBlogPosts();
				setBlogPost(post);
			} catch (error) {
				console.error('Error fetching blog post:', error);
			}
		}
		fetchBlogPost();
	}, []);

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
					<div className='home-about-body'>
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
						{blogPost && (
							<div className='latest-blog'>
								<h3 className='purple'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24' // Made it a bit bigger
										height='24'
										fill='currentColor'
										className='bi bi-journal-text blog-icon'
										viewBox='0 0 16 16'
									>
										<path d='M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5' />
										<path d='M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2' />
										<path d='M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z' />
									</svg>{' '}
									Latest Blog Post
								</h3>
								<a
									href={blogPost.url}
									target='_blank'
									rel='noopener noreferrer'
									className='blog-title purple'
								>
									{blogPost.title}
								</a>
								<p className='blog-brief'>{blogPost.brief}</p>
							</div>
						)}
					</div>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
