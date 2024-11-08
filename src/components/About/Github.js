import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1
				className='project-heading'
				style={{ paddingBottom: '20px' }}
			>
				Judgemental<strong className='purple'> Github</strong> Calendar
			</h1>
			<GitHubCalendar
				username='rlondon3'
				blockSize={15}
				blockMargin={5}
				color='#c084f5'
				fontSize={16}
			/>
		</Row>
	);
}

export default Github;
