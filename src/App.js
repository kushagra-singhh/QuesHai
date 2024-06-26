import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Contribute from "./pages/Contribute";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contribute"
					element={<Contribute />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
