import "./App.css";
import travel_01 from "./assets/1.jpeg";
import travel_02 from "./assets/2.jpeg";
import travel_03 from "./assets/3.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Eventos from "./components/Eventos";
import Form from "./components/Form";

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
        title={"Salon 2"}
        subtitle={"Un salon de en sueño."}
        flipped={true}
      />
      <Eventos
        
        title={"Salon 3"}
        subtitle={"Este es el tercer salon donde hacen pruebas"}
        flipped={true}
      />

      <Form 
      title={"Salon 3"}
      subtitle={"Este es el tercer salon donde hacen pruebas"}
      flipped={true}
      />
      
    </div>
  );
}

export default App;
