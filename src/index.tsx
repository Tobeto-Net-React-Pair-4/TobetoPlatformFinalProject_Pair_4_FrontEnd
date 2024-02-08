import ReactDOM from "react-dom/client";
import "./fonts/fonts.css";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/configureStore";
import "toastr/build/toastr.css";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
);
