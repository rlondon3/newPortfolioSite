import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Type from './Type';
import myImg from '../../Assets/avatar.png';
import Tilt from 'react-parallax-tilt';

function Home() {
	const [blogPost, setBlogPost] = useState(null);
	const [currentBook, setCurrentBook] = useState(null);

	async function getCurrentBook() {
		const response = await fetch(process.env.REACT_APP_NOTION_KEY);
		const data = await response.json();
		return data;
	}

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
							publications(first: 50) {
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
		async function fetchData() {
			try {
				const post = await getLatestBlogPosts();
				const book = await getCurrentBook();
				setBlogPost(post);
				setCurrentBook(book);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		fetchData();
	}, []);

	return (
		<section style={{ zIndex: 0, position: 'relative' }}>
			<Container
				fluid
				className='home-section'
				id='home'
			>
				<Particle />
				<Container
					className='home-content'
					style={{ zIndex: 0, position: 'relative' }}
				>
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
					</div>
					<Row className='justify-content-between'>
						<Col md={6}>
							{blogPost && (
								<div className='latest-blog'>
									<h3 className='purple'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
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
									<div className='blog-title-container'>
										<a
											href={`${blogPost.url}`}
											target='_blank'
											rel='noopener noreferrer'
											className='blog-title'
										>
											{blogPost.title}
										</a>
									</div>
									<p className='blog-brief'>{blogPost.brief}</p>
								</div>
							)}
						</Col>
						<Col md={6}>
							{currentBook && (
								<div className='latest-blog'>
									<h3 className='purple'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='currentColor'
											className='bi bi-book blog-icon'
											viewBox='0 0 16 16'
										>
											<path d='M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z' />
										</svg>{' '}
										Currently Reading
									</h3>
									<div className='blog-title-container'>
										<a
											href={currentBook.url}
											target='_blank'
											rel='noopener noreferrer'
											className='blog-title'
										>
											{currentBook.title}
										</a>
									</div>
									<p className='blog-brief'>{currentBook.description}</p>
								</div>
							)}
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
