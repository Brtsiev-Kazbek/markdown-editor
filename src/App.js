import React from 'react'
import ReactMarkdown from "react-markdown";
import Editor from "./components/Editor";


function App() {
    const [rawMarkdown, setRawMarkdown] = React.useState('View here')
    const getRawMarkdown = (e) => { console.log(e.target.value); setRawMarkdown(e.target.value) }
  return (
    <div className="App">
      <div className="container">
          <Editor title="Markdown">
              <textarea onChange={getRawMarkdown} className="editor__textarea" placeholder="Write here!" />
          </Editor>
          <Editor title="Viewer">
              <ReactMarkdown children={rawMarkdown} className="viewer" />
          </Editor>

      </div>
    </div>
  );
}

export default App;
