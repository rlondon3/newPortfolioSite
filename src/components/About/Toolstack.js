import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	SiVisualstudiocode,
	SiPostman,
	SiLinux,
	SiWindows,
	SiInsomnia,
	SiVisualstudio,
	SiJira,
} from 'react-icons/si';

function Toolstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col
				xs={4}
				md={2}
				className='tech-icons'
			>
				<SiVisualstudio />
			</Col>
			<Col
				xs={4}
				md={2}
				className='tech-icons'
			>
				<SiVisualstudiocode />
			</Col>
			<Col
				xs={4}
				md={2}
				className='tech-icons'
			>
				<SiPostman />
			</Col>
			<Col
				xs={4}
				md={2}
				className='tech-icons'
			>
				<SiInsomnia />
			</Col>
			<Col
				xs={4}
				md={2}
				className='tech-icons'
			>
				<SiLinux />
			</Col>
			<Col
				xs={4}
				md={2}
				className='tech-icons'
			>
				<SiWindows />
			</Col>
			<Col
				xs={4}
				md={2}
				className='tech-icons'
			>
				<SiJira />
			</Col>
		</Row>
	);
}

export default Toolstack;
