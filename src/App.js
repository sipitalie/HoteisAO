import React from 'react';
import Routes from './routes';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';

//import Mensagem from './components/mensagem';

import './index.css';

export default function App() {
	return (
		<Router>
			<Layout />
			<Routes />
		</Router>

	);
}
//<Mensagem/>