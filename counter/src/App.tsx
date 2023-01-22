import "./App.scss";
import Counter from "./components/Counter";

const App: React.FC = () => {
	return (
		<>
			<Counter platform={"twitter"} target={12000} />
			<Counter platform={"youtube"} target={5000} />
			<Counter platform={"facebook"} target={7500} />
		</>
	);
};

export default App;
