import "./App.css";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(030) 333-22-11",
          email: "mr.whiskazy@mail.meow",
        }}
      />
      <ContactCard
        contact={{
          name: "Fluffy",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(030) 543-22-11",
          email: "fluff@me.meow",
        }}
      />
      <ContactCard
        contact={{
          name: "Ms. Purrrson",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(030) 999-22-11",
          email: "purrrr@mail.meow",
        }}
      />
      <ContactCard
        contact={{
          name: "Felix",
          imgUrl: "http://placekitten.com/200/100",
          phone: "(030) 876-22-11",
          email: "feliksss@mail.meow",
        }}
      />
    </div>
  );
}

export default App;
