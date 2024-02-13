import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./fonts/fonts.css";
import { Provider } from "react-redux";
import store from "./store/configureStore.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
