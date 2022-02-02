import React from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import Button from './components/Button';

// Diferentes temas
const theme = {
	bg: '#65cc32',
	main: '#0c1906',
	disabled: '#b0cca3',
	hover: '#7ae544',
	active: '#5fb235',
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Button />
			</div>
		</ThemeProvider>
	);
}

export default App;
