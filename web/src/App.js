import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/sign/Login";
import Home from "./pages/Home";
import Border from "./pages/Home";

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <section>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/border" element={<Border />} />
                </Routes>
            </section>
            <footer></footer>
        </div>
    );
}

export default App;
