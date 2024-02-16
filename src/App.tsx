import React from "react";
import "./fonts/fonts.css";
import "./App.css";
import { OverlayLoader } from "./components/OverlayLoader/OverlayLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteDefinitions from "./components/Routes/RouteDefinitions";

const App: React.FC = () => {
	return (
		<>
			<OverlayLoader />
			<RouteDefinitions />
		</>
	);
};

export default App;
