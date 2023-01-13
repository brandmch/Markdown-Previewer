import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";

const renderText = (text) => {
  const __html = marked(text, { sanitize: true });
  return { __html };
};

const Editor = ({ setState }) => {
  return (
    <div className="editor">
      <textarea
        rows={15}
        cols={60}
        onChange={(event) => setState(event.target.value)}
      ></textarea>
    </div>
  );
};

const Previewer = ({ state }) => {
  return (
    <div className="previewer">
      <div dangerouslySetInnerHTML={renderText(state)} />
    </div>
  );
};

function App() {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <div className="App">
      <Editor setState={setText} />
      <Previewer state={text} />
      <footer>Brandon McHugh 2022</footer>
    </div>
  );
}

export default App;
