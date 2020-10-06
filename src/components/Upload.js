import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const inputHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("please select an image file (png or jpeg.)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={inputHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error} </div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default Upload;
