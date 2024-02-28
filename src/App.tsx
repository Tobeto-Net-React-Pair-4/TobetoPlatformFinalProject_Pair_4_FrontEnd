import React from "react";
import "./fonts/fonts.css";
import "./App.css";
import { OverlayLoader } from "./components/OverlayLoader/OverlayLoader";
import "bootstrap/dist/css/bootstrap.min.css";


import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './flags.css';

import RouteDefinitions from "./components/Routes/RouteDefinitions";

const App: React.FC = () => {
	return (
		<>
			<PrimeReactProvider>
				<OverlayLoader />
				<RouteDefinitions />
			</PrimeReactProvider>
		</>
	);
};

export default App;
