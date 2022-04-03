import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
