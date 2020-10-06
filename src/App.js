import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiGalleryLine } from "react-icons/ri";
import "./App.css";
import ImagesGrid from "./components/ImagesGrid";
import Modal from "./components/Modal";
import Upload from "./components/Upload";
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <header>
        <p>Ghost Gallery</p>
        <h1>
          <a href={"https://reactjs.org/"} rel="noopener">
            <FaReact />
          </a>
          &nbsp;
          <a href={"https://github.com/bughunter-99"} rel="noopener">
            <FiGithub />
          </a>
          &nbsp;
          <a href={"."} rel="noopener">
            <RiGalleryLine />
          </a>
          &nbsp;
        </h1>
      </header>
      <div className="title">
        <h2>Your Pictures</h2>
      </div>
      <Upload />
      <ImagesGrid setSelectedImg={setSelectedImage} />
      {selectedImage && (
        <Modal selectedImg={selectedImage} setSelectedImg={setSelectedImage} />
      )}
    </div>
  );
}

export default App;
