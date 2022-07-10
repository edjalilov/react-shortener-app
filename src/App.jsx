import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { Shortens } from "./components/Shortens/Shortens";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Form />
      <Shortens />
    </div>
  );
}

export default App;
