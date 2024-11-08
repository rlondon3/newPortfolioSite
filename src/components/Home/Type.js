import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					'Javascript, Ruby, and Python Developer',
					'HSK-4 Mandarin Speaker',
					'Lo-fi Hip-hop Producer',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
