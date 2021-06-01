import React from 'react';
import './index.css';

export default function Content({ children }) {
	return (
		<main className='class-main'>
			{children}
		</main>

	);
}