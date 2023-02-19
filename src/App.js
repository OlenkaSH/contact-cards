import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src="http://placekitten.com/300/200" />
        <h3>Mr. Whiskerson</h3>
        <p>Phone: (030) 333-22-11</p>
        <p>Email: mr.whiskazy@mail.meow</p>
      </div>

      <div className="contact-card">
        <img src="http://placekitten.com/400/200" />
        <h3>Fluffy</h3>
        <p>Phone: (030) 543-22-11</p>
        <p>Email: fluff@me.meow</p>
      </div>

      <div className="contact-card">
        <img src="http://placekitten.com/400/300" />
        <h3>Ms. Purrrson</h3>
        <p>Phone: (030) 999-22-11</p>
        <p>Email: purrrr@mail.meow</p>
      </div>

      <div className="contact-card">
        <img src="http://placekitten.com/200/100" />
        <h3>Felix</h3>
        <p>Phone: (030) 876-22-11</p>
        <p>Email: feliksss@mail.meow</p>
      </div>
    </div>
  );
}

export default App;
