import "./App.css";
import travel_01 from "./assets/1.jpeg";
import travel_02 from "./assets/2.jpeg";
import travel_03 from "./assets/3.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Inicio" },
    { url: "#", title: "Nosotros" },
    { url: "#", title: "Cotizar" },
    { url: "#", title: "Contacto" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"Salon Sasago"}
        subtitle={
          "es un espacio ideal para realizar todo tipo de eventos sociales, empresariales, estudiantiles y mucho más, cuenta con un diseño arquitectónico totalmente diferente, simulando un gran jardín exterior con toda comodidad y confort de un área totalmente cerrada y climatizada.es un espacio ideal para realizar todo tipo de eventos sociales, empresariales, estudiantiles y mucho más, cuenta con un diseño arquitectónico totalmente diferente, simulando un gran jardín exterior con toda comodidad y confort de un área totalmente cerrada y climatizada."
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;
