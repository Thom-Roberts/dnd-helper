import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import Spells from './components/spells';

export default function App(props: any) {
	
	return (
		<Container>
			<div className="App">
				<Spells />
			</div>
		</Container>
	);
}