import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <section id="center">
        <header className="mb-2 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
            📸 Photo Gallery
          </h1>
          <p className="text-sm text-gray-500">
            Browse and favourite photos from Picsum Photos
          </p>
        </header>

        <Gallery />
      </section>
    </>
  );
}

export default App;
