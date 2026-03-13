import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <section id="center">
        <h1 className="text-3xl font-bold text-center my-6">Photo Gallery</h1>

        <Gallery />
      </section>
    </>
  );
}

export default App;
