import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <Particles
        className="particales-canvas"
        params={{
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00",
            }
          }

        }}
      />
      <Router>
        <Navbar />
        <Switch>
          <Route exact to="/">
            <Header />
            <AboutMe />
            <Technologies />
            <Projects />
            <ContactMe />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
