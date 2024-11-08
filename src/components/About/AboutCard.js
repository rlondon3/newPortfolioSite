import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Former teacher, turned seminarian, turned
						<span className='purple'> software developer.</span>
						<br />
						Currently employed as a{' '}
						<span className='purple'>front-end React developer</span>
						<br />
						at Catapult CMS.
						<br />
						<br />
						When I am not programming, I enjoy:
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Making Hip-hop Beats
						</li>
						<li className='about-activity'>
							<ImPointRight /> Teaching Martial Arts
						</li>
						<li className='about-activity'>
							<ImPointRight /> Enjoying Good Food
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Silence the noise, deliver value, and spotlight improvements."{' '}
					</p>
					<footer className='blockquote-footer'>Ralphie</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
