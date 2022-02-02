// Button Component
import React from 'react';
// Styled Component
import { StyledButton } from './styled.js';

export default function Button() {
	return (
		<StyledButton onClick={ ()=>alert('hola mundo!') }>
			Test Button
		</StyledButton>
	);
};
