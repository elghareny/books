/** @format */

import "./App.css";
import AddForm from "./components/AddForm/AddForm";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import BookContainer from "./components/BookContainer/BookContainer";

function App() {
	return (
		<>
			<Header />
			<Container>
				<AddForm />
				<BookContainer />
			</Container>
		</>
	);
}

export default App;
